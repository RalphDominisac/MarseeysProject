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




import PaymentMethodButtonsStyle from "./cssComponents/PaymentMethodButtonsStyle";
import ARCreditMethodFields from "./cssComponents/ARCreditMethodFields";
import BankGCashMethodFields from "./cssComponents/BankMethodFields";
import CashMethodFields from "./cssComponents/CashMethodFields";
import EWalletMethodFields from "./cssComponents/EWalletMethodFields";


function preventDefault(event) {
  event.preventDefault();
}

export default function OrderSummarySidePage() {
  const location = useLocation();
  const data = location.state;

 const [modalOpenFinalizePayment, setModalOpenFinalizePayment] = useState(false);
 const [orderRequest, setOrderRequest] = useState({
  id: '', 
  contents: '',
  customer: '',
  tableNo: '',
  deliveryMethod: '',
  address: '', 
  phoneNo: '', 
  estimatedTime: '',
  discount: '',
  price: '', 
})

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
    navigate("/printreceiptformatpage");
  };

  // const paymentMethod = ["Cash", "Bank", "AR/Credit", "E-wallet"];
  const paymentMethod = ["Cash", "E-wallet"];

  const [myPaymentMethod, setMyPaymentMethod] = useState("");






  return (
    <React.Fragment>
      <Typography
        sx={{
          mt: -0.5,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Customer: Juan Pablo
      </Typography>
      <Typography
        sx={{
          mt: 0,
          ml: 1,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Table Number: 4
      </Typography>
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
          {myPaymentMethod === "Cash" && <CashMethodFields />}
          {/* {myPaymentMethod === "Bank" && <BankGCashMethodFields />}
          {myPaymentMethod === "AR/Credit" && <ARCreditMethodFields />} */}
          {myPaymentMethod === "E-wallet" && <EWalletMethodFields />}
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
    </React.Fragment>
  );
}
    