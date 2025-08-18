import { ProductCard } from "@/components/productCard/productCard";
import { Product } from "@/utils/types/productType";
// import { Product } from "@/types/product";
// import { ProductCard } from "@/components/product/ProductCard";

export default async function ProductsPage() {
  const res = await fetch(
    "http://localhost:3000/api/common/product/get-product",
    {
      cache: "no-store",
    },
  );

  const response = await res.json();
  const products: Product[] = response.data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
