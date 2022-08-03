/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { css } from "@emotion/react";


export default function TestSample() {
  

  const [selected2, setSelected2] = useState(false);

  return (
    <div className="App">
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: "#02A7DD",
            border: "1px solid red",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "#02A7DD",
            border: "1px solid red",
          },
          ":hover": {
            backgroundColor: "#02A7DD",
            border: "1px solid red",
          },
        }}
        selected={selected2}
        onClick={() => setSelected2((prev) => !prev)}
      >
        ListItemButton
      </ListItemButton>
    </div>
  );
}
