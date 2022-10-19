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
import PrintReceiptModal from "./modals/PrintReceiptModal";
import FinalizePaymentModal from "./modals/FinalizePaymentModal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate, 
  useLocation
} from "react-router-dom";
import {useEffect } from "react";
import axiosInstance from "../helpers/axios";




import PaymentMethodButtonsStyle from "./cssComponents/PaymentMethodButtonsStyle";
import ARCreditMethodFields from "./cssComponents/ARCreditMethodFields";
import BankGCashMethodFields from "./cssComponents/BankMethodFields";
import CashMethodFields from "./cssComponents/CashMethodFields";
import EWalletMethodFields from "./cssComponents/EWalletMethodFields";
import OrderStatusButton from "./cssComponents/OrderStatusButton";


function preventDefault(event) {
  event.preventDefault();
}

export default function OrderSummarySidePage(props) {

const [modalOpenFinalizePayment, setModalOpenFinalizePayment] = useState(false);


const tableNo = props.order?.tableNo
const deliveryMethod = props.order?.deliveryMethod
const address = props.order?.address
const phoneNo = props.order?.phoneNo
const estimatedTime = props.order?.estimatedTime

//  useEffect(() => {
//   setOrderRequest({
//     id: data.id, 
//     contents: data.contents, 
//     customer: data?.customer, 
//     tableNo: data?.tableNo,
//     deliveryMethod: data?.deliveryMethod,
//     address: data?.address, 
//     phoneNo: data?.phoneNo, 
//     estimatedTime: data?.estimatedTime,
//     discount: data.discount,
//     price: data.price, 
//   })
//  }, [])

    const navigate = useNavigate();
   

  // const handleChange = (event) => {
  //   setOrderType(event.target.value);
  // };

  // const handleChange2 = (event) => {
  //   setDiscount(event.target.value);
  // };

  const navigateToPrintReceiptFormatPage = () => {
    if (myPaymentMethod === "Cash") {
      axiosInstance.post('/pay/cash', paymentRequest)
      .then((response) => {
        if (response.status === 201) {
          navigate("/printreceiptformatpage");
        }
        console.log(response)
      }).catch((error) => {
        console.log(paymentRequest)
        console.log("Error: ", error)
      })
    } else if (myPaymentMethod === "E-wallet") {
      axiosInstance.post('/pay/e-wallet', paymentRequest)
      .then((response) => {
        if (response.status === 201) {
          navigate("/printreceiptformatpage");
        }
      }).catch((error) => {
        console.log("Error: ", error)
      })
    }
  };

  // const paymentMethod = ["Cash", "Bank", "AR/Credit", "E-wallet"];
  const paymentMethod = ["Cash", "E-wallet"];

  const [myPaymentMethod, setMyPaymentMethod] = useState("");
  const [paymentRequest, setPaymentRequest] = useState({
    amount: '', 
    orderId: props.order.id, 
    mobileNo: '', 
    platform: '', 
  });

  function handleChangePaidAmount(amount) {
    setPaymentRequest({
      ...paymentRequest, 
      amount: amount
    })
  }

  function handleChangeMobileNo(mobileNo) {
    setPaymentRequest({
      ...paymentRequest, 
      mobileNo: mobileNo
    })
  }

  function handleChangePlatform(platform) {
    setPaymentRequest({
      ...paymentRequest, 
      platform: platform
    })
  }


  return (
    <React.Fragment>
      {tableNo && (
        <Typography
          sx={{
            mt: 0,
            ml: 1,
            color: "white",
            fontFamily: "Barlow Condensed",
            fontSize: 20,
          }}
        >
          Table Number: {tableNo}
        </Typography>
      )}

      {deliveryMethod && (
        <Typography
          sx={{
            mt: 0,
            ml: 1,
            color: "white",
            fontFamily: "Barlow Condensed",
            fontSize: 20,
          }}
        >
          Delivery Method: {deliveryMethod}
        </Typography>
      )}

      {address && (
        <Typography
          sx={{
            mt: 0,
            ml: 1,
            color: "white",
            fontFamily: "Barlow Condensed",
            fontSize: 20,
          }}
        >
          Delivery Address: {address}
        </Typography>
      )}

      {phoneNo && (
        <Typography
          sx={{
            mt: 0,
            ml: 1,
            color: "white",
            fontFamily: "Barlow Condensed",
            fontSize: 20,
          }}
        >
          Phone # : {phoneNo}
        </Typography>
      )}

      {estimatedTime && (
        <Typography
          sx={{
            mt: 0,
            ml: 1,
            color: "white",
            fontFamily: "Barlow Condensed",
            fontSize: 20,
          }}
        >
          Estimated Ready Time: {estimatedTime} minute/s
        </Typography>
      )}

      <Typography
        sx={{ ml: 1, mt: 1, fontFamily: "Barlow Condensed", fontSize: 25 }}
      >
        Payment Method:
      </Typography>
      {/* PaymentMethodButtons:  */}
      <Stack spacing={2} direction="row">
        {paymentMethod.map((method) => (
          <PaymentMethodButtonsStyle
            title={method.toLocaleUpperCase()}
            key={method}
            onClick={() => setMyPaymentMethod(method)}
          />
        ))}
      </Stack>
      <div>
        <p>
          {myPaymentMethod === "Cash" && <CashMethodFields handleChangePaidAmount={handleChangePaidAmount} />}
          {/* {myPaymentMethod === "Bank" && <BankGCashMethodFields />}
          {myPaymentMethod === "AR/Credit" && <ARCreditMethodFields />} */}
          {myPaymentMethod === "E-wallet" && <EWalletMethodFields handleChangePaidAmount={handleChangePaidAmount} handleChangeMobileNo={handleChangeMobileNo} handleChangePlatform={handleChangePlatform} />}
        </p>
      </div>

      <Button
        onClick={() => {
          setModalOpenFinalizePayment(true);
        }}
        className="proceedToPaymentButton"
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#F2A42A",
          ml: 20,
          mt: 8,
          width: 10,
          borderRadius: 5,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "210px",
          minHeight: "60px",
          fontFamily: "Barlow Condensed",
          fontSize: "19px",
        }}
      >
        Finalize Payment
      </Button>
      {modalOpenFinalizePayment && (
        <FinalizePaymentModal
          setOpenModalFinalizePayment={setModalOpenFinalizePayment}
          onClickFinalizePayment={navigateToPrintReceiptFormatPage}
        />
      )}

      <OrderStatusButton/>
    </React.Fragment>
  );
}
    