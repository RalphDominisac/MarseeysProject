import React from 'react'
import Typography from "@mui/material/Typography";
import OrderButtonHistoryStyle from "./OrderButtonHistoryStyle";

export default function HistoryPageBody() {
  return (
    <React.Fragment>
      <OrderButtonHistoryStyle title="ORDER #0001" />

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 56,
          mt: -8,
          mb: 1,
        }}
      >
        Php 10000.00
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 92,
          mt: -4.7,
          mb: 1,
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
