interface ProductDTOProps {
  productPrice: number;
  productName: string;
  productDescription: string;
}

export class CartEntity {
  props: ProductDTOProps;
  constructor(props: ProductDTOProps) {
    this.props = props;
  }
}
