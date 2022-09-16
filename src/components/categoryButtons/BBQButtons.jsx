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

export default function BBQButtons() {
   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };


  return (
    <React.Fragment>
   
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Hito (Small)"
          price="120.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Hito (Medium)"
          price="160.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Hito (Large)"
          price="210.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Chicken Paa"
          price="75.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Chicken Pecho"
          price="85.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Chicken Baticulon"
          price="15.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Chicken Isaw (5 sticks)"
          price="25.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Chicken Atay"
          price="15.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Pork Tocino"
          price="10.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Pork Maskara"
          price="25.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Pork Belly"
          price="140.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Hotdog (Beefies)"
          price="15.00"
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
