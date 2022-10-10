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
import OrderSummarySidePage from "./OrderSummarySidePage";
import DateTime from "./DateTime";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CategoryButtons from "./CategoryButtons";
import { autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ToolbarUpperRight from "./cssComponents/ToolbarUpperRight";
import ListItemButtonComponent from "./cssComponents/ListItemButtonComponent";


const drawerWidth = 120;



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



// export default function DashboardContent() {
  export default function OrderSummaryPage() {
    const [selectedIndex, setSelectedIndex] = React.useState("");

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    const navigate = useNavigate();
    const navigateSignInPage = () => {
      // 👇️ navigate to /
      navigate("/");
    };

    const navigateToHomeOrderPage = () => {
      navigate("/homeorderpage");
    };

    const navigateToPendingPage = () => {
      navigate("/pendingpage");
    };

    const navigateToDraftsPage = () => {
      navigate("/draftspage");
    };

    const navigateToHistoryPage = () => {
      navigate("/historypage");
    };

    const navigateToDiscountsPage = () => {
      navigate("/discountspage");
    };

    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open} sx={{ width: "50" }}></AppBar>

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
            <ToolbarUpperRight />
            <Divider />

            {/* SIDEBAR MENU LEFT ******************************************************************************/}
            <List component="nav" sx={{ backgroundColor: "#252836" }}>
              <ListItemButtonComponent
                getSelected={selectedIndex === 0}
                getOnClick={
                  ((event) => handleListItemClick(event, 0),
                  navigateToHomeOrderPage)
                }
                imgID="orderIcon"
                imgSrc="./images/ordericon.png"
              />
              <ListItemButtonComponent
                getSelected={selectedIndex === 1}
                getOnClick={
                  ((event) => handleListItemClick(event, 1),
                  navigateToPendingPage)
                }
                imgID="pendingIcon"
                imgSrc="./images/pending.png"
              />

              {/* <ListItemButtonComponent
                getSelected={selectedIndex === 2}
                getOnClick={
                  ((event) => handleListItemClick(event, 2),
                  navigateToDraftsPage)
                }
                imgID="draftIcon"
                imgSrc="images/draft.png"
              /> */}

              <ListItemButtonComponent
                getSelected={selectedIndex === 3}
                getOnClick={
                  ((event) => handleListItemClick(event, 3),
                  navigateToHistoryPage)
                }
                imgID="historyIcon"
                imgSrc="images/history.png"
              />

              <ListItemButtonComponent
                getSelected={selectedIndex === 4}
                getOnClick={
                  ((event) => handleListItemClick(event, 4), navigateSignInPage)
                }
                imgID="logoutIcon"
                imgSrc="images/logout.png"
              />
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
            <Container maxWidth="md" sx={{ ml: -1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: 790,
                      width: 850,
                      backgroundColor: "#252836",
                    }}
                  >
                    <Box sx={{ flexGrow: 1, ml: -1 }}>
                      <AppBar
                        elevation={0}
                        position="static"
                        sx={{ backgroundColor: "#252836" }}
                      >
                        <Toolbar>
                          <Button
                            onClick={navigateToPendingPage}
                            sx={{
                              ":hover": {
                                bgcolor: "#787589", // theme.palette.primary.main
                              },
                              color: "white",
                              backgroundColor: "#504C64",
                              ml: -1,
                              mt: 5,
                              mr: 2,
                              width: 10,
                              borderRadius: 2,
                              fontFamily: "Barlow Condensed",
                              fontSize: "17px",
                            }}
                            style={{
                              maxWidth: "30px",
                              maxHeight: "30px",
                              minWidth: "80px",
                              minHeight: "40px",
                            }}
                            size="small"
                          >
                            Back
                          </Button>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                              flexGrow: 1,
                              display: { xs: "none", sm: "block" },
                              fontFamily: "Barlow Condensed",
                              fontSize: "30px",
                              mt: 1,
                            }}
                          >
                            Order Summary
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", sm: "block" },
                          fontFamily: "Barlow Condensed",
                          fontSize: "25px",
                          mt: -3,
                          ml: 14,
                        }}
                      >
                        Order #0001
                      </Typography>
                      <Typography
                        sx={{
                          ml: 5,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: 3,
                        }}
                      >
                        ITEM NAME
                      </Typography>

                      <Typography
                        sx={{
                          ml: 63.5,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: -3.2,
                        }}
                      >
                        PRICE
                      </Typography>

                      <Typography
                        sx={{
                          ml: 81,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: -3.2,
                        }}
                      >
                        QTY
                      </Typography>

                      <Typography
                        sx={{
                          ml: 100,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: -3.2,
                        }}
                      >
                        TOTAL
                      </Typography>
                      <Typography sx={{ ml: 3, mt: -0.8, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - -
                      </Typography>

                      <Typography
                        class="orderSummaryItemStack"
                        sx={{ color: "white" }}
                      >
                        Salted Egg Chicken (Half)
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          fontSize: 19,
                          ml: 60,
                          mt: -6,
                        }}
                      >
                        Php 2000.00
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          fontSize: 19,
                          ml: 81.7,
                          mt: -3.7,
                        }}
                      >
                        2
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          ml: 94,
                          mt: -3.5,
                          fontSize: 19,
                        }}
                      >
                        Php 2000.00
                      </Typography>

                      <Typography sx={{ ml: 3, mt: 0, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - -
                      </Typography>

                      <Typography
                        sx={{
                          ml: 79,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: 2,
                        }}
                      >
                        Sub-total
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          ml: 94,
                          mt: -3.5,
                          fontSize: 19,
                        }}
                      >
                        Php 2000.00
                      </Typography>
                      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - -
                      </Typography>

                      <Typography
                        sx={{
                          ml: 69,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: 0,
                        }}
                      >
                        Discount (20% Applied)
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          ml: 93.2,
                          mt: -3.5,
                          fontSize: 19,
                        }}
                      >
                        -Php 2000.00
                      </Typography>
                      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - -
                      </Typography>

                      <Typography
                        sx={{
                          ml: 78.1,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                          mt: 0,
                        }}
                      >
                        Order Total
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Barlow Condensed",
                          ml: 94,
                          mt: -3.5,
                          fontSize: 19,
                        }}
                      >
                        Php 2000.00
                      </Typography>
                      <Typography sx={{ ml: 60, mt: 0, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - -
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 790,
                      width: 549,
                      marginLeft: 25,
                      backgroundColor: "#1F1D2B",
                    }}
                  >
                    <OrderSummarySidePage />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }




