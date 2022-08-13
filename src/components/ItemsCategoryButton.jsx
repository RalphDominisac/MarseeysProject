import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemsCategoryButton({ title, price, availables }) {
  // const buttonColors = [
  //   "#402C2C",
  //   "#402C3D",
  //   "#392C40",
  //   "#2C3740",
  //   "#2C403D",
  //   "#2C4035",
  //   "#31402C",
  //   "#3D402C",
  //   "#40392C",
  //   "#402C2C",
  //   "#402C3D",
  //   "#2C3740",
  //   "#2C4035",
  //   "#3D402C",
  //   "#402C2C",
  // ];

  return (
    <Button
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
