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

export default function PastaNoodlesButtonsFT() {
  // creating axios instance
  const axios = new Axios();
  
  const navigate = useNavigate();

  const navigateToCustomerListPage = () => {
    navigate("/customerlistpage");
  };

  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Bihon Guisado (Family)"
          price="450.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Bihon Guisado (Party)"
          price="800.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Pancit Canton Guisado (Family)"
          price="500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Bihon Guisado (Party)"
          price="900.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Sotanghon Guisado (Family)"
          price="500.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton
          title="Sotanghon Guisado (Party)"
          price="900.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Bam-i Guisado (Family)"
          price="500.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Bam-i Guisado (Party)"
          price="900.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Spaghetti (Family)"
          price="700.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Spaghetti (Party)"
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
