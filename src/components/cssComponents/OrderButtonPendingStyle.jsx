import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";



export default function OrderButtonPendingStyle({title,onClickFunc}) {
  return (
    <Button
      variant="outlined"
      onClick={onClickFunc}
      sx={{
        "&.Mui-selected": {},
        "&.Mui-focusVisible": {
          border: "1px solid #F2A42A",
        },
        ":focus": {
          border: "1px solid #F2A42A",
        },
        ":hover": {
          border: "1px solid #F2A42A",
        },
        mt: -0.5,
        ml: 2,
        mb: 3,
        width: 131,
        textTransform: "none",
        backgroundColor: "#1F1D2B",
        borderColor: "#252836",
        borderRadius: 3,
        color: "white",
        height: 49,
        fontFamily: "Barlow Condensed",
        fontSize: "19px",
      }}
    >
      {title}
    </Button>
  );
}
