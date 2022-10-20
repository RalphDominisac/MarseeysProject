import React, { useState } from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axiosInstance from "../../helpers/axios";

export default function OrderStatusButton(props) {
const [served, setServed] = useState(props.order.served)

function onClickStatusFunction() {
  if (served === false) {
    setServed(!served)
    axiosInstance.post('orders/' + props.order.id + '/serve')
    .then((response) => {
      
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }
}

  return (
    <React.Fragment>
      <Toolbar>
        {!served ? (
        <Button
          onClick={onClickStatusFunction}
          sx={{
            ":hover": {
              bgcolor: "#787589", // theme.palette.primary.main
            },
            color: "white",
            backgroundColor: "#504C64",
            ml: -1,
            mt: 5,
            mr: 2,
            width: 10,
            borderRadius: 2,
            fontFamily: "Barlow Condensed",
            fontSize: "17px",
          }}
          style={{
            maxWidth: "150px",
            maxHeight: "30px",
            minWidth: "100px",
            minHeight: "40px",
          }}
          size="small"
        >   
          {served}
        </Button>
        ) : (
        <Typography
          sx={{
            ":hover": {
              bgcolor: "#787589", // theme.palette.primary.main
            },
            color: "white",
            backgroundColor: "#504C64",
            ml: -1,
            mt: 5,
            mr: 2,
            width: 10,
            borderRadius: 2,
            fontFamily: "Barlow Condensed",
            fontSize: "17px",
          }}
          style={{
            maxWidth: "30px",
            maxHeight: "30px",
            minWidth: "80px",
            minHeight: "40px",
          }}
          size="small"
        >   
          {served}
        </Typography>
        )}
      </Toolbar>
    </React.Fragment>
  );
}
