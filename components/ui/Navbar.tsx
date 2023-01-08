import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import  SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AppBar, Box, Button,  Link, Typography, Toolbar, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {

  const { asPath } = useRouter();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button
                color={
                  asPath === '/category/men'
                    ? 'primary'
                    : 'info' 
                }
              >Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button
                color={
                  asPath === '/category/women'
                    ? 'primary'
                    : 'info' 
                }
              >Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button
                color={
                  asPath === '/category/kid'
                    ? 'primary'
                    : 'info' 
                }
              >Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  )
}
