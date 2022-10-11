import React from 'react';
import Typography from "@mui/material/Typography";
import "./PrintReceiptModalStyle.css";

export default function PrintReceiptModal({ setOpenModalPrintReceipt, onClickPrint }) {
  return (
    <div className="modalBackgroundPrint">
      <div className="modalContainerPrint">
        <div className="titleCloseBtnPrint">
          <button
            onClick={() => {
              setOpenModalPrintReceipt(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Create Receipt?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalPrintReceipt(false);
            }}
            id="noBtnPrint"
          >
            No
          </button>
          <button onClick={onClickPrint}>Yes</button>
        </div>
      </div>
    </div>
  );
}
