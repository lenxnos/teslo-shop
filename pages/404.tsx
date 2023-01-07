import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

export default function Custom404 () {
  return (
    <ShopLayout title="Teslo Shop | 404" pageDescription="Página no encontrada">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>404 |</Typography>
        <Typography variant="h2" marginLeft={2}>No encontramos ninguna página</Typography>
      </Box>
    </ShopLayout>
  )
}