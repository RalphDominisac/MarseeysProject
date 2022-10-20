import React from 'react'
import Typography from "@mui/material/Typography";

export default function HistoryPageHeaderLabels() {
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
          mt: -3.2,
        }}
      >
        PAYMENT STATUS
      </Typography>

      <Typography
        sx={{
          ml: 50,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
        }}
      >
        ORDER STATUS
      </Typography>

      <Typography
        sx={{
          ml: 99,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
          mt: -3.2,
          // mb: 35
        }}
      >
        TOTAL
      </Typography>

      <Typography sx={{ ml: 3, mt: 2, mb: 1, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
