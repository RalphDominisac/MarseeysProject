import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PrintReceiptModal from "../modals/PrintReceiptModal";
import { useState } from "react";



export default function PrintReceiptFormatBody() {
    const [modalOpenPrintReceipt, setModalOpenPrintReceipt] = useState(false);
        const navigate = useNavigate();

  return (
    <React.Fragment>
      <Typography>
        PrintReceiptFormatBody TABLE Format for invoice here:
      </Typography>
      <Button
        onClick={() => {
          setModalOpenPrintReceipt(true);
        }}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#A8E267", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#8EC154",
          ml: 85,
          mt: 8,
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
        Create Receipt
      </Button>
      {modalOpenPrintReceipt && (
        <PrintReceiptModal
          setOpenModalPrintReceipt={setModalOpenPrintReceipt}
          // onClickPrint={navigateToPrintReceiptFormatPage}
        />
      )}
    </React.Fragment>
  );
}
