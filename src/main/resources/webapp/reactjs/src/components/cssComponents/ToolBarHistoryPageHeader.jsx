import React from 'react'

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function ToolBarHistoryPageHeader() {
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
         History of Orders
        </Typography>

    
      </Toolbar>
    </React.Fragment>
  );
}
