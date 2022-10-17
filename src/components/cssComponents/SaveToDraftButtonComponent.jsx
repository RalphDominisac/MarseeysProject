import React from 'react';
import Button from "@mui/material/Button";


export default function SaveToDraftButtonComponent({saveToDraftModalFunction}) {
  return (
    <React.Fragment>
      <Button
        onClick={saveToDraftModalFunction}
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -8,
          ml: 44,
          width: 155,
          height: 30,
          backgroundColor: "#504C64",
          borderRadius: 3,
          fontFamily: "Barlow Condensed",
          fontSize: "17px",
        }}
      >
        Save to Draft
      </Button>
    </React.Fragment>
  );
}
