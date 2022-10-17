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
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TableNumberButtons from "./TableNumberButtons";


function preventDefault(event) {
  event.preventDefault();
}

export default function PaymentOrderSidePage() {
  const [ordertype, setOrderType] = React.useState("");
  const [discount, setDiscount] = React.useState("");

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleChange2 = (event) => {
    setDiscount(event.target.value);
  };

  return (
    <React.Fragment>
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

      <Typography
        sx={{ ml: 1, mt: 5, fontFamily: "Barlow Condensed", fontSize: 25 }}
      >
        Status
      </Typography>

      <FormControl
        sx={{
          m: 1,
          width: 130,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: 10,
          height: 42,
          mt: -5,
        }}
      >
        <Select
          value={ordertype}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "1px solid white",
              },
            },

            // more accurate dropdown effect
            // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

            borderRadius: 3,
            width: 130,
            height: 42,
            fontFamily: "Barlow Condensed",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "#3F4351",
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#3F4351",
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "#3F4351",
                },
                backgroundColor: "#252836",
              },
            },
          }}
        >
          <MenuItem value="">Select Order Status</MenuItem>
          <MenuItem value={"Packing"}>Preparing</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
      </FormControl>

      <Typography
        sx={{
          mt: 0,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Customer:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 11,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: 1,
        }}
      >
        Juan Pablo
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Type:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 7,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: 1,
        }}
      >
        Dine In
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Table No.:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 11,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: 1,
        }}
      >
        4
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Comments:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 12,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        No Shrimp
      </Typography>

      <Button
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 33,
          mt: 8,
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
        Finalize Order
      </Button>

      <Button
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#A8E267", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#8EC154",
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
        Print Receipt
      </Button>
    </React.Fragment>
  );
}
    