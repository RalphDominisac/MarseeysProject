import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemsCategoryButton2(props) {
   const { product, onAdd } = props;

  return (
    <Button
      onClick={() => onAdd(product)}
      variant="contained"
      className="itemButton"
      sx={{
        display: "block",
        mt: -3.8,
        ml: 1,
        width: 160,
        height: 115,
        textTransform: "none",
        borderRadius: 3,
        backgroundColor: "#402C2C",
        marginBottom: "40px",
      }}
    >
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "20px" }}>
        {product.name}
      </Typography>
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "14px" }}>
        Php {product.price}
      </Typography>

      {/* MUST BE BOOLEAN: DEPENDING ON THE INVENTORY STOCK FOR ITS AVAILABILITY, DISABLE BUTTON IF ITS INSUFFICIENT  */}
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "14px" }}>
        {/* {product.availables}  */} available
      </Typography>
    </Button>
  );
}
