import React from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";



export default function SelectDiscountComponent({discountVal, handleChangeFunction}) {
  return (
    <React.Fragment>
      <FormControl
        sx={{
          m: 1,
          width: 230,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: 3,
          height: 42,
          mt: 1,
          mb: -2,
        }}
      >
        <Select
          value={discountVal}
          onChange={handleChangeFunction}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid white",
              },
            },

            // more accurate dropdown effect
            // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

            borderRadius: 3,
            width: 230,
            height: 42,
            fontFamily: "Barlow Condensed",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "#3F4351",
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#3F4351",
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "#3F4351",
                },
                backgroundColor: "#252836",
              },
            },
          }}
        >
          <MenuItem value="">Select Discount</MenuItem>
          <MenuItem value={0.05}>Discount: 5% </MenuItem>
          <MenuItem value={0.1}>Discount: 10% </MenuItem>
          <MenuItem value={0.15}>Discount: 15% </MenuItem>
          <MenuItem value={0.2}>Discount: 20% </MenuItem>
          <MenuItem value={0.2}>Discount (Senior): 20% </MenuItem>
          <MenuItem value={0.2}>Discount (PWD): 20% </MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
