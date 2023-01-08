import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from '../../components/ui';

export default function WomenPage() {

  const { products, isLoading } = useProducts('/products?gender=women');

  return (
    <ShopLayout title="Teslo-Shop | Categoría Mujeres" pageDescription="Encuentra los mejores artículos para niños en Teslo Shop">
      <Typography variant="h1" component="h1">Mujeres</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Producto para mujeres</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : (
            <ProductList
              products={products}
            />
          )
      }
    </ShopLayout>
  )
}
