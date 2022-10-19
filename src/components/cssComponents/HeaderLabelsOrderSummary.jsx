import React from 'react';
import Typography from "@mui/material/Typography";


export default function HeaderLabelsOrderSummary({orderNum}) {
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          fontFamily: "Barlow Condensed",
          fontSize: "30px",
          mt: -6,
          ml: 14,
        }}
      >
        Order Summary
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          fontFamily: "Barlow Condensed",
          fontSize: "25px",
          mt: -1,
          ml: 14,
        }}
      >
        (Order #{orderNum})
      </Typography>

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
          ml: 63.5,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        PRICE
      </Typography>
      <Typography
        sx={{
          ml: 81,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        QTY
      </Typography>
      <Typography
        sx={{
          ml: 100,
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
    </React.Fragment>
  );
}
