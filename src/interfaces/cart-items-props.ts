export interface CartItemsProps {
  product: ProductProps;
  quantity: number;
}

interface ProductProps {
  price: number;
  name: string;
  description: string;
}

interface CategoryProps {
  name: string;
}
