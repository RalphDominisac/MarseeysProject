import React from "react";
import "./ModalWarningMenuStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function ModalWarningMenu({ setOpenModalWarningMenu }) {
  const navigate = useNavigate();

  // const navigateToHomeOrderPage = () => {
  //   navigate("/homeorderpage");
  // };

  return (
    <div className="modalBackgroundWarningMenu">
      <div className="modalContainerWarningMenu">
        <div className="titleCloseBtnWarningMenu">
          <button
            onClick={() => {
              setOpenModalWarningMenu(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Warning!</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalWarningMenu(false);
            }}
            id="noBtnWarningMenu"
          >
            Fill up fields
          </button>
          {/* <button onClick={navigateToHomeOrderPage}>Yes</button> */}
          {/* <button>Yes</button> */}
        </div>
      </div>
    </div>
  );
}

export default ModalWarningMenu;
