interface ProductProps {
  price: number
  name: string
  description: string
  categoryId: string
}

export interface CartItemsProps {
  product: ProductProps
  quantity: number
}
