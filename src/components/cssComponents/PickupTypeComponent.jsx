import React from 'react';
import TextField from "@mui/material/TextField";


export default function PickupTypeComponent(props) {
  return (
    <React.Fragment>
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        type="number"
        className="inputRounded"
        placeholder="Pickup Contact Number"
        onChange={(event) => props.handlePhoneNo(event, event.target.value)}
        variant="outlined"
        size="small"
        sx={{ ml: 3, mt: 4, width: 335, mb: 1, WebkitAppearance: 'none', MozAppearance: 'textfield' }}
      />
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        type="time"
        className="inputRounded"
        onChange={(event) => props.handleEstimatedTime(event, event.target.value)}
        required
        placeholder="Estimated Pickup Time"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
