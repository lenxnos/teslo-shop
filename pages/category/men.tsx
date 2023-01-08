import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from '../../components/ui';

export default function MenPage() {

  const { products, isLoading } = useProducts('/products?gender=men');
  
  return (
    <ShopLayout title="Teslo-Shop | Categoría Hombres" pageDescription="Encuentra los mejores artículos para niños en Teslo Shop">
      <Typography variant="h1" component="h1">Hombres</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Productos para hombres</Typography>

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
