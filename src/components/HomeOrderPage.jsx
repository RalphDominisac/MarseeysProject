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
import BeefButtons from "./categoryButtons/BeefButtons(none)";
import BilaoButtons from "./categoryButtons/BilaoButtons";
import ChickenButtons from "./categoryButtons/ChickenButtons";
import DessertsButtons from "./categoryButtons/DessertsButtons(none)";
import DrinksButtons from "./categoryButtons/DrinksButtons";

import FoodTraysButtons from "./categoryButtons/FoodTraysButtons(recheck)";
import FamilyAndPartyButtons from "./categoryButtons/FamilyAndPartyButtons";

import HandaanButtons from "./categoryButtons/HandaanButtons(recheck)";
import NoodlesButtons from "./categoryButtons/NoodlesButtons";
import PicapicaButtons from "./categoryButtons/PicapicaButtons";
import PlattersButtons from "./categoryButtons/PlattersButtons";
import PorkButtons from "./categoryButtons/PorkButtons";

import RiceButtons from "./categoryButtons/RiceButtons";
import SeafoodButtons from "./categoryButtons/SeafoodButtons";
import SizzlingButtons from "./categoryButtons/SizzlingButtons";
import SoloMealsButtons from "./categoryButtons/SoloMealsButtons";
import SoupButtons from "./categoryButtons/SoupButtons";
import VegetablesButtons from "./categoryButtons/VegetablesButtons(recheck)";

// import OnHoverScrollContainer from "./CustomScrollDiv";

import data from "./data/data";















