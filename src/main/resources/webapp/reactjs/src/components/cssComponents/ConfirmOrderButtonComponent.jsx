import React from 'react';
import Button from "@mui/material/Button";

export default function ConfirmOrderButtonComponent({ onClickConfirmModal }) {
  return (
    <React.Fragment>
      <Button
        onClick={onClickConfirmModal}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 33,
          mt: 4,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "210px",
          minHeight: "60px",
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Confirm Order
      </Button>
    </React.Fragment>
  );
}
