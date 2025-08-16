"use client";

import { useEffect, useState } from "react";
// import { products } from "@/utils/product";

export default function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div>
        {/* <img */}
        {/*   src={product.image} */}
        {/*   alt={product.name} */}
        {/*   className="w-full h-48 object-cover rounded-t-lg" */}
        {/* /> */}
        <h2 className="text-xl font-semibold mt-2">JOB</h2>
        <p className="text-gray-600"> Macha</p>
        <p className="text-lg font-bold mt-2">$4</p>
      </div>
    </div>
  );
}
