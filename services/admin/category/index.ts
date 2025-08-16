import Cookies from "js-cookie";

export const add_new_category = (async = (formData: any) => {
  try {
    const res = await fetch(`/api/admin/category/add_new_category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add new Category ", error);
  }
});

export const get_all_categories = async () => {
  try {
    const res = await fetch("/api/common/category/getCategory", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in getting all Categories (service) =>", error);
  }
};

export const delete_a_category = async (id: string) => {
  try {
    const res = await fetch(`/api/admin/category/delete_a_category?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in deleting Categories (service) =>", error);
  }
};

export const update_a_category = async (formData: any) => {
  try {
    const res = await fetch(`/api/Admin/category/update-category`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in updating Categories (service) =>", error);
  }
};

export const get_category_by_id = async (id: string) => {
  try {
    const res = await fetch(
      `/api/common/category/get-category-by-id?id=${id}`,
      {
        method: "GET",
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in getting Categories by ID (service) =>", error);
  }
};
