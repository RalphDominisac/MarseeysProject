import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";





function preventDefault(event) {
  event.preventDefault();
}

export default function CategoryButtons() {


  return (
    <React.Fragment>
      <Stack spacing={0} direction="row">
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          BBQ
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Beef
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Bilao
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Chicken
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Desserts
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Drinks
        </Button>
      </Stack>
      <Stack spacing={0} direction="row">
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Food Trays
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Handaan
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Noodles
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Pica-pica
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Platters
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Pork
        </Button>
      </Stack>
      <Stack spacing={0} direction="row" sx={{ mb: 6 }}>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Rice
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Seafood
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Sizzling
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Soup
        </Button>

        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 131, textTransform: "none" }}
        >
          Vegetables
        </Button>
      </Stack>

      <Stack spacing={0} direction="row">
        <Button
          variant="contained"
          sx={{
            mt: 1,
            ml: 1,
            width: 160,
            textTransform: "none",
      
          }}
        >
          --
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            ml: 1,
            width: 160,
            textTransform: "none",
           
          }}
        >
          --
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 160, textTransform: "none" }}
        >
          --
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 160, textTransform: "none" }}
        >
          --
        </Button>

        <Button
          variant="contained"
          sx={{ mt: 1, ml: 1, width: 160, textTransform: "none" }}
        >
          --
        </Button>
      </Stack>

      <Button
        variant="contained"
        sx={{ mt: 46, ml: 85, width: 160, textTransform: "none" }}
      >
        Customer List
      </Button>
    </React.Fragment>
  );
}
