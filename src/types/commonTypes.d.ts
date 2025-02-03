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
