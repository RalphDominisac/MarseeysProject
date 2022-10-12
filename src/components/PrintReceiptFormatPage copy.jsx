import React, {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import BackButtonHeaderComponent from "./cssComponents/BackButtonHeaderComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PrintReceiptFormatBody from "./cssComponents/PrintReceiptFormatBody";



const PrintReceiptFormatPage = () => {
    const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: ()=> alert("Print Success!")
  });

    const navigateToOrderSummaryPage = () => {
      navigate("/ordersummarypage");
    };

  return (
    <React.Fragment>
      <BackButtonHeaderComponent onClickNavPath={navigateToOrderSummaryPage} />

      <PrintReceiptFormatBody />

      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        dfdfdfdfdfdfdf
      </div>

      <button onClick={handlePrint}>Print this!</button>
    </React.Fragment>
  );
};


export default PrintReceiptFormatPage;