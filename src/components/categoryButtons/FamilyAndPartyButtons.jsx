import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ButtonCategoryStyle from "../ButtonCategoryStyle";
import ItemsCategoryButton from "../ItemsCategoryButton";
import FamilyAndPartyButtonStyle from "../FamilyAndPartyButtonStyle";


import PastaNoodlesButtonsFT from "../foodTraysPages/PastaNoodlesButtonsFT";
import DessertsButtonsFT from "../foodTraysPages/DessertsButtonsFT";
import BeefButtonsFT from "../foodTraysPages/BeefButtonsFT";
import Seafood1ButtonsFT from "../foodTraysPages/Seafood1ButtonsFT";
import FamilyButtonsFT from "../foodTraysPages/FamilyButtonsFT";
import PartyButtonsFT from "../foodTraysPages/PartyButtonsFT";
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

export default function FamilyAndPartyButtons(props) {
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  const [selection, setSelection] = useState();

  const selectHandler = (selection) => setSelection(selection);

  return (
    <React.Fragment>
      {!selection && <Landing onSelect={selectHandler} />}
      {selection === "family" && <FamilyFT />}
      {selection === "party" && <PartyFT />}
     
    </React.Fragment>
  );
}

function Landing({ onSelect }) {
  const selectHandler = (selection) => () => onSelect(selection);
  return (
    <div>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <FamilyAndPartyButtonStyle
          title="Family"
          onClick={selectHandler("family")}
        
        />
        <FamilyAndPartyButtonStyle
          title="Party"
          onClick={selectHandler("party")}
       
        />
      </Stack>
    </div>
  );
}



function FamilyFT() {
  return (
    <div>
      <FamilyButtonsFT />
    </div>
  );
}


function PartyFT() {
  return (
    <div>
      <PartyButtonsFT />
    </div>
  );
}

