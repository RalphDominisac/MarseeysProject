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

import ModalSaveToDraft from "./ModalSaveToDraft";









function preventDefault(event) {
  event.preventDefault();
}

export default function PaymentDetailsSidePage() {

 const [modalOpenSaveToDraft, setModalOpenSaveToDraft] = useState(false);


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
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Payment Details
      </Typography>

      <Button
        onClick={() => {
          setModalOpenSaveToDraft(true);
        }}
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
      {modalOpenSaveToDraft && (
        <ModalSaveToDraft setOpenModalSaveToDraft={setModalOpenSaveToDraft} />
      )}

      {/* <Stack spacing={2} direction="row" sx={{ mt: 3, ml: 5 }}>
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
      </Stack> */}

      <Typography sx={{ ml: 2, mt: 0, mb: -2, color: "#504C64" }}>
        ____________________________________________________
      </Typography>

      <Typography
        class="itemNameTag"
        sx={{
          ml: 3,
          mb: 1,
          // mt: 0,
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Customer Name
      </Typography>

      <TextField
        className="inputRounded"
        value="Juan Pablo"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 460, mt: -2 }}
      />

      {/* <Button
        sx={{
          ":hover": {
            bgcolor: "#787589", // theme.palette.primary.main
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
      </Button> */}

      <FormControl
        sx={{
          m: 1,
          width: 130,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: 2.8,
          height: 42,
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
          <MenuItem value="">Delivery</MenuItem>
          {/* <MenuItem value={"Delivery"}>Delivery</MenuItem> */}
          <MenuItem value={"Pick-Up"}>Pick-Up</MenuItem>
          <MenuItem value={"Dine In"}>Dine In</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          m: 1,
          width: 324,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: 20,
          height: 42,
          mt: -6.2,
          mb: -2,
        }}
      >
        <Select
          value={discount}
          onChange={handleChange2}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid white",
              },
            },

            // more accurate dropdown effect
            // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

            borderRadius: 3,
            width: 324,
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
          <MenuItem value="">Discount Applied: 10%</MenuItem>
          {/* <MenuItem value={10}>Discount Applied: 10%</MenuItem> */}
          <MenuItem value={20}>Discount Applied: 20%</MenuItem>
          <MenuItem value={30}>Discount Applied: 30%</MenuItem>
          <MenuItem value={40}>Discount Applied: 40%</MenuItem>
          <MenuItem value={50}>Discount Applied: 50%</MenuItem>
        </Select>
      </FormControl>

      <Typography
        class="itemNameTag"
        sx={{
          ml: 3,
          mb: 1,
          mt: -1,
          // mt: 0,
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Assign Table Number
      </Typography>

      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={450}
        marginLeft={3}
        height={283}
      >
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="1" />
          <TableNumberButtons tableNum="2" />
          <TableNumberButtons tableNum="3" />
          <TableNumberButtons tableNum="4" />
          <TableNumberButtons tableNum="5" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="6" />
          <TableNumberButtons tableNum="7" />
          <TableNumberButtons tableNum="8" />
          <TableNumberButtons tableNum="9" />
          <TableNumberButtons tableNum="10" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="11" />
          <TableNumberButtons tableNum="12" />
          <TableNumberButtons tableNum="13" />
          <TableNumberButtons tableNum="14" />
          <TableNumberButtons tableNum="15" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="16" />
          <TableNumberButtons tableNum="17" />
          <TableNumberButtons tableNum="18" />
          <TableNumberButtons tableNum="19" />
          <TableNumberButtons tableNum="20" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="21" />
          <TableNumberButtons tableNum="22" />
          <TableNumberButtons tableNum="23" />
          <TableNumberButtons tableNum="24" />
          <TableNumberButtons tableNum="25" />
        </Stack>

        {/* Kubo Numbers: */}

        <Button
          variant="contained"
          sx={{
            "&:hover": {
              // backgroundColor: "#02A7DD",
              backgroundColor: "#787589",
            },
            mt: -57,
            ml: 41,
            mb: 0.1,
            minWidth: 70,
            height: 70,
            backgroundColor: "#504C64",
            borderRadius: 10,
            padding: 0,
          }}
        >
          <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
            Kubo 1
          </Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            "&:hover": {
              // backgroundColor: "#02A7DD",
              backgroundColor: "#787589",
            },
            mt: -40.5,
            ml: 41,
            mb: 0.1,
            minWidth: 70,
            height: 70,
            backgroundColor: "#504C64",
            borderRadius: 10,
            padding: 0,
          }}
        >
          <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
            Kubo 2
          </Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            "&:hover": {
              // backgroundColor: "#02A7DD",
              backgroundColor: "#787589",
            },
            mt: -24,
            ml: 41,
            mb: 0.1,
            minWidth: 70,
            height: 70,
            backgroundColor: "#504C64",
            borderRadius: 10,
            padding: 0,
          }}
        >
          <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
            Kubo 3
          </Typography>
        </Button>
      </Box>

      <Typography sx={{ ml: 2, mt: 0, color: "#504C64" }}>
        ____________________________________________________
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Discount ({discount}%):
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 43,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        - Php 800.00
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Order Total:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 44.3,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: -1,
        }}
      >
        Php 800.00
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

      <Button
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
    