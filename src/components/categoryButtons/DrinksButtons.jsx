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

export default function DrinksButtons() {
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
        <ItemsCategoryButton title="Coke Mismo" price="20.00" availables="20" />
        <ItemsCategoryButton
          title="Coke (Large)"
          price="50.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Iced Tea (Pitcher)"
          price="550.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Bottled Water"
          price="20.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Red Horse (Grande)"
          price="130.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="San Miguel (Grande)"
          price="130.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="San Miguel Pale Pilsen"
          price="50.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="San Mig Light"
          price="50.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="San Mig Light Flavored"
          price="50.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Tanduay Light"
          price="170.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Fundador Light"
          price="500.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Bacardi Black"
          price="950.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Bacardi Gold"
          price="700.00"
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
