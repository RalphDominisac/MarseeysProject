import React, { useState, useEffect } from "react";
import "./ModalStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { PropaneSharp } from "@mui/icons-material";
import axiosInstance from "../../helpers/axios";

function ModalConfirmOrder(props) {
  const navigate = useNavigate();
  const [orderRequest, setOrderRequest] = useState(props.orderRequest);
  const orderType = props.orderType;

  useEffect(() => {})

  const sendOrder = () => {
    console.log("Sending...")
    if (orderType === "Dine In") {
      axiosInstance.post('/orders/add/dine', orderRequest).then((response) => {
        console.log("Order: ", orderRequest)
        navigate("/pendingpage", {  state: response.data  })
      }).catch((error) => {
        console.log("Order Request: ", orderRequest)
        console.log("Error: ", error)
      })
    } else if (orderType === "Delivery") {
      axiosInstance.post('/orders/add/delivery', orderRequest).then((response) => {
        console.log("Order: ", orderRequest)
        navigate("/pendingpage", {  state: response.data  })
      }).catch((error) => {
        console.log("Order Request: ", orderRequest)
        console.log("Error: ", error)
      })
    } else if (orderType === "Pickup") {
      axiosInstance.post('/orders/add/pickup', orderRequest).then((response) => {
        console.log("Order: ", orderRequest)
        navigate("/pendingpage", {  state: response.data  })
      }).catch((error) => {
        console.log("Order Request: ", orderRequest)
        console.log("Error: ", error)
    })
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModalConfirmOrder(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Confirm Order?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModalConfirmOrder(false);
            }}
            id="noBtn"
          >
            No
          </button>
          <button onClick={sendOrder}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmOrder;
