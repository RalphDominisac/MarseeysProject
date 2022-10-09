import React from 'react'
import Typography from "@mui/material/Typography";

// importing axios
import axios from 'axios';

export default function PendingOrderPageBody() {
  // creating axios constructor
  constructor(props) {
    super(props);
    this.state = {
      Order : []
    };
  }

  return (
    <React.Fragment>
      <Typography class="customerListStack" sx={{ color: "white" }}>
        
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 56,
          mt: -6,
        }}
      >
        
      </Typography>

      <Typography
        sx={{
          fontFamily: "Barlow Condensed",
          fontSize: 19,
          ml: 92,
          mt: -3.7,
        }}
      >
        
      </Typography>

      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - -
      </Typography>
    </React.Fragment>
  );
}
