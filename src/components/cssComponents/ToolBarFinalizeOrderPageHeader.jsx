import React from 'react'

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ToolBarFinalizeOrderPageHeader({getOrderNum, getOrderType}) {
  return (
    <React.Fragment>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontFamily: "Barlow Condensed",
            fontSize: "30px",
            mt: 4.5,
          }}
        >
          {getOrderNum}
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontFamily: "Barlow Condensed",
            fontSize: "30px",
            mt: 4.5,
            ml: 55,
          }}
        >
          Order Type: {getOrderType}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
