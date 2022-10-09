import React from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function ListItemButtonComponent({getSelected, getOnClick, imgID, imgSrc}) {
  return (
    <React.Fragment>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            border: "2px solid #F2A42A",
          },
          "&.Mui-focusVisible": {
            border: "2px solid #F2A42A",
          },
          ":hover": {
            border: "2px solid #F2A42A",
          },
          borderRadius: 4,
          border: "2px solid #3A374B",
          height: 90,
          ml: -2,
          mb: 2,
        }}
        selected={getSelected}
        onClick={getOnClick}
      >
        <ListItemIcon></ListItemIcon>
        <img id={imgID} src={imgSrc} alt="Side Icon" />
      </ListItemButton>
    </React.Fragment>
  );
}
