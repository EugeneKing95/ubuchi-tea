// import { useCartStore } from "@/store/cartStore";
"use client";
import { useCartStore } from "@/lib/store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 && <p>No items in cart</p>}

      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>
            {item.name} (x{item.quantity})
          </span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
    </div>
  },
}
