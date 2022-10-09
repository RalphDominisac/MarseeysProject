import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FoodTraysItemButtonStyle({ title, onClick}) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className="itemButton"
      sx={{
        display: "block",
        mt: -3.8,
        ml: 1,
        width: 160,
        height: 50,
        textTransform: "none",
        borderRadius: 3,
        backgroundColor: "orange",
      }}
    >
      <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "20px" }}>
        {title}
      </Typography>
    </Button>
  );
}