const drawerWidth = 120; 

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 14,
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

    //  const categories2 = [
    //    "Food Trays",
    //    "Handaan",
    //    "Noodles",
    //    "Pica-pica",
    //    "Platters",
    //    "Pork"
    //  ];

    //  const [myCategory2, setMyCategory2] = useState("");

    //  const categories3 = [
    //    "Rice",
    //    "Seafood",
    //    "Sizzling",
    //    "Solo Meals",
    //    "Soup",
    //    "Vegetables"
    //  ];

    //  const [myCategory3, setMyCategory3] = useState("");

    // const [showtab, setShowtab] = React.useState(1);
    // const handletab = (e) => {
    //   setShowtab(e);
    // }

    // const [show, setShow] = useState(false);

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

          {/* <DrawerLeftMenu/> */}

          <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
              sx: {
                backgroundColor: "#252836",
              },
            }}
          >
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
                onClick={
                  ((event) => handleListItemClick(event, 0),
                  navigateToHomeOrderPage)
                }
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
                onClick={
                  ((event) => handleListItemClick(event, 1),
                  navigateToPendingPage)
                }
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
                onClick={
                  ((event) => handleListItemClick(event, 2),
                  navigateToDraftsPage)
                }
              >
                <ListItemIcon></ListItemIcon>
                <img id="draftIcon" src="images/draft.png" alt="Draft Icon" />
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
                onClick={
                  ((event) => handleListItemClick(event, 3),
                  navigateToHistoryPage)
                }
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
                onClick={
                  ((event) => handleListItemClick(event, 4),
                  navigateToDiscountsPage)
                }
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
                onClick={
                  ((event) => handleListItemClick(event, 6), navigateSignInPage)
                }
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
            {/* <Toolbar /> */}
            {/* <Container maxWidth="md" sx={{ mt: 1, mb: 1, ml: 0 }}> */}
            <Container maxWidth="md" sx={{ ml: -1 }}>
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
                      <Typography sx={{ ml: 3, mt: -3, color: "#504C64" }}>
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - -
                      </Typography>
                      {/* <Button
                        className="openModalBtn"
                        onClick={() => {
                          setModalOpen(true);
                        }}
                        variant="contained"
                        sx={{
                          "&:hover": {
                            // backgroundColor: "#02A7DD",
                            backgroundColor: "#FFB644",
                          },
                          mt: -8,
                          ml: 44,
                          width: 155,
                          height: 30,
                          backgroundColor: "#F2A42A",
                          borderRadius: 3,
                          fontFamily: "Barlow Condensed",
                          fontSize: "17px",
                        }}
                      >
                        Save to Draft
                      </Button>
                      {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
                      {/* <CategoryButtons /> */}

                      {/*     const categories = [
    "BBQ", 
    "Beef",
    "Bilao", 
    "Chicken", 
    "Desserts",
    "Drinks"
    ]; */}

                      {/* <Stack spacing={0} direction="row"></Stack> */}
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
                        {myCategory === "Beef" && <BeefButtons />}
                        {myCategory === "Bilao" && <BilaoButtons />}
                        {myCategory === "Chicken" && (
                          <ChickenButtons onSelected={setChickenFood} />
                        )}
                        {myCategory === "Desserts" && <DessertsButtons />}
                        {myCategory === "Drinks" && <DrinksButtons />}
                        {/* {myCategory === "Food Trays" && <FoodTraysButtons />} */}
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

                        {/* {chickenFood && (
                          <pre>{JSON.stringify(chickenFood, null, 2)}</pre>
                        )} */}
                      </div>

                      {/* ------------------------------------------------------------------------------------------------- */}
                      {/* <Stack spacing={0} direction="row">
                      
                          <ButtonCategoryStyle  
                            title="BBQ"       
                          />
                      
                        <ButtonCategoryStyle
                          title="Beef"
                        />
                        <ButtonCategoryStyle
                          title="Bilao"
                     
                        />
                        <ButtonCategoryStyle title="Chicken" />
                        <ButtonCategoryStyle title="Desserts" />
                        <ButtonCategoryStyle
                          title="Drinks"           
                        />
                      </Stack>
                      <Stack spacing={0} direction="row">
                        <ButtonCategoryStyle title="Food Trays" />
                        <ButtonCategoryStyle title="Handaan" />
                        <ButtonCategoryStyle title="Noodles" />
                        <ButtonCategoryStyle title="Pica-pica" />
                        <ButtonCategoryStyle title="Platters" />
                        <ButtonCategoryStyle title="Pork" />
                      </Stack>
                      <Stack spacing={0} direction="row" sx={{ mb: 6 }}>
                        <ButtonCategoryStyle title="Rice" />
                        <ButtonCategoryStyle title="Seafood" />
                        <ButtonCategoryStyle title="Sizzling" />
                        <ButtonCategoryStyle title="Solo Meals" />
                        <ButtonCategoryStyle title="Soup" />
                        <ButtonCategoryStyle title="Vegetables" />
                      </Stack> */}
                      {/* ------------------------------------------------------------------------------------------------------------------------ */}

                      {/* <div className={showtab === 1}>
                        <BBQButtons />
                      </div>

                      <div>
                        {showtab === 2 ? <BilaoButtons /> : " "}
                        
                      </div> */}

                      {/* <div className={showtab === 3}>
                        <DrinksButtons />
                      </div>

                      <div className={showtab === 4}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 5}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 6}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 7}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 8}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 9}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 10}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 11}>
                        <BBQButtons />
                      </div>

                      <div className={showtab === 12}>
                        <BBQButtons />
                      </div> */}

                      {/* {showtab === 2 && <BilaoButtons />}
                      {showtab === 3 && <DrinksButtons />}
                      {showtab === 4 && <NoodlesButtons />}
                      {showtab === 5 && <PicapicaButtons />}
                      {showtab === 6 && <PlattersButtons />}
                      {showtab === 7 && <PorkButtons />}
                      {showtab === 8 && <RiceButtons />}
                      {showtab === 9 && <SeafoodButtons />}
                      {showtab === 10 && <SizzlingButtons />}
                      {showtab === 11 && <SoloMealsButtons />}
                      {showtab === 12 && <SoupButtons />} */}

                      {/* -------------------------------------------------------- */}
                      {/*<BBQButtons /> */}
                      {/*<BilaoButtons /> */}
                      {/* <DrinksButtons /> */}
                      {/* <NoodlesButtons/> */}
                      {/* <PicapicaButtons /> */}
                      {/* <PlattersButtons /> */}
                      {/* <PorkButtons /> */}
                      {/* <RiceButtons /> */}
                      {/* <SeafoodButtons /> */}
                      {/* <SizzlingButtons /> */}
                      {/* <SoloMealsButtons /> */}
                      {/* <SoupButtons /> */}
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
                    <OrderSidePage
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartItems={cartItems}
                      // menuItemName={
                      //   chickenFood && (
                      //     <Typography
                      //       sx={{
                      //         ml: -0.1,
                      //         color: "white",
                      //         fontSize: 20,
                      //         fontFamily: "Barlow Condensed",
                      //         textAlign: "left",
                      //         mt: -1,
                      //       }}
                      //     >
                      //       {JSON.stringify(
                      //         chickenFood.title,
                      //         null,
                      //         1
                      //       ).replaceAll('"', "")}
                      //     </Typography>
                      //   )
                      // }
                      // menuItemPrice={
                      //   chickenFood && (
                      //     <Typography class="menuPriceTag">
                      //       Php{" "}
                      //       {JSON.stringify(
                      //         chickenFood.price,
                      //         null,
                      //         1
                      //       ).replaceAll('"', "")}
                      //     </Typography>
                      //   )
                      // }
                    />
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
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

