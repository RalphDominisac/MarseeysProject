import React from "react";
import "./ModalStyleRemove.css";
import Typography from "@mui/material/Typography";

function ModalRemoveItem({ setOpenModalRemoveItem }) {
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              setOpenModalRemoveItem(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Remove Item from Order?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalRemoveItem(false);
            }}
            id="noBtn2"
          >
            No
          </button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalRemoveItem;
