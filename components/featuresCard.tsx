import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "./productCard/productCard";
// import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  }[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Best Selling Products
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
