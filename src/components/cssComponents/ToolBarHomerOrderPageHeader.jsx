import React from 'react'

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DateTime from "../DateTime";


export default function ToolBarHomerOrderPageHeader() {
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
          }}
        >
          <DateTime />
        </Typography>

        {/* SEARCH BAR: */}
        {/* <Search>
                            <SearchIconWrapper>
                              <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                              placeholder="Search for an item"
                              inputProps={{ "aria-label": "search" }}
                            />
                          </Search> */}
      </Toolbar>
    </React.Fragment>
  );
}
