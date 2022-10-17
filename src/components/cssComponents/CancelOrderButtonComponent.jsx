import React from 'react';
import Button from "@mui/material/Button";

export default function CancelOrderButtonComponent({onClickCancelModal}) {
  return (
    <React.Fragment>
      <Button
        onClick={onClickCancelModal}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#D33131", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#9E3F3F",
          ml: 7,
          mt: -7.4,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "145px",
          minHeight: "60px",
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Cancel Order
      </Button>
    </React.Fragment>
  );
}
