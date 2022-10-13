import React from "react";

// importing axios
import Axios from "../../axios/Axios.tsx";

import "./ModalStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function ModalSaveToDraft({ setOpenModalSaveToDraft }) {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();

  const navigateToDraftsPage = () => {
    navigate("/draftspage");
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalSaveToDraft(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Save to Draft?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModalSaveToDraft(false);
            }}
            id="noBtn"
          >
            No
          </button>
          <button onClick={navigateToDraftsPage}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalSaveToDraft;
