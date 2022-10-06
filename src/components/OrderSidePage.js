import * as React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DecreIncreCounter from "./DecreIncreCounter";
import PaymentPage from "./FinalizeOrderPage";
import TextField from "@mui/material/TextField";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,  
} from "react-router-dom";
// import Modal from "./Modal";
import ModalDraft from "./ModalDraft";
import ModalRemoveItem from "./ModalRemoveItem";
import ModalProceed from "./ModalProceed";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import DineInPickupDeliveryButtons from "./cssComponents/DineInPickupDeliveryButtons";
import DecrementIncrementCounter from "./DecrementIncrementCounter";
import SubTotalAndProceedPayment from "./cssComponents/SubTotalAndProceedPayment";

function preventDefault(event) {
  event.preventDefault();
}

export default function OrderSidePage(props) {

   const [orderComment, setOrderComment] = useState([]);

    const[orderType, setOrderType] = useState();

    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    // const discount = 
    const totalPrice = itemsPrice;


  //Modal State
  // const [modalOpen, setModalOpen] = useState(false);

  //ModalDraft State
  const [modalOpenDraft, setModalOpenDraft] = useState(false);

  //ModalRemoveItem State
  const [modalOpenRemoveItem, setModalOpenRemoveItem] = useState(false);

  //ModalProceed State
  const [modalOpenProceed, setModalOpenProceed] = useState(false);

  const navigate = useNavigate();

 const navigateToFinalizeOrderPage = () => {
   navigate("/finalizeorderpage", {
     state: {
       totalPrice,
       cartItems,
       orderType,
       orderComment,
     },
   });
 };

  return (
    <React.Fragment>
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Order #0001
      </Typography>

      <DineInPickupDeliveryButtons
        onClickFunction={(e) => setOrderType(e.target.value)}
      />

      <Typography class="itemNameTag" sx={{ ml: 1 }}>
        ITEM NAME
      </Typography>

      <Typography class="qtyTag" sx={{ ml: 1 }}>
        QTY
      </Typography>

      <Typography class="deliveryTag" sx={{ ml: 1 }}>
        PRICE
      </Typography>

      <Container
        sx={{
          width: 530,
          height: 450,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography sx={{ mt: -1, ml: -1, mb: 1, color: "#504C64" }}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - -
        </Typography>
        <div>{cartItems.length === 0 && <div>Order Cart is Empty</div>}</div>

        {cartItems.map((item) => (
          <div key={item.id}>
            <Typography
              sx={{
                ml: -0.1,
                color: "white",
                fontSize: 20,
                fontFamily: "Barlow Condensed",
                textAlign: "left",
                mt: -1,
              }}
            >
              {item.name}
            </Typography>

            <DecrementIncrementCounter
              onClickRemoveFunctionCounter={() => onRemove(item)}
              onClickAddFunctionCounter={() => onAdd(item)}
              itemQtyCounter={item.qty}
            />

            <Typography class="menuPriceTag">
              Php {item.price.toFixed(2)}
            </Typography>

            {/* Order Comment Field area */}

            <Typography class="initialPriceTag">
              Php {(item.price * item.qty).toFixed(2)}
            </Typography>

            <Typography sx={{ mt: 3, mb: 1, color: "#504C64" }}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - -
            </Typography>
          </div>
        ))}
      </Container>
              
      {/* Remove Item Button Area */}

      <SubTotalAndProceedPayment
        subTotalPriceOrderSide={totalPrice.toFixed(2)}
        modalFunctionProceedToPayment={() => {
          setModalOpenProceed(true);
        }}
      />
      {modalOpenProceed && (
        <ModalProceed
          setOpenModalProceed={setModalOpenProceed}
          onClickNav={navigateToFinalizeOrderPage}
        />
      )}
    </React.Fragment>
  );
}
    