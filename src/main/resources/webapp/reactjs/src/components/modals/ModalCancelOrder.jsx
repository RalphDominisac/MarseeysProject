import React from "react";
import "./ModalStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { PropaneSharp } from "@mui/icons-material";

function ModalCancelOrder({ setOpenModalCancelOrder}) {
  
  const navigate = useNavigate();

    const navigateToHomeOrderPage = () => {
      navigate("/homeorderpage");
    };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalCancelOrder(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Cancel Order?</h1>
        </div>  
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalCancelOrder(false);
            }}
            id="noBtn"
          >
            No
          </button>
          <button onClick={navigateToHomeOrderPage}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCancelOrder;
