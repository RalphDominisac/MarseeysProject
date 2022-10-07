import React from "react";
import "./ModalStyle.css";
import Typography from "@mui/material/Typography";

function ModalDraft({ setOpenModalDraft }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalDraft(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
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
              setOpenModalDraft(false);
            }}
            id="noBtn"
          >
            No
          </button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDraft;
