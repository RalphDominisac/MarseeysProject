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

const chickenMenuItems = [
  {
    title: "Buffalo Wings",
    price: "200.00",
    availables: "20",
  },
  {
    title: "Battered Chicken (Half)",
    price: "195.00",
    availables: "20",
  },
  {
    title: "Battered Chicken (Whole)",
    price: "380.00",
    availables: "20",
  },
  {
    title: "Garlic Chicken (Half)",
    price: "210.00",
    availables: "20",
  },
  {
    title: "Garlic Chicken (Whole)",
    price: "400.00",
    availables: "20",
  },
];

export default function ChickenButtons({ onSelected }) {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>


      <Stack spacing={0} direction="row">
        {chickenMenuItems.map((chickenMenuItem) => (
          <ItemsCategoryButton
            onClick={() => onSelected(chickenMenuItem)}
            key={chickenMenuItem.title }
            {...chickenMenuItem}
          />
        ))}
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
