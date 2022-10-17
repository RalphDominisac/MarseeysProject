import React from 'react';
import Typography from "@mui/material/Typography";

export default function OrderSummaryPageBody() {
  return (
    <React.Fragment>
      {/* BODY CONTENT: */}
      <Typography class="orderSummaryItemStack" sx={{ color: "white" }}>
        Salted Egg Chicken (Half)
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 60,
          mt: -6,
        }}
      >
        Php 2000.00
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 81.7,
          mt: -3.7,
        }}
      >
        2
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 94,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        Php 2000.00
      </Typography>

      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>

      {/* FOOTER, consists of TOTALS: */}
      <Typography
        sx={{
          ml: 79,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 2,
        }}
      >
        Sub-total
      </Typography>
      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 94,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        Php 2000.00
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>

      <Typography
        sx={{
          ml: 69,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 0,
        }}
      >
        Discount (20% Applied)
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 93.2,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        -Php 2000.00
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>

      <Typography
        sx={{
          ml: 78.1,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: 0,
        }}
      >
        Order Total
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          ml: 94,
          mt: -3.5,
          fontSize: 19,
        }}
      >
        Php 2000.00
      </Typography>
      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
