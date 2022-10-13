import React from "react";

// importing axios
import Axios from "../../axios/Axios.tsx";

import "./ModalAddMenuBBQStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function ModalAddNewItemBBQ(props) {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();
  const { setOpenModalAddNewItemBBQ} = props;

  const[itemNameBBQ, setItemNameBBQ] = useState("");
  const[itemPriceBBQ, setItemPriceBBQ] = useState("");

  const navigateToDraftsPage = () => {
    navigate("/draftspage");
  };

    const sendDataToParentBBQ = () => {
      props.sendDataBBQ(itemNameBBQ, itemPriceBBQ);
    };


  return (
    <div className="modalBackground3">
      <div className="modalContainer3">
        <div className="titleCloseBtn3">
          <button
            onClick={() => {
              setOpenModalAddNewItemBBQ(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Add New Item (BBQ)</h1>
        </div>
        <div className="body">
          <TextField
            onChange={(g1) => setItemNameBBQ(g1.target.value)}
            className="inputRounded"
            placeholder="Item Name"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={(g2) => setItemPriceBBQ(g2.target.value)}
            className="inputRounded"
            placeholder="Item Price"
            variant="outlined"
            size="small"
            sx={{ width: 100 }}
          />
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModalAddNewItemBBQ(false);
            }}
            id="noBtn3"
          >
            Cancel  
          </button> */}
          <button onClick={sendDataToParentBBQ}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddNewItemBBQ;
