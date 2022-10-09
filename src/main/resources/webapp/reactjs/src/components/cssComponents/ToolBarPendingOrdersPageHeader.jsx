import React from 'react'

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function ToolBarPendingOrdersPageHeader() {
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
            mt: 5,
          }}
        >
          PENDING ORDERS
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
