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
import OrderStatusButton from './OrderStatusButton';
import Container from '@mui/material/Container';




export default function PendingOrderPageBody() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    

     const viewOrder = (order) => {
      console.log(order)
       navigate("/ordersummarypage", { state: order });
     };

      // const viewOrder = (order) => {
      //   navigate("/ordersummarypage", { state: orders });
      // };

     useEffect(() => {
      axiosInstance.get("/orders")
      .then((response) => {
        setOrders(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error: ", error)
      })
    }, [])

  return (
    <React.Fragment>
      {/* <Typography class="customerListStack" sx={{ color: "white" }}>
        ORDER #0001
      </Typography> */}
      <Container
        sx={{
          width: 860,
          height: 450,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {orders.length === 0 ? (
          <div>No pending orders</div>
        ) : (
          orders.map((order) => (
            <div>
              <OrderButtonPendingStyle
                key={order.id}
                title={order.id}
                onClickFunc={viewOrder.bind(this, order)}
              />

              <Typography
                sx={{
                  fontFamily: "Barlow Condensed",
                  fontSize: 19,
                  ml: 22,
                  mt: -8,
                  mb: 1,
                }}
              >
                {order.paid ? <div>Paid</div> : <div>Not Paid</div>}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Barlow Condensed",
                  fontSize: 19,
                  ml: 40,
                  mt: -4.5,
                  mb: 1,
                }}
                // onCLick={props.markServed.bind(this, order.id)}
              >
                {order.served ? <div>Served</div> : <div>Not Served</div>}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Barlow Condensed",
                  fontSize: 19,
                  ml: 90,
                  mt: -4.7,
                  mb: 1,
                }}
              >
                Php {order.price}
              </Typography>

              <Typography sx={{ ml: -1, mt: 0, color: "#504C64" }}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - -
              </Typography>
            </div>
          ))
        )}

        {/* STATICS: */}
        {/* <OrderButtonPendingStyle
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
      </Typography> */}
      </Container>
    </React.Fragment>
  );
}
