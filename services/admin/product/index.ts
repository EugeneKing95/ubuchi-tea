import Cookies from "js-cookie";

export const add_new_product = async (formatData: any) => {
  try {
    const res = await fetch("/api/admin/products/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formatData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding new product: try again later ", error);
  }
};

export const delete_a_product = async (id: string) => {
  try {
    const res = await fetch(`/api/Admin/product/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const get_product_by_id = async (id: string) => {
  try {
  } catch {}
};
