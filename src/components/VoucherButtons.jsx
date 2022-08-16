import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function VoucherButtons({ discountPercent}) {
  return (
    <Button
      variant="contained"
      className="itemButton"
      sx={{
        display: "block",
        mt: 4,
        ml: 1,
        width: 160,
        height: 115,
        textTransform: "none",
        borderRadius: 3,
        backgroundColor: "#402C2C",
      }}
    >
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "20px" }}>
        {discountPercent} off
      </Typography>
    </Button>
  );
}
