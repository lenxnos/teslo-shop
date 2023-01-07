import { Box, IconButton, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface Props {
  
}

export function ItemCounter() {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}> 1 </Typography>
      <IconButton>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  )
}
