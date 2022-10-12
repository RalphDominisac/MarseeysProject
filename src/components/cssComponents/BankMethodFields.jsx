import React from "react";
import TextField from "@mui/material/TextField";

export default function BankMethodFields() {
  return (
    <React.Fragment>
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Bank Name"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />

      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Bank Number"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Amount to be Payed"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
