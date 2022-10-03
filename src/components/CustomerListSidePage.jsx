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

export default function CustomerListSidePage() {
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
      {/* <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: 30,
          fontFamily: "Barlow Condensed",
          textAlign: "left",
          mt: -1,
        }}
      >
        Statistics - (not that necessary at the moment)
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 2,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 17,
        }}
      >
        TOP CUSTOMERS
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 41,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 17,
          mb: 1,
        }}
      >
        TOTAL AMOUNT OF ORDERS
      </Typography>

      <Typography sx={{ ml: 1, mt: -0.8, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - -
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 2,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Juan Pablo
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 45,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: 1,
        }}
      >
        Php 2000.00
      </Typography>

      <Typography sx={{ ml: 1, mt: -0.9, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - -
      </Typography>

      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={220}
        marginLeft={1}
        height={135}
      >
        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: 1,
            ml: 8,
          }}
        >
          Total Sales
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: -1,
            ml: 9.5,
          }}
        >
          (Overall)
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "30px",
            mt: 1,
            ml: 3,
          }}
        >
          Php 123,000.00
        </Typography>
      </Box>
     
      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={220}
        marginLeft={31}
        height={135}
        marginTop={-16.8}
      >
        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: 1,
            ml: 7,
          }}
        >
          Total Number
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: -1,
            ml: 9.5,
          }}
        >
          of Orders
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "30px",
            mt: 1,
            ml: 11,
          }}
        >
          1500
        </Typography>
      </Box>

      
      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={220}
        marginLeft={1}
        height={115}
        marginTop={1}
      >
        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "20px",
            mt: 1,
            ml: 8,
          }}
        >
          Total Sales
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "20px",
            mt: -1,
            ml: 9.5,
          }}
        >
          (Today)
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "21px",
            mt: 1,
            ml: 6,
          }}
        >
          Php 123,000.00
        </Typography>
      </Box>

    

      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={220}
        marginLeft={31}
        height={117}
        marginTop={-14.5}
      >
        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: 0,
            ml: 8,
          }}
        >
          Total Sales
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            mt: -1,
            ml: 8,
          }}
        >
          (This Week)
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: "21px",
            mt: 1,
            ml: 7,
          }}
        >
          Php 123,000.00
        </Typography>
      </Box> */}
    </React.Fragment>
  );
}
    