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

export default function MenuItemButtons({onAdd, products}) {
 
  return (
    <React.Fragment>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        {products.map((product) => (
          <ItemsCategoryButton2
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
