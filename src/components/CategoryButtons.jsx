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
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          BBQ
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Beef
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Bilao
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Chicken
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Desserts
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Drinks
        </Button>
      </Stack>
      <Stack spacing={0} direction="row">
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Food Trays
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Handaan
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Noodles
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Pica-pica
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Platters
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Pork
        </Button>
      </Stack>
      <Stack spacing={0} direction="row" sx={{ mb: 6 }}>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Rice
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Seafood
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Sizzling
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Soup
        </Button>

        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 131 }}>
          Vegetables
        </Button>
      </Stack>

      <Stack spacing={0} direction="row">
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 160 }}>
          --
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 160 }}>
          --
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 160 }}>
          --
        </Button>
        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 160 }}>
          --
        </Button>

        <Button variant="contained" sx={{ mt: 1, ml: 1, width: 160 }}>
          --
        </Button>
      </Stack>

      

      <Button variant="contained" sx={{ mt: 46, ml: 85, width: 160 }}>
        Customer List
      </Button>
    </React.Fragment>
  );
}
