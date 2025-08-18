export interface Category {
  _id: string;
  categoryName: string;
  categorySlug: string;
}

export interface Product {
  _id: string;
  productName: string;
  productSlug: string;
  productDescription: string;
  productImage: string;
  productPrice: number;
  productQuantity: number;
  productCategory: Category;
  createdAt: string;
  updatedAt: string;
}

