import React from "react";
import "./ModalAddCategoryStyle.css";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ModalAddCategory(props) {
  const navigate = useNavigate();
  const { setOpenModalAddCategory } = props;

  const [category, setCategory] = useState("");

  const sendDataToParentCategory = () => {
    props.sendDataCategory(category);
  };


  return (
    <div className="modalBackgroundCategory">
      <div className="modalContainerCategory">
        <div className="titleCloseBtnCategory">
          <button
            onClick={() => {
              setOpenModalAddCategory(false);
            }}
          >
            <Typography sx={{ color: "white" }}>X</Typography>
          </button>
        </div>
        <div className="title">
          <h1>Add New Category</h1>
        </div>
        <div className="body">
          <TextField
            onChange={(g1) => setCategory(g1.target.value)}
            className="inputRounded"
            placeholder="Category Name"
            variant="outlined"
            size="small"
          />
          
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModalAddNewItemBBQ(false);
            }}
            id="noBtnCategory"
          >
            Cancel  
          </button> */}
          <button onClick={sendDataToParentCategory}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddCategory;
