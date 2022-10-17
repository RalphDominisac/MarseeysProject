import React from "react";
import "./ModalAddMenuStyle.css";
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

function ModalAddNewMenuItem(props) {
  const [menuIngredient, setMenuIngredient] = React.useState("");

  const navigate = useNavigate();
  const { setOpenModalAddNewItemBBQ } = props;

  const [itemNameBBQ, setItemNameBBQ] = useState("");
  const [itemPriceBBQ, setItemPriceBBQ] = useState("");

  const navigateToDraftsPage = () => {
    navigate("/draftspage");
  };

  const sendDataToParentBBQ = () => {
    props.sendDataBBQ(itemNameBBQ, itemPriceBBQ);
  };

  const [ingredient, setIngredient] = React.useState("");

  const handleChangeIngredient = (event) => {
    setMenuIngredient(event.target.value);
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
          <h1>Add New Item </h1>
        </div>
        <div className="body">
          <TextField
            onChange={(g1) => setItemNameBBQ(g1.target.value)}
            className="inputRounded"
            placeholder="Item Name"
            variant="outlined"
            size="small"
            sx={{ mt: -11 }}
          />
        </div>
        <div>
          <TextField
            onChange={(g2) => setItemPriceBBQ(g2.target.value)}
            className="inputRounded"
            placeholder="Item Category"
            variant="outlined"
            size="small"
            sx={{ ml: 3.5, mt: -13 }}
          />
        </div>
        <div>
          <TextField
            onChange={(g2) => setItemPriceBBQ(g2.target.value)}
            className="inputRounded"
            placeholder="Item Price"
            variant="outlined"
            size="small"
            sx={{ ml: 3.5, mt: -9 }}
          />
        </div>
        <div>
          <FormControl
            sx={{
              m: 1,
              width: 200,
              backgroundColor: "#252836",
              borderRadius: 3,
              ml: 4,
              height: 42,
              mt: -6,
            }}
          >
            <Select
              value={menuIngredient}
              onChange={handleChangeIngredient}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "&:hover": {
                  "&& fieldset": {
                    border: "1px solid white",
                  },
                },

                // more accurate dropdown effect
                // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

                borderRadius: 3,
                width: 200,
                height: 42,
                fontFamily: "Barlow Condensed",
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    "& .MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "#3F4351",
                    },
                    "& .MuiMenuItem-root:hover": {
                      backgroundColor: "#3F4351",
                    },
                    "& .MuiMenuItem-root.Mui-selected:hover": {
                      backgroundColor: "#3F4351",
                    },
                    backgroundColor: "#252836",
                  },
                },
              }}
            >
              <MenuItem value="">Select Ingredients</MenuItem>
              <MenuItem value={"Onion"}>Onion</MenuItem>
              <MenuItem value={"Garlic"}>Garlic</MenuItem>
              <MenuItem value={"Butter"}>Butter</MenuItem>
              <MenuItem value={"Tomato"}>Tomato</MenuItem>
              <MenuItem value={"Salmon"}>Salmon</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl fullWidth sx={{mt: -1, mb: 2}}>
            <InputLabel id="demo-simple-select-label">
              Select Ingredients
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ingredient}
              label="Ingredient"
              onChange={handleChangeIngredient}
  

            >
              <MenuItem value={"Onion"}>Onion</MenuItem>
              <MenuItem value={"Garlic"}>Garlic</MenuItem>
              <MenuItem value={"Butter"}>Butter</MenuItem>
              <MenuItem value={"Tomato"}>Tomato</MenuItem>
              <MenuItem value={"Salmon"}>Salmon</MenuItem>
            </Select>
          </FormControl> */}
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

export default ModalAddNewMenuItem;
