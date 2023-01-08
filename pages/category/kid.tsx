import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from '../../components/ui';

export default function KidPage() {

  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout title="Teslo-Shop | Categoría Niños" pageDescription="Encuentra los mejores artículos para niños en Teslo Shop">
      <Typography variant="h1" component="h1">Niños</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Productos para niños</Typography>

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
