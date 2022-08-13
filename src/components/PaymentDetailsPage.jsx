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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";








function preventDefault(event) {
  event.preventDefault();
}

export default function PaymentDetailsPage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Payment Details
      </Typography>

      <Button
        variant="contained"
        sx={{
          "&:hover": {
            // backgroundColor: "#02A7DD",
            backgroundColor: "#787589",
          },
          mt: -8,
          ml: 44,
          width: 155,
          height: 30,
          backgroundColor: "#504C64",
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
          Cash
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
          Bank/GCash
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
          Ar/Credit
        </Button>
      </Stack>

      <Typography sx={{ ml: 2, mt: 1, color: "#504C64" }}>
        ____________________________________________________
      </Typography>

      <Typography
        class="itemNameTag"
        sx={{ ml: 3, mb: 1, fontFamily: "Barlow Condensed", fontSize: "19px" }}
      >
        Customer Name
      </Typography>

      <TextField
        className="inputRounded"
        value="Juan Pablo"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 310 }}
      />

      <Button
        sx={{
          ":hover": {
            bgcolor: "#D33131", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#504C64",
          ml: 43,
          mt: -5,
          width: 10,
          borderRadius: 3,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "140px",
          minHeight: "40px",
        }}
        size="small"
      >
        CHOOSE FROM LIST
      </Button>

      <FormControl
        sx={{
          m: 1,
          width: 130,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: 2.8,
          height: 38,
        }}
      >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            borderRadius: 3,
            width: 130,
            height: 38,
            fontFamily: "Barlow Condensed"
          }}
        >
          <MenuItem value="">
            Delivery
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Typography sx={{ ml: 2, mt: 1, color: "#504C64" }}>
        ____________________________________________________
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
    