import React from 'react'
import Typography from "@mui/material/Typography";

export default function PendingOrderPageBody() {
  return (
    <React.Fragment>
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
