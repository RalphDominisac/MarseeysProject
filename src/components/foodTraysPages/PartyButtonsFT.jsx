import * as React from "react";

// importing axios
import Axios from "../../axios/Axios.tsx";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonCategoryStyle from "../ButtonCategoryStyle";
import ItemsCategoryButton from "../ItemsCategoryButton";
import FoodTraysItemButtonStyle from "../FoodTraysItemButtonStyle";
import PastaNoodlesButtonsFT from "../foodTraysPages/PastaNoodlesButtonsFT";
import DessertsButtonsFT from "../foodTraysPages/DessertsButtonsFT";
import BeefButtonsFT from "../foodTraysPages/BeefButtonsFT";
import Seafood1ButtonsFT from "../foodTraysPages/Seafood1ButtonsFT";
// import ChickenButtonsFT from "../foodTraysPages/ChickenButtonsFT";

import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function preventDefault(event) {
  event.preventDefault();
}

export default function PartyFT(props) {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  const [selection, setSelection] = useState();

  const selectHandler = (selection) => setSelection(selection);

  return (
    <React.Fragment>
      {!selection && <Landing onSelect={selectHandler} />}
      {selection === "beef" && <BeefFT />}
      {selection === "desserts" && <DessertsFT />}
      {selection === "pastaNoodles" && <PastaNoodlesFT />}
      {selection === "seafood1" && <Seafood1FT />}
    </React.Fragment>
  );
}

function Landing({ onSelect }) {
  const selectHandler = (selection) => () => onSelect(selection);
  return (
    <div>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <FoodTraysItemButtonStyle
          title="Beef"
          onClick={selectHandler("beef")}
        />
        <FoodTraysItemButtonStyle
          title="Desserts"
          onClick={selectHandler("desserts")}
        />
        <FoodTraysItemButtonStyle
          title="Pasta/Noodles"
          onClick={selectHandler("pastaNoodles")}
        />

        <FoodTraysItemButtonStyle
          title="Seafood 1"
          onClick={selectHandler("seafood1")}
        />
      </Stack>
    </div>
  );
}

function BeefFT() {
  return (
    <div>
      <BeefButtonsFT />
    </div>
  );
}

function DessertsFT() {
  return (
    <div>
      <DessertsButtonsFT />
    </div>
  );
}

function PastaNoodlesFT() {
  return (
    <div>
      <PastaNoodlesButtonsFT />
    </div>
  );
}

function Seafood1FT() {
  return (
    <div>
      <Seafood1ButtonsFT />
    </div>
  );
}

// function Seafood2FT() {
//   return (
//     <div>
//       <Seafood2ButtonsFT />
//     </div>
//   );
// }
