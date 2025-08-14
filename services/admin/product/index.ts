import Cookies from "js-cookie";

export const add_new_product = async (formatData: any) => {
  try {
    const res = await fetch("/api/Admin/product/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formatData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding new product:", error);
  }
};
