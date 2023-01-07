import { Grid } from "@mui/material";
import { IProduct } from "../../interfaces";
import { ProductCart } from "./ProductCard";


interface Props {
  products: IProduct[];
}

export function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCart
          key={product.slug}
          product={product}
        />
      ))}
    </Grid>
  )
}
