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

export default function RiceButtons() {
   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };


  return (
    <React.Fragment>
      
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Plain Rice (1 cup)"
          price="15.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Garlic Rice (2-3 PAX)"
          price="100.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Binagoongan Rice (2-3 PAX)"
          price="100.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Salted Egg Rice (2-3 PAX)"
          price="140.00"
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
          mt: 32,
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
