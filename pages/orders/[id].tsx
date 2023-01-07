import { Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CardList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import NextLink from 'next/link';
import CreditCardOffOutlinedIcon from "@mui/icons-material/CreditCardOffOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";


export default function OrderPage() {
  return (
    <ShopLayout title='Resumen de orden 121212111' pageDescription="Resumen de la orden">
      <Typography variant="h1" component='h1'>Orden: 121212111</Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlinedIcon /> }
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlinedIcon /> }
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Dirección de entrega</Typography>
                <NextLink href="/checkout/address" passHref legacyBehavior>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Nelson Soto</Typography>
              <Typography>Evergreen Terrace 742</Typography>
              <Typography>Stittsville</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 23123123</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref legacyBehavior>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Pagar
                </Button>

                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlinedIcon /> }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
