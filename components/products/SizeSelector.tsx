import { Box, Button } from "@mui/material";
import { ISize } from "../../interfaces";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export function SizeSelector({ selectedSize, sizes }: Props) {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={ selectedSize === size ? 'primary' : 'info' }
        >
          {size}
        </Button>
      ))}
    </Box>
  )
}
