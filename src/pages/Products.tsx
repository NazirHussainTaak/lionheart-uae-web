import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, ShoppingCart, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import ProductQuickView from "@/components/ProductQuickView";

export default function Products() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(50);
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  return (
    <>
      <SEOHead
        title="Shop IT Hardware & Solutions | LionHeart Tech"
        description="Browse our selection of enterprise-grade laptops, servers, storage units, and desktop systems. Premium IT hardware solutions for businesses in UAE."
        keywords="buy laptops UAE, enterprise servers, storage solutions, desktop computers, IT hardware shop"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-pattern bg-spring-wood dark:bg-neutral-900 section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                Shop IT Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium laptops, servers, storage units, and desktop systems for your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="container-width px-6 py-16">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <Server className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We're currently setting up our product catalog. Check back soon or contact us directly for product inquiries.
              </p>
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const { node } = product;
                const image = node.images.edges[0]?.node;
                const price = node.priceRange.minVariantPrice;
                const variant = node.variants.edges[0]?.node;

                return (
                  <Card key={index} className="card-elevated h-full flex flex-col">
                    <Link to={`/product/${node.handle}`} className="block">
                      <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary/20">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || node.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Server className="h-16 w-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </Link>

                    <CardHeader>
                      <Link to={`/product/${node.handle}`}>
                        <CardTitle className="hover:text-primary transition-colors">
                          {node.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="line-clamp-2">
                        {node.description || "High-performance IT hardware for your business."}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold">
                          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1"
                          disabled={!variant?.availableForSale}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {variant?.availableForSale ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <ProductQuickView product={product} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
