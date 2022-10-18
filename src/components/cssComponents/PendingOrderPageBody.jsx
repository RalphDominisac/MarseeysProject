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
import { useState, useEffect } from "react";
import axiosInstance from "../../helpers/axios";




export default function PendingOrderPageBody(props) {
    const navigate = useNavigate();
    const [orders, setOrders] = useState(props.orders);

     const viewOrder = (order) => {
       navigate("/ordersummarypage", { state: order });
     };

  return (
    <React.Fragment>
      {/* <Typography class="customerListStack" sx={{ color: "white" }}>
        ORDER #0001
      </Typography> */}
      {orders.length === 0 ? (
        <div>No pending orders</div>
      ) : (
        orders.map((order) => (
          <div>
            <OrderButtonPendingStyle title={order.id} onClickFunc={viewOrder.bind(this, order)} />

            <Typography
              sx={{
                fontFamily: "Barlow Condensed",
                fontSize: 19,
                ml: 24,
                mt: -8,
                mb: 1,
              }}
            >
              {order.paid === true ? (
                <div>
                  Paid
                </div>
              ) : (
                <div>
                  Not Paid
                </div>
              )}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Barlow Condensed",
                fontSize: 19,
                ml: 43,
                mt: -4.5,
                mb: 1,
              }}
              onCLick={props.markServed.bind(this, order.id)}
            >
              {order.served === true ? (
                <div>
                  Served
                </div>
              ) : (
                <div>
                  Not Served
                </div>
              )}
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
              Php {order.price}
            </Typography>

            <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - -
            </Typography>
          </div>
          
        ))
      )}
      <OrderButtonPendingStyle
        title="ORDER #0001"
        onClickFunc={viewOrder}
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
          ml: 43,
          mt: -4.5,
          mb: 1,
        }}
      >
        Preparing
      </Typography>

  

      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
