import React from 'react';
import Typography from "@mui/material/Typography";
import "./ModalStyleFinalizePayment.css";

export default function FinalizePaymentModal(props) {

  return (
    <div className="modalBackgroundFinalizePayment">
      <div className="modalContainerFinalizePayment">
        <div className="titleCloseBtnFinalizePayment">
          <button
            onClick={() => {
              props.setOpenModalFinalizePayment(false);
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
              props.setOpenModalFinalizePayment(false);
            }}
            id="noBtnFinalizePayment"
          >
            No
          </button>
          <button onClick={props.onClickFinalizePayment}>Yes</button>
        </div>
      </div>
    </div>
  );
}