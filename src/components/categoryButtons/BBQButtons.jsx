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
import AddMenuItemButtonBBQComponent from "../cssComponents/AddMenuItemButtonComponent";
import ModalAddNewItemBBQ from "../modals/ModalAddNewMenuItem";
import { useState } from "react";

function preventDefault(event) {
  event.preventDefault();
}

export default function BBQButtons(props) {
   const { productsBBQ, onAdd } = props;
   const [updatedProductListBBQ, addProdBBQ] = useState(productsBBQ);

  const [modalOpenAddNewItemBBQ, setModalOpenAddNewItemBBQ] = useState(false);

  const sendDataBBQ = (name, price) => {
    addProdBBQ([...updatedProductListBBQ, { name, price }]);
  };

  //  const navigate = useNavigate();
  //  const navigateToCustomerListPage = () => {
  //    navigate("/customerlistpage");
  //  };

  return (
    <React.Fragment>
      {/* <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        {productsBBQ.map((product) => (
          <ItemsCategoryButton2
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </Stack> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        {/* {productsBBQ.map((product) => (
          <ItemsCategoryButton2
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))} */}
        {updatedProductListBBQ.length &&
          updatedProductListBBQ.map((product) => (
            <ItemsCategoryButton2
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}
      </div>

      <AddMenuItemButtonBBQComponent
        addNewItemBBQModalFunction={() => {
          setModalOpenAddNewItemBBQ(true);
        }}
      />
      {modalOpenAddNewItemBBQ && (
        <ModalAddNewItemBBQ
          sendDataBBQ={sendDataBBQ}
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
