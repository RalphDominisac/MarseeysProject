import React from 'react'
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OrderButtonPendingStyle from "./OrderButtonPendingStyle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


export default function PendingOrderPageBody() {
    const navigate = useNavigate();

     const navigateToOrderSummaryPage = () => {
       navigate("/ordersummarypage");
     };

  return (
    <React.Fragment>
      {/* <Typography class="customerListStack" sx={{ color: "white" }}>
        ORDER #0001
      </Typography> */}
      <OrderButtonPendingStyle
        title="ORDER #0001"
        onClickFunc={navigateToOrderSummaryPage}
      />

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 24,
          mt: -8,
          mb: 1,
        }}
      >
        Dine In
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 39,
          mt: -4.5,
          mb: 1,
        }}
      >
        Preparing
      </Typography>


      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 72,
          mt: -4.5,
          mb: 1,
        }}
      >
        Php 10000.00
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 92,
          mt: -4.7,
          mb: 1,
        }}
      >
        Php 20000.00
      </Typography>

      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
