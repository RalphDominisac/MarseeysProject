import React from 'react'
import Typography from "@mui/material/Typography";

export default function PendingOrderPageHeaderLabels() {
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
          ml: 23,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.1,
        }}
      >
        PAYMENT STATUS
      </Typography>

      <Typography
        sx={{
          ml: 42,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ORDER STATUS
      </Typography>

      <Typography
        sx={{
          ml: 93,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ORDER TOTAL
      </Typography>

      <Typography sx={{ ml: 3, mt: -0.8, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
