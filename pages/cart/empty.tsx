import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link';

export default function EmptyPage() {
  return (
    <ShopLayout title="Carrito de compra vacío" pageDescription="No hay artículos en el carrito de compras">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito está vació</Typography>
          <NextLink href="/" passHref legacyBehavior>
            <Link typography="h4" color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}
