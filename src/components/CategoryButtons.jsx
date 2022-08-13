import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ButtonCategoryStyle from "./ButtonCategoryStyle";
import ItemsCategoryButton from "./ItemsCategoryButton";



function preventDefault(event) {
  event.preventDefault();
}

export default function CategoryButtons() {


  return (
    <React.Fragment>
      <Stack spacing={0} direction="row">
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
        <ButtonCategoryStyle title="Soup" />

        <ButtonCategoryStyle title="Vegetables" />
      </Stack>

      <Stack spacing={0} direction="row">
        <ItemsCategoryButton
          title="Buffalo Wings"
          price="200.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Battered Chicken (Half)"
          price="195.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Battered Chicken (Whole)"
          price="380.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Garlic Chicken (Half)"
          price="210.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Garlic Chicken (Whole)"
          price="400.00"
          availables="20"
        />
      </Stack>

      <Button
        variant="contained"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          mt: 37,
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
