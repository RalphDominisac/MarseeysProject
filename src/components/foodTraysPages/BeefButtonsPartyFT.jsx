import * as React from "react";
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

export default function BeefButtonsPartyFT() {
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Beef Steak (Party)"
          price="1500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef Caldereta (Party)"
          price="1500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef Menudo (Party)"
          price="1500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef with Broccoli (Party)"
          price="1500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Nilagang Baka (Party)"
          price="1300.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Bulalo (Party)"
          price="1400.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Beef Papaitan (Party)"
          price="1100.00"
          availables="20"
        />
      </Stack>

      <Button
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
      </Button>
    </React.Fragment>
  );
}
