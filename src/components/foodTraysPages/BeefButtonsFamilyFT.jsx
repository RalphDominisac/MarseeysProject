import * as React from "react";

// importing axios
import Axios from "../../axios/Axios.tsx";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonCategoryStyle from "../ButtonCategoryStyle";
import ItemsCategoryButton from "../ItemsCategoryButton";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";




function preventDefault(event) {
  event.preventDefault();
}

export default function BeefButtonsFamilyFT() {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Beef Steak (Family)"
          price="850.00"
          availables="20"
        />
         
        <ItemsCategoryButton
          title="Beef Caldereta (Family)"
          price="850.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef Menudo (Family)"
          price="850.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef with Broccoli (Family)"
          price="850.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Nilagang Baka (Family)"
          price="700.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Bulalo (Family)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef Papaitan (Family)"
          price="650.00"
          availables="20"
        />
      </Stack>

      {/* <Button
        variant="contained"
        onClick={navigateToCustomerListPage}
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          mt: 2,
          ml: 85,
          width: 160,
          textTransform: "none",
          bgcolor: "#F2A42A",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
          height: "32px",
        }}
      >
        Customer List
      </Button> */}
    </React.Fragment>
  );
}
