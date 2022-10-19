import React from 'react';
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import axiosInstance from "../../helpers/axios";
import Container from "@mui/material/Container";


export default function OrderSummaryPageBody({itemName, price, qty, total, subTotal, discount, orderTotal}) {


  return (
    <React.Fragment>
      {/* BODY CONTENT: */}

      <Container
        sx={{
          width: 830,
          height: 450,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography class="orderSummaryItemStack" sx={{ color: "white" }}>
          {itemName}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: 19,
            ml: 60,
            mt: -6,
          }}
        >
          {price}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            fontSize: 19,
            ml: 81.7,
            mt: -3.7,
          }}
        >
          {qty}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Barlow Condensed",
            ml: 94,
            mt: -3.5,
            fontSize: 19,
          }}
        >
          {total}
        </Typography>

        <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - -
        </Typography>
      </Container>

      {/* FOOTER, consists of TOTALS: */}
      <Typography
        sx={{
          ml: 79,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 2,
        }}
      >
        Sub-total
      </Typography>
      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 94,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        {subTotal}
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>

      <Typography
        sx={{
          ml: 69,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 0,
        }}
      >
        Discount
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 93.2,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        {discount}
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>

      <Typography
        sx={{
          ml: 78.1,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 0,
        }}
      >
        Order Total
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 94,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        {orderTotal}
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}




{/* <Container
  sx={{
    width: 830,
    height: 450,
    overflow: "hidden",
    overflowY: "scroll",
  }}
>
  {data?.cartItems.map((item, index) => (
    <div
      key={index}
      style={{
        fontFamily: "Barlow Condensed",
        fontSize: "20px",
        marginLeft: "-9px",
        marginTop: "-18px",
      }}
    >
      <p>{item.name}</p>

      <p style={{ marginLeft: "400px", marginTop: "-49px" }}>
        Php {Number(item.price).toFixed(2)}
      </p>
      <p style={{ marginLeft: "572px", marginTop: "-50px" }}>{item.qty}</p>
      <p
        style={{
          marginLeft: "680px",
          marginTop: "-50.4px",
        }}
      >
        Php {(item.price * item.qty).toFixed(2)}
      </p>
     
      <Typography sx={{ ml: -1, mt: -1, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - -
      </Typography>
    </div>
  ))}
</Container> */}