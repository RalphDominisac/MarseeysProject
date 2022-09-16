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

export default function SeafoodButtons() {
   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };


  return (
    <React.Fragment>
      {/* <Stack spacing={0} direction="row">
        <ButtonCategoryStyle title="BBQ" />
        <ButtonCategoryStyle title="Beef" />
        <ButtonCategoryStyle title="Bilao" />
        <ButtonCategoryStyle title="Chicken" />
        <ButtonCategoryStyle title="Desserts" />
        <ButtonCategoryStyle title="Drinks" />
      </Stack>
      <Stack spacing={0} direction="row">
        <ButtonCategoryStyle title="Food Trays" />
        <ButtonCategoryStyle title="Handaan" />
        <ButtonCategoryStyle title="Noodles" />
        <ButtonCategoryStyle title="Pica-pica" />
        <ButtonCategoryStyle title="Platters" />
        <ButtonCategoryStyle title="Pork" />
      </Stack>
      <Stack spacing={0} direction="row" sx={{ mb: 6 }}>
        <ButtonCategoryStyle title="Rice" />
        <ButtonCategoryStyle title="Seafood" />
        <ButtonCategoryStyle title="Sizzling" />
        <ButtonCategoryStyle title="Solo Meals" />
        <ButtonCategoryStyle title="Soup" />

        <ButtonCategoryStyle title="Vegetables" />
      </Stack> */}

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Kinilaw na Tuna"
          price="170.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Kinilaw na Malasugue"
          price="180.00"
          availables="20"
        />
        <ItemsCategoryButton title="Calamares" price="160.00" availables="20" />
        <ItemsCategoryButton
          title="Chicharong Tilapia"
          price="160.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Buttered Garlic Crabs (per 100g)"
          price="140.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Buttered Garlic Shrimps"
          price="195.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Buttered Garlic Tahong"
          price="160.00"
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
          mt: 17,
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
