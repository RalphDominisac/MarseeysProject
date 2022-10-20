import React, { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography";
import OrderButtonHistoryStyle from "./OrderButtonHistoryStyle";
import axiosInstance from '../../helpers/axios';
import Container from "@mui/material/Container";


export default function HistoryPageBody() {
  const [orders, setOrders] = useState([]);

      // const viewOrder = (order) => {
      //   navigate("/ordersummarypage", { state: orders });
      // };

     useEffect(() => {
      axiosInstance.get("/orders/history")
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
      {/* <OrderButtonHistoryStyle title="ORDER #0001" /> */}

      <Container
        sx={{
          width: 860,
          height: 450,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {orders.map((order) => (
          <div>
            <Typography
              key={order.id}
              sx={{
                color: "white",
                fontFamily: "Barlow Condensed",
                fontSize: "19px",
                ml: "60px",
                mt: "-5px"
              }}
            >
              {order.id}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Barlow Condensed",
                fontSize: 19,
                ml: 25,
                mt: -3.5,
                mb: 1,
              }}
            >
              {order.paid ? <div>Paid</div> : <div>Not Paid</div>}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Barlow Condensed",
                fontSize: 19,
                ml: 50,
                mt: -4.7,
                mb: 1,
              }}
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
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - 
            </Typography>
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
}
