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

export default function Seafoods2ButtonsFT() {
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Fish Fillet (Family)"
          price="600.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fish Fillet (Party)"
          price="1100.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Steamed Garlic Pompano (Family)"
          price="700.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Steamed Garlic Pompano (Party)"
          price="1300.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Chicharong Tilapia (Family)"
          price="550.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Chicharong Tilapia  (Party)"
          price="1000.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Kinilaw na Tuna (Family)"
          price="700.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Kinilaw na Tuna (Party)"
          price="1300.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Kinilaw na Malasugue (Family)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Kinilaw na Malasugue (Party)"
          price="1400.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Calamares (Family)"
          price="600.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Calamares (Party)"
          price="1100.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fried Butterfly Squid (Family)"
          price="600.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fried Butterfly Squid (Party)"
          price="1100.00"
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
