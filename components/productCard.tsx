// app/products/page.tsx
export default async function ProductsPage() {
  const res = await fetch(
    "http://localhost:3000/api/common/product/get-product",
    {
      cache: "no-store", // ensures fresh data
    },
  );
  const response = await res.json();
    const products = response.data;
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product: any) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
