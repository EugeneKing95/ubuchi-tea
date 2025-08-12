"use client"

import { useEffect, useState } from "react";
import { products } from "@/utils/product";

export default function ProductCard() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md group coursor-pointer hover:shadow-lg transition-shadow">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
      ))}
      hello
    </div>
  );
}
