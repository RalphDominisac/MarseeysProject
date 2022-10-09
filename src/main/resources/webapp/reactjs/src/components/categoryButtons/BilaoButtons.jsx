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

export default function BilaoButtons() {
   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };


  return (
    <React.Fragment>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Sotanghon (Small)"
          price="350.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Sotanghon (Medium)"
          price="450.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Sotanghon (Large)"
          price="550.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Pancit Canton (Small)"
          price="350.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Pancit Canton (Medium)"
          price="450.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Pancit Canton (Large)"
          price="550.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Bihon (Small)"
          price="300.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Bihon (Medium)"
          price="400.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Bihon (Large)"
          price="500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Mixed Chicken (Small)"
          price="400.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Mixed Chicken (Medium)"
          price="780.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Mixed Chicken (Large)"
          price="1180.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Buffalo Wings (Small)"
          price="420.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Buffalo Wings (Medium)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Buffalo Wings (Large)"
          price="1200.00"
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
