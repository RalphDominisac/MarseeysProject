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

function preventDefault(event) {
  event.preventDefault();
}

export default function PaymentDetailsSidePage(props) {

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
        Order Details
      </Typography>

      (textfield/forms below will vary, depending on order type)

      {/* <SaveToDraftButtonComponent
        saveToDraftModalFunction={() => {
          setModalOpenSaveToDraft(true);
        }}
      />
      {modalOpenSaveToDraft && (
        <ModalSaveToDraft setOpenModalSaveToDraft={setModalOpenSaveToDraft} />
      )} */}

      <Typography sx={{ ml: 2, mt: 0, mb: -2, color: "#504C64" }}>
        ____________________________________________________
      </Typography>

      <Typography class="itemNameTag">Customer Name</Typography>

      <TextField
        className="inputRounded"
        placeholder="Enter name"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 460, mt: -2 }}
      />

      <SelectDiscountComponent
        discountVal={discount}
        handleChangeFunction={handleChange2}
      />

      <Typography class="itemNameTag">Assign Table Number</Typography>

      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={450}
        marginLeft={3}
        height={283}
      >
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="1" />
          <TableNumberButtons tableNum="2" />
          <TableNumberButtons tableNum="3" />
          <TableNumberButtons tableNum="4" />
          <TableNumberButtons tableNum="5" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="6" />
          <TableNumberButtons tableNum="7" />
          <TableNumberButtons tableNum="8" />
          <TableNumberButtons tableNum="9" />
          <TableNumberButtons tableNum="10" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="11" />
          <TableNumberButtons tableNum="12" />
          <TableNumberButtons tableNum="13" />
          <TableNumberButtons tableNum="14" />
          <TableNumberButtons tableNum="15" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="16" />
          <TableNumberButtons tableNum="17" />
          <TableNumberButtons tableNum="18" />
          <TableNumberButtons tableNum="19" />
          <TableNumberButtons tableNum="20" />
        </Stack>

        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="21" />
          <TableNumberButtons tableNum="22" />
          <TableNumberButtons tableNum="23" />
          <TableNumberButtons tableNum="24" />
          <TableNumberButtons tableNum="25" />
        </Stack>

        {/* Kubo Numbers: */}

        <KuboNumButtonComponent />
      </Box>

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
    