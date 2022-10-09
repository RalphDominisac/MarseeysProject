import React from "react";
import "./ModalAddMenuItemStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function ModalAddNewItemBBQ({ setOpenModalAddNewItemBBQ}) {
  const navigate = useNavigate();

  const[itemNameBBQ, setItemNameBBQ] = useState("");
  const[itemPriceBBQ, setItemPriceBBQ] = useState("");

  const navigateToDraftsPage = () => {
    navigate("/draftspage");
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
          <button
            onClick={() => {
              setOpenModalAddNewItemBBQ(false);
            }}
            id="noBtn3"
          >
            Cancel  
          </button>
          <button onClick={navigateToDraftsPage}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddNewItemBBQ;
