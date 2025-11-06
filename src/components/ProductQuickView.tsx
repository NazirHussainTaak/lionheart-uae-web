import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import ProductImageViewer from "@/components/ProductImageViewer";
import { Link } from "react-router-dom";

interface ProductQuickViewProps {
  product: any;
  trigger?: React.ReactNode;
}

export default function ProductQuickView({ product, trigger }: ProductQuickViewProps) {
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.node.variants.edges[0]?.node);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.node.variants.edges[0]?.node.selectedOptions.forEach((opt: any) => {
      initial[opt.name] = opt.value;
    });
    return initial;
  });
  const addItem = useCartStore(state => state.addItem);

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);

    const matchingVariant = product.node.variants.edges.find((edge: any) => {
      return edge.node.selectedOptions.every((opt: any) => newOptions[opt.name] === opt.value);
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
    setOpen(false);
  };

  const images = product.node.images.edges.map((edge: any) => ({
    url: edge.node.url,
    altText: edge.node.altText,
    is3D: edge.node.url.endsWith('.glb') || edge.node.url.endsWith('.gltf')
  }));

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="w-full"
      >
        <Eye className="h-4 w-4 mr-2" />
        Quick View
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{product.node.title}</DialogTitle>
            <DialogDescription>
              {product.node.description || "View product details"}
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Product Images */}
            <div className="max-w-md mx-auto w-full bg-white dark:bg-white rounded-lg p-4">
              <ProductImageViewer images={images} productTitle={product.node.title} />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">
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
              {product.node.options.map((option: any) => (
                <div key={option.name} className="space-y-2">
                  <label className="font-semibold text-sm">{option.name}</label>
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
              {product.node.description && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {product.node.description}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1"
                  disabled={!selectedVariant?.availableForSale}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link to={`/product/${product.node.handle}`}>
                    View Full Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
