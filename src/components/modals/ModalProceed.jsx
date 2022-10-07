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

function ModalProceed({ setOpenModalProceed, onClickNav }) {
   const navigate = useNavigate();

   const navigateToFinalizeOrderPage = () => {
     navigate("/finalizeorderpage");
   };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalProceed(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Proceed to Payment?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalProceed(false);
            }}
            id="noBtn"
          >
            No
          </button>
          <button onClick={onClickNav}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProceed;
