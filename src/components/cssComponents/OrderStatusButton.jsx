import React from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function OrderStatusButton({ onClickStatusTitle, onClickStatusFunction }) {
  return (
    <React.Fragment>
      <Toolbar>
        <Button
          onClick={onClickStatusFunction}
          sx={{
            ":hover": {
              bgcolor: "#787589", // theme.palette.primary.main
            },
            color: "white",
            backgroundColor: "#504C64",
            ml: -1,
            mt: 5,
            mr: 2,
            width: 10,
            borderRadius: 2,
            fontFamily: "Barlow Condensed",
            fontSize: "17px",
          }}
          style={{
            maxWidth: "30px",
            maxHeight: "30px",
            minWidth: "80px",
            minHeight: "40px",
          }}
          size="small"
        >   
          {onClickStatusTitle}
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
