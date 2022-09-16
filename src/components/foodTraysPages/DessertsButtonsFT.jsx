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

export default function DessertsButtonsFT() {
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Macaroni Salad (Family)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Macaroni Salad (Party)"
          price="1400.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Mango Float (Family)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Mango Float (Party)"
          price="1400.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fruit Salad (Family)"
          price="700.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Fruit Salad (Party)"
          price="1200.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Buko Salad (Family)"
          price="700.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Buko Salad (Party)"
          price="1200.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fresh Fruits (Family)"
          price="600.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Fresh Fruits (Party)"
          price="1000.00"
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
