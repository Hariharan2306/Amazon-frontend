export type HeaderAndNavBarProps = {
  fetchProductsNames: (search: string) => void;
  products: Option[];
};
export type Option = {
  label: string;
  value: string;
};

export type ItemDetailProps = {
  productDetails: ProductData;
  fetchItemDetails: (search: string) => void;
  addToCart: (userName: string, productId: string) => void;
};

export type CartProps = {
  fetchCartData: (userName: string) => void;
  deleteFromCart: (userName: string, id: string | number) => void;
  addCart: (userName: string, productId: string | number) => void;
  cartData: CartDetails[];
};

export type CartDetails = {
  quantity: number;
  productId: number;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  stockStatus: "In Stock" | "Out of Stock";
  productDescription: string;
  freeShipping: "Yes" | "No";
};

export type ProductData = {
  productId: number;
  productName: string;
  productDescription: string;
  category: string;
  brand: string;
  costPrice: number;
  sellingPrice: number;
  discount: number;
  stockQuantity: number;
  stockStatus: "In Stock" | "Out of Stock";
  deliveryTime: string;
  shippingCost: number;
  freeShipping: "Yes" | "No";
  returnPolicy: string;
  specifications: string;
  tags: string;
  ratings: number;
  reviewsCount: number;
  frequentlyBoughtTogether: string;
};
