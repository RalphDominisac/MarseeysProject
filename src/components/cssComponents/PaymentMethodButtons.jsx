import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function PaymentMethodButtons({ onClickFunction }) {
  return (
    <React.Fragment>
      <Typography
        sx={{
          ml: 1,
          mt: 1,
          mb: 2,
          fontFamily: "Barlow Condensed",
          fontSize: 25,
        }}
      >
        Choose Payment Method:
      </Typography>
      <Stack spacing={2} direction="row" sx={{ mt: -1, ml: 5 }}>
        <Button
          onClick={onClickFunction}
          value="Dine In"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          Cash
        </Button>
        <Button
          onClick={onClickFunction}
          value="Pickup"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          Bank/GCash
        </Button>
        <Button
          onClick={onClickFunction}
          value="Delivery"
          variant="outlined"
          sx={{
            "&.Mui-selected": {},
            "&.Mui-focusVisible": {
              border: "3px solid #F2A42A",
            },
            ":focus": {
              border: "3px solid #F2A42A",
            },
            ":hover": {
              border: "3px solid #F2A42A",
            },

            width: 131,
            textTransform: "none",
            height: 42,
            borderRadius: 3,
            fontFamily: "Barlow Condensed",
            fontSize: "22px",
            backgroundColor: "#252836",
            borderColor: "#252836",
            color: "white",
          }}
        >
          AR/Credit
        </Button>
      </Stack>
      appear and reappear payment textfields, depending on which button clicked (just like category buttons BBQ, etc. to show category menu items)
    </React.Fragment>
  );
}
