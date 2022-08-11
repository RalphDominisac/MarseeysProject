// import "./index.css";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const App = () => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
      alert("min limit reached");
    }
  };
  return (
    <>
      {/* <div className="main_div"> */}
      {/* <div className="center_div"> */}
      {/* <div className="btn_div"> */}
      <Button
        onClick={DecNum}
        sx={{
          ":hover": {
            bgcolor: "#D33131", // theme.palette.primary.main
          },
          color: "white",
          backgroundColor: "#9E3F3F",
          ml: 35,
          mt: -6,
          width: 3,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "50px",
        }}
        size="small"
      >
        <RemoveIcon />
      </Button>

      <h1 className="counterResult">{count}</h1>

     
        <Button
          onClick={IncNum}
          sx={{
            ":hover": {
              bgcolor: "#55CE6B", // theme.palette.primary.main
            },
            color: "white",
            backgroundColor: "#5D9B68",
            ml: 45,
            mt: -6,
            mt: -9,
            width: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          style={{
            maxWidth: "30px",
            maxHeight: "30px",
            minWidth: "30px",
            minHeight: "50px",
          }}
          size="small"
        >
          <AddIcon />
        </Button>
    
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default App;
