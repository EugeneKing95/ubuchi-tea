"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/utils/types/productType";
import { useCartStore } from "@/lib/store/cartStore";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <img
        src={product.productImage || "https://via.placeholder.com/400"}
        alt={product.productName}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {product.productName}
        </CardTitle>
        <Badge variant="secondary">
          {product.productCategory?.categoryName}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.productDescription}
        </p>
        <p className="text-lg font-bold mt-3">${product.productPrice}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
