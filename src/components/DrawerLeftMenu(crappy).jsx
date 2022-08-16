import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import OrderSidePage from "./OrderSidePage";

import DateTime from "./DateTime";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import { useState } from "react";

import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CategoryButtons from "./CategoryButtons";
import { autocompleteClasses } from "@mui/material";

// const drawerWidth = 240;  (change extra space of the drawer)
const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function DrawerLeftMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"
      //   open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#252836",
        },
      }}
    >
      {/* ** Upper Right Part For Logo */}
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
          src="images/marseeys-icon.png"
          alt="Marseeys Icon"
          class="center"
        />

        {/* <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
              <ChevronLeftIcon />
            </IconButton> */}
      </Toolbar>
      <Divider />

      {/* SIDEBAR MENU LEFT ******************************************************************************/}
      <List component="nav" sx={{ backgroundColor: "#252836" }}>
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
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>{/* <DashboardIcon/> */}</ListItemIcon>

          {/* <ListItemText primary="ORDER" /> */}
          <img
            id="orderIcon"
            src="images/ordericon.png"
            alt="Order Icon"
            // class="center"
          />
        </ListItemButton>
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
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>{/* <ShoppingCartIcon /> */}</ListItemIcon>
          <img
            id="pendingIcon"
            src="images/pending.png"
            alt="Pending Icon"
            // class="center"
          />
        </ListItemButton>
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
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>{/* <PeopleIcon /> */}</ListItemIcon>
          <img
            id="draftIcon"
            src="images/draft.png"
            alt="Draft Icon"
            // class="center"
          />
        </ListItemButton>
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
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>{/* <BarChartIcon /> */}</ListItemIcon>
          <img
            id="historyIcon"
            src="images/history.png"
            alt="History Icon"
            // class="center"
          />
        </ListItemButton>
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
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>{/* <LayersIcon /> */}</ListItemIcon>
          <img
            id="discountsIcon"
            src="images/discounts.png"
            alt="discounts Icon"
            // class="center"
          />
        </ListItemButton>

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
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
          <img
            id="logoutIcon"
            src="images/logout.png"
            alt="logout Icon"
            // class="center"
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
