import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemsCategoryButton({ title, price, availables }) {
  return (
    <Button
      variant="contained"
      sx={{
        display: "block",
        mt: -3.8,
        ml: 1,
        width: 160,
        height: 110,
        textTransform: "none",
      }}
    >
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "20px" }}>
        {title}
      </Typography>
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "14px" }}>
        Php {price}
      </Typography>
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "14px" }}>
        {availables} available
      </Typography>
    </Button>
  );
}
