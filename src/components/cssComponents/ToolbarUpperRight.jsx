import React from 'react'
import Toolbar from "@mui/material/Toolbar";

export default function ToolbarUpperRight() {
  return (
       <React.Fragment>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
          backgroundColor: "#1F1D2B",
          borderRadius: 4,
          ml: -1.5,
        }}
      >
        <img
          id="marseeysicon"
          src="../images/marseeys-icon.png"
          alt="Marseeys Icon"
          class="center"
        />
      </Toolbar>
      </React.Fragment>
   
  );
}
