export interface CartItemsProps {
  product: ProductProps;
  quantity: number;
}

interface ProductProps {
  price: number;
  name: string;
  description: string;
  categoryId: string;
}

interface CategoryProps {
  categoryId: string;
  name: string;
}
