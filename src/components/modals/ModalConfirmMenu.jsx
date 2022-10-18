import React from "react";
import "./ModalConfirmMenuStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function ModalConfirmMenu({ setOpenModalConfirmMenu, pushFunctionality }) {
  const navigate = useNavigate();

  // const navigateToHomeOrderPage = () => {
  //   navigate("/homeorderpage");
  // };

  return (
    <div className="modalBackgroundConfirmMenu">
      <div className="modalContainerConfirmMenu">
        <div className="titleCloseBtnConfirmMenu">
          <button
            onClick={() => {
              setOpenModalConfirmMenu(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Confirm Menu Item?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalConfirmMenu(false);
            }}
            id="noBtnConfirmMenu"
          >
            No
          </button>
          {/* <button onClick={navigateToHomeOrderPage}>Yes</button> */}
          <button onClick={pushFunctionality}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmMenu;
