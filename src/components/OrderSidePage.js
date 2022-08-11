import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
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
        sx={{ mt: -8, ml: 41, width: 155, height: 30 }}
      >
        Save to Draft
      </Button>

      <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 5 }}>
        <Button
          variant="contained"
          sx={{ width: 131, textTransform: "none", height: 50 }}
        >
          Dine In
        </Button>
        <Button variant="contained" sx={{ width: 131, textTransform: "none" }}>
          Pickup
        </Button>
        <Button variant="contained" sx={{ width: 131, textTransform: "none" }}>
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
        sx={{ ml: 3, width: 335 }}
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
    </React.Fragment>
  );
}
    