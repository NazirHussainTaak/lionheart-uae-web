import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ShoppingCart, ArrowLeft, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import ProductImageViewer from "@/components/ProductImageViewer";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
      const data = await fetchProductByHandle(handle);
      setProduct(data);
      
      if (data?.variants?.edges?.[0]) {
        setSelectedVariant(data.variants.edges[0].node);
        const initialOptions: Record<string, string> = {};
        data.variants.edges[0].node.selectedOptions.forEach((opt: any) => {
          initialOptions[opt.name] = opt.value;
        });
        setSelectedOptions(initialOptions);
      }
      
      setLoading(false);
    };
    loadProduct();
  }, [handle]);

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);

    const matchingVariant = product.variants.edges.find((edge: any) => {
      return edge.node.selectedOptions.every((opt: any) => newOptions[opt.name] === opt.value);
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node);
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Server className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <Link to="/products">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const images = product.images.edges.map((edge: any) => ({
    url: edge.node.url,
    altText: edge.node.altText,
    is3D: edge.node.url.endsWith('.glb') || edge.node.url.endsWith('.gltf')
  }));

  return (
    <>
      <SEOHead
        title={`${product.title} | LionHeart Tech`}
        description={product.description || `Buy ${product.title} - Premium IT hardware solution for businesses in UAE.`}
        keywords={`${product.title}, IT hardware, buy online UAE`}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container-width px-6 py-12">
          <Link to="/products">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image Viewer */}
            {images.length > 0 ? (
              <ProductImageViewer images={images} productTitle={product.title} />
            ) : (
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center">
                <Server className="h-24 w-24 text-muted-foreground" />
              </div>
            )}

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-heading font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold text-primary mb-4">
                  {selectedVariant.price.currencyCode} {parseFloat(selectedVariant.price.amount).toFixed(2)}
                </p>
                {selectedVariant.availableForSale ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                    Out of Stock
                  </Badge>
                )}
              </div>

              {/* Options */}
              {product.options.map((option: any) => (
                <div key={option.name} className="space-y-2">
                  <label className="font-semibold">{option.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value: string) => (
                      <Button
                        key={value}
                        variant={selectedOptions[option.name] === value ? "default" : "outline"}
                        onClick={() => handleOptionChange(option.name, value)}
                        size="sm"
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Description */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || "High-performance IT hardware solution designed for enterprise needs."}
                </p>
              </div>

              {/* Add to Cart */}
              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full md:w-auto"
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
