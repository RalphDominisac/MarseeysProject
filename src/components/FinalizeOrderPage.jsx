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
import OrderDetailsSidePage from "./OrderDetailsSidePage";
import DateTime from "./DateTime";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState, useEffect } from "react";
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
  useLocation,
} from "react-router-dom";

import ToolbarUpperRight from "./cssComponents/ToolbarUpperRight";
import ListItemButtonComponent from "./cssComponents/ListItemButtonComponent";
import ToolBarFinalizeOrderPageHeader from "./cssComponents/ToolBarFinalizeOrderPageHeader";
import FinalizeOrderPageHeaderLabels from "./cssComponents/FinalizeOrderPageHeaderLabels";





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


  export default function FinalizeOrderPage() {

     const location = useLocation();

      const data = location.state;

      const [orderRequest, setOrderRequest] = useState({
        contents: '',
        customer: '',
        tableNo: '',
        deliveryMethod: '',
        address: '', 
        phoneNo: '', 
        estimatedTime: '',
        discount: '',
      })

      const [orders, setOrders] = useState({});
      const [table, setTable] = useState('');

      
    useEffect(() => {
        let itemsMap = {}

        data.cartItems.map((item) => {
          itemsMap[item.id] = item.qty
        })

        setOrders(itemsMap)
        setOrderRequest({
          ...orderRequest, 
          contents: orders,
        })
    }, [])

    function handleTableClick(event, number) {
      if (number != null){
        setTable(number)
        setOrderRequest({
          ...orderRequest,
          tableNo: number,  
        })
      }
    }

    function handleDeliveryMethod(event, method) {
        setOrderRequest({
          ...orderRequest,
          deliveryMethod: method,  
        })
    }

    function handleAddress(event, address) {
        setOrderRequest({
          ...orderRequest,
          address: address,  
        })
    }
    
    function handlePhoneNo(event, contact) {
        setOrderRequest({
          ...orderRequest,
          phoneNo: contact,  
        })
    }

    function handleEstimatedTime(event, time) {
        setOrderRequest({
          ...orderRequest,
          estimatedTime: time,  
        })
    }

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

        // const navigateToDraftsPage = () => {
        //   navigate("/draftspage");
        // };

        const navigateToHistoryPage = () => {
          navigate("/historypage");
        };

        const navigateToDiscountsPage = () => {
          navigate("/discountspage");
        };


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
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      {/* SIDEBAR MENU AND HEADER(Area where time and date is located) */}
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
                ((event) => handleListItemClick(event, 2), navigateToDraftsPage)
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
                      <ToolBarFinalizeOrderPageHeader
                        getOrderNum="Order #0001"
                        getOrderType={data?.orderType}
                      />
                    </AppBar>

                    <FinalizeOrderPageHeaderLabels />

                    <Container
                      sx={{
                        width: 830,
                        height: 450,
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {data?.cartItems.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            fontFamily: "Barlow Condensed",
                            fontSize: "20px",
                            marginLeft: "-9px",
                            marginTop: "-18px",
                          }}
                        >
                          <p>{item.name}</p>

                          <p
                            style={{ marginLeft: "400px", marginTop: "-49px" }}
                          >
                            Php {Number(item.price).toFixed(2)}
                          </p>
                          <p
                            style={{ marginLeft: "572px", marginTop: "-50px" }}
                          >
                            {item.qty}
                          </p>
                          <p
                            style={{
                              marginLeft: "680px",
                              marginTop: "-50.4px",
                            }}
                          >
                            Php {(item.price * item.qty).toFixed(2)}
                          </p>
                          {/* Comment Field: */}
                          {/* <TextField
                          disabled={true}
                          className="inputRounded"
                          value={data?.orderComment}
                          variant="outlined"
                          size="small"
                          sx={{
                            ml: -0.5,
                            mt: -2,
                            width: 335,
                            "& .MuiInputBase-input.Mui-disabled": {
                              WebkitTextFillColor: "white",
                              WebkitBorderColor: "red",
                            },
                          }}
                        /> */}
                          <Typography sx={{ ml: -1, mt: -1, color: "#504C64" }}>
                            - - - - - - - - - - - - - - - - - - - - - - - - - -
                            - - - - - - - - - - - - - - - - - - - - - - - - - -
                            - - - - - - - - - - - - - - - - - - - - - -
                          </Typography>
                        </div>
                      ))}
                    </Container>

                    <div
                      style={{
                        fontFamily: "Barlow Condensed",
                        fontSize: "20px",
                        marginLeft: "582px",
                      }}
                    >
                      ORDER SUBTOTAL: Php {data?.totalPrice.toFixed(2)}
                    </div>
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
                  <OrderDetailsSidePage
                    subTotalPrice={data?.totalPrice.toFixed(2)}
                    orderTypeSet={data?.orderType}
                    handleTableClick={handleTableClick}
                    tableNumber={table}
                    handleDeliveryMethod={handleDeliveryMethod}
                    handleAddress={handleAddress}
                    handlePhoneNo={handlePhoneNo}
                    handleEstimatedTime={handleEstimatedTime}
                    orderRequest={orderRequest}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}




