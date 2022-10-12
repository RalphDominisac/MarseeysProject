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
        ORDER TYPE
      </Typography>

      <Typography
        sx={{
          ml: 38,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ORDER STATUS
      </Typography>


      <Typography
        sx={{
          ml: 74,
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
    </React.Fragment>
  );
}
