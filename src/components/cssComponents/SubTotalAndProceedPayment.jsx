import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function SubTotalAndProceedPayment({subTotalPriceOrderSide, modalFunctionProceedToPayment}) {
  return (
    <React.Fragment>
      <Typography
        sx={{
          ml: 9,
          mt: 9,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Sub Total:
      </Typography>
      <Typography
        sx={{
          ml: 20,
          mt: -3.4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Php {subTotalPriceOrderSide}
      </Typography>
      <Button
        onClick={modalFunctionProceedToPayment}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 35,
          mt: -7,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "220px",
          minHeight: "73px",
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Proceed to Payment
      </Button>
    </React.Fragment>
  );
}
