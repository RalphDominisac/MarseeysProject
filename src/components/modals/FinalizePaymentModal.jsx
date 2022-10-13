import React from 'react';

// importing axios
import Axios from "../../axios/Axios.tsx";

import Typography from "@mui/material/Typography";
import "./ModalStyleFinalizePayment.css";

export default function FinalizePaymentModal({
  setOpenModalFinalizePayment,
  onClickFinalizePayment,
}) {
  
  // creating axios instance
  const axios = new Axios();

  return (
    <div className="modalBackgroundFinalizePayment">
      <div className="modalContainerFinalizePayment">
        <div className="titleCloseBtnFinalizePayment">
          <button
            onClick={() => {
              setOpenModalFinalizePayment(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Finalize Payment?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalFinalizePayment(false);
            }}
            id="noBtnFinalizePayment"
          >
            No
          </button>
          <button onClick={onClickFinalizePayment}>Yes</button>
        </div>
      </div>
    </div>
  );
}
