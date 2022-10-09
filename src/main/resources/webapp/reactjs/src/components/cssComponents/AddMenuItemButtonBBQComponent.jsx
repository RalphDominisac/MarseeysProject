import React from 'react';
import Button from "@mui/material/Button";

export default function AddMenuItemButtonBBQComponent({ addNewItemBBQModalFunction }) {
  return (
    <Button
      variant="outlined"
      onClick={addNewItemBBQModalFunction}
      sx={{
        "&.Mui-selected": {},
        "&.Mui-focusVisible": {
          border: "1px solid #1F1D2B",
        },
        ":focus": {
          border: "1px solid #1F1D2B",
        },
        ":hover": {
          border: "1px solid #1F1D2B",
        },
        mt: -3,
        ml: 85,
        width: 170,
        textTransform: "none",
        backgroundColor: "#F2A42A",
        borderColor: "#252836",
        borderRadius: 3,
        color: "white",
        height: 49,
        fontFamily: "Barlow Condensed",
        fontSize: "19px",
      }}
    >
      Add New Menu Item
    </Button>
  );
}
