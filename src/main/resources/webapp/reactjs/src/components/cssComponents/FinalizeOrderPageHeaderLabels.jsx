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
        ITEM NAME
      </Typography>
      <Typography
        sx={{
          ml: 54,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ITEM PRICE
      </Typography>
      <Typography
        sx={{
          ml: 75,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        QTY
      </Typography>
      <Typography
        sx={{
          ml: 88,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ITEM SUBTOTAL
      </Typography>
      <Typography sx={{ ml: 3, mt: -0.8, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
