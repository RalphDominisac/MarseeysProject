import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonCategoryStyle from "../ButtonCategoryStyle";
import ItemsCategoryButton from "../ItemsCategoryButton";
import ItemsCategoryButton2 from "../ItemsCategoryButton2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AddMenuItemButtonBBQComponent from "../cssComponents/AddMenuItemButtonBBQComponent";
import ModalAddNewItemBBQ from "../modals/ModalAddNewItemBBQ";
import { useState } from "react";

function preventDefault(event) {
  event.preventDefault();
}

export default function BBQButtons(props) {
   const { productsBBQ, onAdd } = props;

   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };

 const [modalOpenAddNewItemBBQ, setModalOpenAddNewItemBBQ] = useState(false);


  return (
    <React.Fragment>
      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        {productsBBQ.map((product) => (
          <ItemsCategoryButton2
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </Stack>

      <AddMenuItemButtonBBQComponent
        addNewItemBBQModalFunction={() => {
          setModalOpenAddNewItemBBQ(true);
        }}
      />
      {modalOpenAddNewItemBBQ && (
        <ModalAddNewItemBBQ
          setOpenModalAddNewItemBBQ={setModalOpenAddNewItemBBQ}
        />
      )}

      {/* Customer List Button: */}
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
