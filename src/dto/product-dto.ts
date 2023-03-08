interface ProductDTOProps {
  productPrice: number;
  productName: string;
  productDescription: string;
}

export class CartDto {
  constructor(
    productPrice: number,
    productName: string,
    productDescription: string
  ) {}
}
