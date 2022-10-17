import * as React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DecreIncreCounter from "./DecreIncreCounter";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TableNumberButtons from "./cssComponents/TableNumberButtons";
import ModalSaveToDraft from "./modals/ModalSaveToDraft";
import ModalCancelOrder from "./modals/ModalCancelOrder";
import ModalConfirmOrder from "./modals/ModalConfirmOrder";
import SaveToDraftButtonComponent from "./cssComponents/SaveToDraftButtonComponent";
import SelectDiscountComponent from "./cssComponents/SelectDiscountComponent";
import KuboNumButtonComponent from "./cssComponents/KuboNumButtonComponent";
import DiscountAndOrderTotalComponent from "./cssComponents/DiscountAndOrderTotalComponent";
import CancelOrderButtonComponent from "./cssComponents/CancelOrderButtonComponent";
import ConfirmOrderButtonComponent from "./cssComponents/ConfirmOrderButtonComponent";
import AssignTableNumberComponent from "./cssComponents/AssignTableNumberComponent";
import PickupTypeComponent from "./cssComponents/PickupTypeComponent";
import DeliveryTypeComponent from "./cssComponents/DeliveryTypeComponent";

function preventDefault(event) {
  event.preventDefault();
}

export default function OrderDetailsSidePage(props) {
  const [modalOpenConfirmOrder, setModalOpenConfirmOrder] = useState(false);

  const [modalOpenCancelOrder, setModalOpenCancelOrder] = useState(false);

  const [modalOpenSaveToDraft, setModalOpenSaveToDraft] = useState(false);

  const [ordertype, setOrderType] = React.useState("");
  const [discount, setDiscount] = React.useState("");

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleChange2 = (event) => {
    setDiscount(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography class="orderNumberSide" sx={{ ml: 1 }}>
        Order Details for <u> {props.orderTypeSet} </u>
      </Typography>

      {/* <Typography sx={{ ml: 2, mt: 0, mb: -2, color: "#504C64" }}>
        ____________________________________________________
      </Typography>
      <Typography class="itemNameTag">Customer Name</Typography>
      <TextField
        className="inputRounded"
        placeholder="Enter name"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 460, mt: -2 }}
      /> */}
      <SelectDiscountComponent
        discountVal={discount}
        handleChangeFunction={handleChange2}
      />

      <div>
        {props.orderTypeSet === "Dine In" && <AssignTableNumberComponent tableNumber={props.tableNumber} handleTableClick={props.handleTableClick} />}
        {props.orderTypeSet === "Pickup" && <PickupTypeComponent handlePhoneNo={props.handlePhoneNo} handleEstimatedTime={props.handleEstimatedTime} />}
        {props.orderTypeSet === "Delivery" && <DeliveryTypeComponent handleDeliveryMethod={props.handleDeliveryMethod} handleAddress={props.handleAddress} />}
      </div>

      <Typography sx={{ ml: 2, mt: 0, color: "#504C64" }}>
        ____________________________________________________
      </Typography>
      <DiscountAndOrderTotalComponent
        discountLabel={discount * 100}
        discountVal={Number(props.subTotalPrice * discount).toFixed(2)}
        orderTotalVal={Number(
          props.subTotalPrice - props.subTotalPrice * discount
        ).toFixed(2)}
      />
      <ConfirmOrderButtonComponent
        onClickConfirmModal={() => {
          setModalOpenConfirmOrder(true);
        }}
      />
      {modalOpenConfirmOrder && (
        <ModalConfirmOrder
          setOpenModalConfirmOrder={setModalOpenConfirmOrder} 
          orderRequest={props.orderRequest}
          orderType={props.orderTypeSet}
          discount={discount}
        />
      )}
      <CancelOrderButtonComponent
        onClickCancelModal={() => {
          setModalOpenCancelOrder(true);
        }}
      />
      {modalOpenCancelOrder && (
        <ModalCancelOrder setOpenModalCancelOrder={setModalOpenCancelOrder} />
      )}
    </React.Fragment>
  );
}
    