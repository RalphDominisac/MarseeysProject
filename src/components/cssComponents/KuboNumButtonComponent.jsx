import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function KuboNumButtonComponent(props) {
  return (
    <React.Fragment>
      <Button
        value="26"
        variant="contained"
        onClick={event => props.handleTableClick(event, event.target.value)}
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -57,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          26
        </Typography>
      </Button>
      <Button
        value="27"
        variant="contained"
        onClick={event => props.handleTableClick(event, event.target.value)}
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -40.5,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          27
        </Typography>
      </Button>
      <Button
        value="28"
        variant="contained"
        onClick={event => props.handleTableClick(event, event.target.value)}
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -24,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
         28
        </Typography>
      </Button>
    </React.Fragment>
  );
}
