import React from "react";

// importing axios
import Axios from "../../axios/Axios.tsx";

import "./ModalStyle.css";
import Typography from "@mui/material/Typography";

function Modal({ setOpenModal }) {
  // creating axios instance
  const axios = new Axios();
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
           
          >
            <Typography sx={{color:"white"}}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Save Order to Draft?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
