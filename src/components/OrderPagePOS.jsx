import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function OrderPagePOS(props) {
  return (
    // <div>
    //   <div
    //     style={{
    //       display: "grid",
    //       gridTemplateColumns: "repeat(3, 1fr)",
    //       gridGap: 20,
    //     }}
    //   >
    //     Column 1
    //   </div>
    //   <div>Column 2</div>
    //   <div>Column 3</div>
    // </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item>xs=2</Item>

          <Drawer>

          </Drawer>


        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderPagePOS;
