import React from 'react';
import Typography from "@mui/material/Typography";

export default function DiscountAndOrderTotalComponent({discountLabel, discountVal, orderTotalVal}) {
  return (
    <React.Fragment>
      <Typography
        sx={{
          mt: 0,
          ml: 4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Discount ({discountLabel}%):
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 43,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        - Php {discountVal}
      </Typography>

      <Typography
        sx={{
          mt: 0,
          ml: 4,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
        }}
      >
        Order Total:
      </Typography>

      <Typography
        sx={{
          mt: -3.7,
          ml: 44.3,
          color: "white",
          fontFamily: "Barlow Condensed",
          fontSize: 20,
          mb: -1,
        }}
      >
        Php
        {orderTotalVal}
      </Typography>
    </React.Fragment>
  );
}
