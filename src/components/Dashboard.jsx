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
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import OrderSidePage from "./OrderSidePage";
import Orders from "./Orders";
import DateTime from "./DateTime";


import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import { useState } from "react";

import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CategoryButtons from "./CategoryButtons";


// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }




const drawerWidth = 120;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

const mdTheme = createTheme({
  palette: {
    background: {
      default: "#252836",
    },
    text: {
      primary: "#ffffff",
    },
    paper: {
    background: "red",
  },
    
  },
});



export default function DashboardContent() {


  const [selectedIndex, setSelectedIndex] = React.useState("");

   const handleListItemClick = (event, index) => {
     setSelectedIndex(index);
   };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ width: "50" }}>
          {/* <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              backgroundColor: "#282c34",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            INSERT TIME AND DATE HERE
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            ></Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            INSERT SEARCH BAR HERE
          </Toolbar> */}
        </AppBar>

        <Drawer
          variant="permanent"
          open={open}
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
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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
            {/* <ListItemButton
              sx={{
                "&.Mui-selected": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
              }}
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon> </ListItemIcon>
              <img
                id="arcreditIcon"
                src="images/arcredit.png"
                alt="arcredit Icon"
                
              />
            </ListItemButton> */}

            <ListItemButton
              sx={{
                "&.Mui-selected": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                "&.Mui-focusVisible": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
                ":hover": {
                  // backgroundColor: "#02A7DD",
                  border: "3px solid #F2A42A",
                },
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

            <Divider sx={{ my: 10 }} />
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: "#252836",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {/* <Toolbar /> */}
          {/* <Container maxWidth="md" sx={{ mt: 1, mb: 1, ml: 0 }}> */}
          <Container maxWidth="md" sx={{ ml: 0 }}>
            <Grid container spacing={2}>
              {/* Chart  sx={{ backgroundColor: "#282c34" }}   */}

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    // p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 790,
                    width: 850,
                    backgroundColor: "green",
                  }}
                >
                  {/* <Chart /> */}

                  {/* Header Time and Date Display*/}
                  {/* <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
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
                        <Search>
                          <SearchIconWrapper>
                            <SearchIcon sx={{ color: "black" }} />
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Search for an item"
                            inputProps={{ "aria-label": "search" }}
                          />
                        </Search>
                      </Toolbar>
                    </AppBar>
                  </Box> */}

                  {/* <Toolbar>
                    <DateTime />

                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon sx={{ color: "black" }} />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search for an item"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Toolbar> */}

                  <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
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
                        <Search>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Search for an item"
                            inputProps={{ "aria-label": "search" }}
                          />
                        </Search>
                      </Toolbar>
                    </AppBar>
                    <CategoryButtons />
                  </Box>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 790,
                    width: 524,
                    marginLeft: 25,
                    backgroundColor: "#1F1D2B",
                  }}
                >
                  <OrderSidePage />
                </Paper>
              </Grid>

              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: 750,
                    height: 370,
                  }}
                >
                  <Orders />
                </Paper>
              </Grid> */}
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>

          {/* Potential side order part */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// export default function Dashboard() {
  // const [selected1, setSelected1] = useState(false);
  // const [selected2, setSelected2] = useState(false);
  // const [selected3, setSelected3] = useState(false);
  // const [selected4, setSelected4] = useState(false);
  // const [selected5, setSelected5] = useState(false);
  // const [selected6, setSelected6] = useState(false);
  // const [selected7, setSelected7] = useState(false);
  
  
//   return <DashboardContent />;
// }



