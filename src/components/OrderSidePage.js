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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";



// import Modal from "./Modal";
import ModalDraft from "./ModalDraft";
import ModalRemoveItem from "./ModalRemoveItem";
import ModalProceed from "./ModalProceed";

import { Container } from "@mui/material";

import Box from "@mui/material/Box";












function preventDefault(event) {
  event.preventDefault();
}

export default function OrderSidePage(props) {

  //Modal State
  // const [modalOpen, setModalOpen] = useState(false);

  //ModalDraft State
  const [modalOpenDraft, setModalOpenDraft] = useState(false);

  //ModalRemoveItem State
  const [modalOpenRemoveItem, setModalOpenRemoveItem] = useState(false);

  //ModalProceed State
  const [modalOpenProceed, setModalOpenProceed] = useState(false);

  const navigate = useNavigate();

  const navigateToPaymentsPage = () => {
    navigate("/paymentpage");
  };

  return (
    <React.Fragment>
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Order #0001
      </Typography>

      <Button
        className="openModalBtn"
        onClick={() => {
          setModalOpenDraft(true);
        }}
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
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
      {modalOpenDraft && <ModalDraft setOpenModalDraft={setModalOpenDraft} />}

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

      <Container
        sx={{
          width: 530,
          height: 450,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography sx={{ mt: -1, ml: -1, mb: 1.8, color: "#504C64" }}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - -
        </Typography>

        {/* <div>
          <div>{props.menuItemName}</div>
          <div>{props.menuItemPrice}</div>
        </div> */}

        <Typography
          sx={{
            ml: -0.1,
            color: "white",
            fontSize: 20,
            fontFamily: "Barlow Condensed",
            textAlign: "left",
            mt: -1,
          }}
        >
          {props.menuItemName}
        </Typography>

        <DecreIncreCounter />

        <Typography class="initialPriceTag">
          "add calculation""
        </Typography>

        <Typography> {props.menuItemPrice}</Typography>

        <TextField
          className="inputRounded"
          placeholder="Order Comments"
          variant="outlined"
          size="small"
          sx={{ ml: -0.5, width: 335 }}
        />

        <Button
          onClick={() => {
            setModalOpenRemoveItem(true);
          }}
          sx={{
            ":hover": {
              bgcolor: "#D33131", // theme.palette.primary.main
            },
            color: "white",
            backgroundColor: "#9E3F3F",
            ml: 45,
            mt: -8.2,
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
        {modalOpenRemoveItem && (
          <ModalRemoveItem setOpenModalRemoveItem={setModalOpenRemoveItem} />
        )}

        <Typography sx={{ mt: -2, color: "#504C64" }}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - -
        </Typography>
      </Container>

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
          mt: 8,
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
        // onClick={navigateToPaymentsPage}
        onClick={() => {
          setModalOpenProceed(true);
        }}
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
      {modalOpenProceed && (
        <ModalProceed setOpenModalProceed={setModalOpenProceed} />
      )}
    </React.Fragment>
  );
}
    