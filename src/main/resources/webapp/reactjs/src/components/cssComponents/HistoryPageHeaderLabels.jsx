import React from 'react'
import Typography from "@mui/material/Typography";

export default function FinalizeOrderPageHeaderLabels() {
  return (
    <React.Fragment>
      <Typography
        sx={{
          ml: 5,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 3,
        }}
      >
        ORDER #
      </Typography>

      <Typography
        sx={{
          ml: 58,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        SUBTOTAL
      </Typography>

      <Typography
        sx={{
          ml: 99,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        TOTAL
      </Typography>

      <Typography sx={{ ml: 3, mt: -0.8, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>

      <Typography class="customerListStack" sx={{ color: "white" }}>
        ORDER #0001
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 56,
          mt: -6,
        }}
      >
        Php 10000.00
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 92,
          mt: -3.7,
        }}
      >
        Php 20000.00
      </Typography>

      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
