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
import OrderSummarySidePage from "./OrderSummarySidePage-------";
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


const drawerWidth = 120;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: 14,
//   backgroundColor: "white",
//   color: "black",
//   "&:hover": {
//     backgroundColor: "white",
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "20ch",
//       "&:focus": {
//         width: "25ch",
//       },
//     },
//   },
// }));

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
  export default function PaymentOrderPage() {
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
                <ListItemIcon></ListItemIcon>

                <img
                  id="orderIcon"
                  src="images/ordericon.png"
                  alt="Order Icon"
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
                <ListItemIcon></ListItemIcon>
                <img
                  id="pendingIcon"
                  src="images/pending.png"
                  alt="Pending Icon"
               
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
                <ListItemIcon></ListItemIcon>
                <img
                  id="draftIcon"
                  src="images/draft.png"
                  alt="Draft Icon"
             
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
                <ListItemIcon></ListItemIcon>
                <img
                  id="historyIcon"
                  src="images/history.png"
                  alt="History Icon"
                
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
                <ListItemIcon></ListItemIcon>
                <img
                  id="discountsIcon"
                  src="images/discounts.png"
                  alt="discounts Icon"
           
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
                <ListItemIcon></ListItemIcon>
                <img
                  id="logoutIcon"
                  src="images/logout.png"
                  alt="logout Icon"
               
                />
              </ListItemButton>
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
                {/* Recent Deposits */}
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




