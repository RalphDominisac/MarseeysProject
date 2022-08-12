import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonComponent({ title }) {
  return (
    <Button
      variant="outlined"
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
        mt: 1,
        ml: 1,
        width: 131,
        textTransform: "none",
        backgroundColor: "#1F1D2B",
        borderColor: "#252836",
        borderRadius: 3,
        color: "white",
        height: 49,
      }}
    >
      {title}
    </Button>
  );
}
