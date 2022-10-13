import React, { useRef } from "react";

// importing axios
import Axios from "../axios/Axios.tsx";

import { useReactToPrint } from "react-to-print";
import BackButtonHeaderComponent from "./cssComponents/BackButtonHeaderComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PrintReceiptFormatBody from "./cssComponents/PrintReceiptFormatBody";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import OrderSummarySidePage from "./OrderSummarySidePage";
import DateTime from "./DateTime";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CategoryButtons from "./CategoryButtons";
import { autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const PrintReceiptFormatPage = () => {
  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print Success!"),
  });

  const navigateToOrderSummaryPage = () => {
    navigate("/ordersummarypage");
  };

  // creating axios instance
  const axios = new Axios();

  return (
    <React.Fragment>
      <BackButtonHeaderComponent onClickNavPath={navigateToOrderSummaryPage} />

      <PrintReceiptFormatBody />

      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        dfdfdfdfdfdfdf
      </div>

      <button onClick={handlePrint}>Print this!</button>
    </React.Fragment>
  );
};

export default PrintReceiptFormatPage;
