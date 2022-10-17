import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import axiosInstance from "../../helpers/axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export default function DeliveryTypeComponent(props) {
  const [deliveryMethods, setDeliveryMethods] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axiosInstance.get('/delivery/methods').then((response) => {
      setDeliveryMethods(response.data)
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }, [])

  return (
    <React.Fragment>
      <select style={{marginTop: 45}} onChange={(event) => props.handleDeliveryMethod(event, event.target.value)} required>
        <option key="blankChoice" hidden>Delivery Method</option>
        {deliveryMethods.map((method) => (
          <option key={method.id} value={method.name}>{method.name}</option>
        ))}
      </select>

      <TextField
        onChange={(event) => props.handleAddress(event, event.target.value)}
        className="inputRounded"
        placeholder="Delivery Address"
        variant="outlined"
        size="small"
        sx={{ ml: 3, mt: 4, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
