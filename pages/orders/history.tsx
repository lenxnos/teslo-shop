import { Chip, Grid,  Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts';
import NextLink from 'next/link';


const rows = [
  { id: 1, paid: true, fullname: 'Nelson Soto', url: '/' },
  { id: 2, paid: false, fullname: 'Eduardo Marcano', url: '/' },
  { id: 3, paid: true, fullname: 'Karolina Smith', url: '/' },
  { id: 4, false: true, fullname: 'John Peterson', url: '/' },
  { id: 5, paid: true, fullname: 'Laura Martinez', url: '/' },
  { id: 6, paid: true, fullname: 'Vivian Morales', url: '/' },
]
 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
      field: 'paid',
      headerName: 'Pagada',
      description: 'Muestra información si está paga la orden o no',
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        params.row.paid
          ? <Chip color="success" label="Pagada " variant='outlined' />
          : <Chip color="error" label="Pagada" variant='outlined' />
      )
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    description: 'Podrá ver el detalle de una ordern',
    width: 300,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
        <Link underline='always'>
          Ver Orden
        </Link>
      </NextLink>
    )
  }
];


export default function HistoryPage() {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component="h1">Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{ hegith: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            autoHeight
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
