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
import Stack from "@mui/material/Stack";
import ButtonCategoryStyle from "./ButtonCategoryStyle";
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
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// import Modal from "./Modal";

import BBQButtons from "./categoryButtons/BBQButtons";
// import BeefButtons from "./categoryButtons/BeefButtons(none)";
import BilaoButtons from "./categoryButtons/BilaoButtons";
import ChickenButtons from "./categoryButtons/ChickenButtons";
// import DessertsButtons from "./categoryButtons/DessertsButtons(none)";
import DrinksButtons from "./categoryButtons/DrinksButtons";
import FoodTraysButtons from "./categoryButtons/FoodTraysButtons";
import FamilyAndPartyButtons from "./categoryButtons/FamilyAndPartyButtons";
import HandaanButtons from "./categoryButtons/HandaanButtons";
import NoodlesButtons from "./categoryButtons/NoodlesButtons";
import PicapicaButtons from "./categoryButtons/PicapicaButtons";
import PlattersButtons from "./categoryButtons/PlattersButtons";
import PorkButtons from "./categoryButtons/PorkButtons";
import RiceButtons from "./categoryButtons/RiceButtons";
import SeafoodButtons from "./categoryButtons/SeafoodButtons";
import SizzlingButtons from "./categoryButtons/SizzlingButtons";
import SoloMealsButtons from "./categoryButtons/SoloMealsButtons";
import SoupButtons from "./categoryButtons/SoupButtons";
import VegetablesButtons from "./categoryButtons/VegetablesButtons";
// import OnHoverScrollContainer from "./CustomScrollDiv";
import data from "./data/data";

import ToolbarUpperRight from "./cssComponents/ToolbarUpperRight";
import ListItemButtonComponent from "./cssComponents/ListItemButtonComponent";
import ToolBarHomerOrderPageHeader from "./cssComponents/ToolBarHomerOrderPageHeader";
// import FinalizeOrderPageHeaderLabels from "./cssComponents/FinalizeOrderPageHeaderLabels";


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


  export default function HomeOrderPage() {
    const { productsBBQ } = data;
    const [cartItems, setCartItems] = useState([]);

    // -------------Add and Remove product functionality------------------------------------------
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };

    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    // -------------------------------------------------------------------------------------------


    

    const [chickenFood, setChickenFood] = useState(null);

    // Update the prices for each menu items (Sept 7 2022 received new menu pics)
    const categories = [
      "BBQ",
      "Bilao",
      "Chicken",
      "Drinks",
      "Food Trays",
      "Noodles",
      "Pica-pica",
      "Platters",
      "Pork",
      "Rice",
      "Seafood",
      "Sizzling",
      "Solo Meals",
      "Soup",
      "Vegetables",
    ];

    const [myCategory, setMyCategory] = useState("");

    
    // Routing/Navigation
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

    // Show Buttons CATEGORY if clicked
    const showBBQButtons = () => {
      <BBQButtons />;
    };

    // For left side button pages (events)
    const [selectedIndex, setSelectedIndex] = React.useState("");
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    // For button categories
    const [selectedIndex2, setSelectedIndex2] = React.useState("");
    const handleListItemClick2 = (event2, index2) => {
      setSelectedIndex2(index2);
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

            <ToolbarUpperRight />
            <Divider />

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
                        <ToolBarHomerOrderPageHeader />
                      </AppBar>
                      <Typography sx={{ ml: 3, mt: -3, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - -
                      </Typography>

                     

                      <div style={{ marginBottom: "48px" }}>
                        {categories.map((category) => (
                          <ButtonCategoryStyle
                            title={category}
                            key={category}
                            onClick={() => setMyCategory(category)}
                          />
                        ))}
                      </div>

                      <div>
                        {myCategory === "BBQ" && (
                          <BBQButtons onAdd={onAdd} productsBBQ={productsBBQ} />
                        )}
                        {myCategory === "Bilao" && <BilaoButtons />}
                        {myCategory === "Chicken" && (
                          <ChickenButtons onSelected={setChickenFood} />
                        )}
                        {myCategory === "Drinks" && <DrinksButtons />}
                        {myCategory === "Food Trays" && (
                          <FamilyAndPartyButtons />
                        )}
                        {myCategory === "Handaan" && <HandaanButtons />}
                        {myCategory === "Noodles" && <NoodlesButtons />}
                        {myCategory === "Pica-pica" && <PicapicaButtons />}
                        {myCategory === "Platters" && <PlattersButtons />}
                        {myCategory === "Pork" && <PorkButtons />}
                        {myCategory === "Rice" && <RiceButtons />}
                        {myCategory === "Seafood" && <SeafoodButtons />}
                        {myCategory === "Sizzling" && <SizzlingButtons />}
                        {myCategory === "Solo Meals" && <SoloMealsButtons />}
                        {myCategory === "Soup" && <SoupButtons />}
                        {myCategory === "Vegetables" && <VegetablesButtons />}

                     
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
                    <OrderSidePage
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartItems={cartItems}
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

