import { useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/products";

type Category = "all" | "finansial" | "self-improvement" | "bundle";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "finansial", label: "Buku Finansial" },
  { value: "self-improvement", label: "Self-Improvement" },
  { value: "bundle", label: "Bundle Hemat" },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Koleksi Buku
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Temukan Buku yang <span className="gradient-text">Tepat Untukmu</span>
          </h2>
          <p className="text-muted-foreground">
            Pilih dari berbagai buku finansial dan self-improvement yang akan 
            membantumu berkembang dan sukses di usia muda.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "gradient-bg text-primary-foreground glow-effect"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* More CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-bg hover-glow text-primary-foreground"
            onClick={() => window.open("https://www.tiktok.com/@dash", "_blank")}
          >
            Lihat Semua di TikTok Shop
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="group rounded-2xl glass-card overflow-hidden hover-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in opacity-0"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Book Cover Placeholder */}
      <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-primary/50" />
        </div>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full gradient-bg text-xs font-medium text-primary-foreground">
            {product.badge}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button
            className="w-full gradient-bg text-primary-foreground"
            onClick={() => window.open(product.tiktokUrl, "_blank")}
          >
            Beli Sekarang
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
