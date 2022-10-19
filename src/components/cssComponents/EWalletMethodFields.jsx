import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function EWalletMethodFields(props) {
    const [platform, setPlatform] = React.useState("");

    const handleChangePlatform = (event) => {
      setPlatform(event.target.value);
    };
  return (
    <React.Fragment>
      {/* <TextField
        onChange={(event) => props.setPlatform(event.target.value)}
        className="inputRounded"
        placeholder="E-wallet Platform"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      /> */}

      <FormControl
        sx={{
          m: 1,
          width: 230,
          backgroundColor: "#252836",
          borderRadius: 3,
          ml: -1,
          height: 42,
          mt: 1,
          mb: 2,
        }}
      >
        <Select
          value={platform}
          onChange={handleChangePlatform}
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
          <MenuItem value="">Select Platform</MenuItem>
          <MenuItem value={"GCash"}>GCash </MenuItem>
          <MenuItem value={"PayMaya"}> PayMaya </MenuItem>
        </Select>
      </FormControl>

      <TextField
        onChange={(event) => props.handleChangeMobileNo(event.target.value)}
        className="inputRounded"
        placeholder="E-wallet Number"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
      <TextField
        onChange={(event) => props.handleChangePaidAmount(event.target.value)}
        className="inputRounded"
        placeholder="Amount to be Payed"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
