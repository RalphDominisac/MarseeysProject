import * as React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { AppBar } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DecreIncreCounter from "./DecreIncreCounter";

import TextField from "@mui/material/TextField";








function preventDefault(event) {
  event.preventDefault();
}

export default function OrderSidePage() {






  return (
    <React.Fragment>
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Order #0001
      </Typography>

      <Button
        variant="contained"
        sx={{
          "&:hover": {
            // backgroundColor: "#02A7DD",
            backgroundColor: "#FFB644",
          },
          mt: -8,
          ml: 44,
          width: 155,
          height: 30,
          backgroundColor: "#F2A42A",
          borderRadius: 3,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
        }}
      >
        Save to Draft
      </Button>

      <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 5 }}>
        <Button
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
    
        >
          Dine In
        </Button>
        <Button
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
       
        >
          Pickup
        </Button>
        <Button
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
       
        >
          Delivery
        </Button>
      </Stack>

      <Typography class="itemNameTag" sx={{ ml: 1 }}>
        ITEM NAME
      </Typography>

      <Typography class="qtyTag" sx={{ ml: 1 }}>
        QTY
      </Typography>

      <Typography class="deliveryTag" sx={{ ml: 1 }}>
        PRICE
      </Typography>

      {/* <Divider sx={{ mt: -2, backgroundColor: "#504C64", borderRadius: 10 }} /> */}

      <Typography sx={{ ml: 2, mt: -3, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - -
      </Typography>

      <Typography class="orderItemStack" sx={{ color: "white" }}>
        Salted Egg Chicken (Half)
      </Typography>

      <DecreIncreCounter />

      <Typography class="initialPriceTag">Php 2000.00</Typography>

      <Typography class="menuPriceTag">Php 2000.00</Typography>

      <TextField
        className="inputRounded"
        placeholder="Order request"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 335}}
      />

      <Button
        sx={{
          ":hover": {
            bgcolor: "#D33131", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#9E3F3F",
          ml: 48,
          mt: -5,
          width: 10,
          borderRadius: 5,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "115px",
          minHeight: "40px",
        }}
        size="small"
      >
        Remove Item
      </Button>

      <Typography sx={{ ml: 2, mt: 1, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - -
      </Typography>

      {/* INCREMENT ITEMS (SPACE HERE) */}
      {/* PUT A NEXT PAGE BUTTON IF NUMBER OF ITEMS EXCEEDS TO 4 */}

      <Button
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 3,
          mt: 44,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "220px",
          minHeight: "40px",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Apply Voucher
      </Button>

      <Typography
        sx={{
          ml: 3,
          mt: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Sub Total:
      </Typography>

      {/* <Typography
        sx={{
          ml: 20,
          mt: -3,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "16px",
        }}
      >
        Php 8000.00
      </Typography> */}

      <Typography
        sx={{
          ml: 20,
          mt: -3.2,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
        }}
      >
        Php 8000.00
      </Typography>

      <Button
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 35,
          mt: -9.8,
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
    