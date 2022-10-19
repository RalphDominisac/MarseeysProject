import React from "react";
import TextField from "@mui/material/TextField";

export default function CashMethodFields(props) {
  
  return (
    <React.Fragment>
      <TextField
        onChange={(event) => props.handleChangePaidAmount(event.target.value)}
        className="inputRounded"
        placeholder="Cash Amount to be Paid"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335 }}
      />
    </React.Fragment>
  );
}
