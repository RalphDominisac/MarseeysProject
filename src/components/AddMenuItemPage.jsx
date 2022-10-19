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
// import CustomerListSidePage from "./CustomerListSidePage";
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
} from "react-router-dom";
import ToolbarUpperRight from "./cssComponents/ToolbarUpperRight";
import ListItemButtonComponent from "./cssComponents/ListItemButtonComponent";
import ToolBarHistoryPageHeader from "./cssComponents/ToolBarHistoryPageHeader";
import HistoryPageHeaderLabels from "./cssComponents/HistoryPageHeaderLabels";
import HistoryPageBody from "./cssComponents/HistoryPageBody";
import ToolBarAddMenuItemPageHeader from "./cssComponents/ToolBarAddMenuItemPageHeader";
import axiosInstance from "../helpers/axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DecrementIncrementCounter from "./DecrementIncrementCounter";
import DecrementIncrementIngredients from "./DecrementIncrementIngredients";
import ModalConfirmMenu from "./modals/ModalConfirmMenu";
import ModalWarningMenu from "./modals/ModalWarningMenu";

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

export default function AddMenuItemPage() {
  const [ingredientsCart, setIngredientsCart] = useState([]);

  // -------------Add and Remove product functionality------------------------------------------
  const onAdd = (ingredient) => {
    const exist = ingredientsCart.find((x) => x.id === ingredient.id);
    if (exist) {
      setIngredientsCart(
        ingredientsCart.map((x) =>
          x.id === ingredient.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setIngredientsCart([...ingredientsCart, { ...ingredient, qty: 1 }]);
    }
  };

  const onRemove = (ingredient) => {
    const exist = ingredientsCart.find((x) => x.id === ingredient.id);
    if (exist.qty === 1) {
      setIngredientsCart(ingredientsCart.filter((x) => x.id !== ingredient.id));
    } else {
      setIngredientsCart(
        ingredientsCart.map((x) =>
          x.id === ingredient.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [ingredients, setIngredients] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [menuIngredient, setMenuIngredient] = React.useState("");

  useEffect(() => {
    if (ingredients.length === 0) {
      axiosInstance
        .get("/ingredient")
        .then((response) => {
          setIngredients(response.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }

    if (categories.length === 0) {
      axiosInstance
        .get("/menu/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, []);

  const handleChangeIngredient = (event) => {
    setMenuIngredient(event.target.value);
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

  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [menuRequest, setMenuRequest] = useState({
    category: "",
    ingredients: "",
    name: "",
    price: "",
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  const createNewMenu = () => {
    let ingredientsMap = {};

    ingredientsCart.map((ingredient) => {
      ingredientsMap[ingredient.id] = ingredient.qty;
    });

    if (
      itemCategory === "" ||
      ingredientsCart.length === 0 ||
      itemName === "" ||
      itemPrice === ""
    ) {
       setShowWarningModal(true);
    } else {
       setMenuRequest({
         category: itemCategory,
         ingredients: ingredientsMap,
         name: itemName,
         price: itemPrice,
       });
       setShowConfirmModal(true);
    }
  };

  const confirmNewMenu = () => {
    axiosInstance
      .post("/menu/add", menuRequest)
      .then((response) => {
        // setMenuRequest({
        //   category: '',
        //   ingredients: '',
        //   name: '',
        //   price: '',
        // })
        // setShowConfirmModal(false)
        navigate("/homeorderpage");
      })
      .catch((error) => {
        console.log("Error: ", error);
        console.log(menuRequest);
      });
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
                      <ToolBarAddMenuItemPageHeader />
                    </AppBar>

                    {/* <HistoryPageHeaderLabels /> */}
                    {/* <HistoryPageBody /> */}

                    <div>
                      <TextField
                        onChange={(g1) => setItemName(g1.target.value)}
                        className="inputRounded"
                        placeholder="Item Name"
                        variant="outlined"
                        size="small"
                        sx={{ mt: 5 }}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      {/* <TextField
                          onChange={(g2) => setItemPrice(g2.target.value)}
                          className="inputRounded"
                          placeholder="Item Category"
                          variant="outlined"
                          size="small"
                          sx={{ mt: 5 }}
                        /> */}
                      <FormControl
                        sx={{
                          m: 1,
                          width: 200,
                          backgroundColor: "#252836",
                          borderRadius: 3,
                          ml: 1,
                          height: 42,
                          mt: 5,
                        }}
                      >
                        <Select
                          //value={menuIngredient}
                          // onChange={handleChangeIngredient}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            "&:hover": {
                              "&& fieldset": {
                                border: "1px solid white",
                              },
                            },

                            // more accurate dropdown effect
                            // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

                            borderRadius: 3,
                            width: 200,
                            height: 42,
                            fontFamily: "Barlow Condensed",
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                "& .MuiMenuItem-root.Mui-selected": {
                                  backgroundColor: "#3F4351",
                                },
                                "& .MuiMenuItem-root:hover": {
                                  backgroundColor: "#3F4351",
                                },
                                "& .MuiMenuItem-root.Mui-selected:hover": {
                                  backgroundColor: "#3F4351",
                                },
                                backgroundColor: "#252836",
                              },
                            },
                          }}
                          defaultValue=""
                          required
                          onChange={(event) =>
                            setItemCategory(event.target.value)
                          }
                        >
                          {categories.map((category) => (
                            <MenuItem key={category.id} value={category.name}>
                              {category.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div>
                      <TextField
                        onChange={(g3) => setItemPrice(g3.target.value)}
                        className="inputRounded"
                        placeholder="Item Price"
                        variant="outlined"
                        size="small"
                        sx={{ mt: 5 }}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <FormControl
                        sx={{
                          m: 1,
                          width: 200,
                          backgroundColor: "#252836",
                          borderRadius: 3,
                          ml: 1,
                          height: 42,
                          mt: 5,
                        }}
                      >
                        <Select
                          value={menuIngredient}
                          onChange={handleChangeIngredient}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            "&:hover": {
                              "&& fieldset": {
                                border: "1px solid white",
                              },
                            },

                            // more accurate dropdown effect
                            // https://codesandbox.io/s/69436218-how-to-change-dropdown-hover-color-react-material-ui-select-dvkep?file=/demo.js:0-1480

                            borderRadius: 3,
                            width: 200,
                            height: 42,
                            fontFamily: "Barlow Condensed",
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                "& .MuiMenuItem-root.Mui-selected": {
                                  backgroundColor: "#3F4351",
                                },
                                "& .MuiMenuItem-root:hover": {
                                  backgroundColor: "#3F4351",
                                },
                                "& .MuiMenuItem-root.Mui-selected:hover": {
                                  backgroundColor: "#3F4351",
                                },
                                backgroundColor: "#252836",
                              },
                            },
                          }}
                        >
                          {ingredients.map((ingredient) => (
                            <MenuItem key={ingredient.id} value={ingredient}>
                              {ingredient.name}
                            </MenuItem>
                          ))}
                        </Select>

                        <button
                          onClick={() => onAdd(menuIngredient)}
                          style={{ marginLeft: "50px", marginTop: "15px" }}
                        >
                          Add
                        </button>
                      </FormControl>

                      {/* DISPLAY HERE SELECTED INGREDIENTS, QTY, AND UNIT MEASURE */}
                      <div>
                        {ingredientsCart.length === 0 ? (
                          <div style={{ marginTop: -280, marginLeft: 300 }}>
                            Ingredients are Empty
                          </div>
                        ) : (
                          ingredientsCart.map((ingredient) => (
                            <div key={ingredient.id}>
                              <Typography
                                sx={{
                                  color: "white",
                                  fontSize: 20,
                                  fontFamily: "Barlow Condensed",
                                  mt: 1,
                                  ml: 45,
                                  width: 50,
                                }}
                              >
                                {ingredient.name}
                              </Typography>

                              <DecrementIncrementIngredients
                                onClickRemoveFunctionCounter={() =>
                                  onRemove(ingredient)
                                }
                                onClickAddFunctionCounter={() =>
                                  onAdd(ingredient)
                                }
                                itemQtyCounter={ingredient.qty}
                                itemUnit={ingredient.unitMeasure}
                              />
                            </div>
                            
                          ))
                        )}
                      </div>
                    </div>

                    <button
                      onClick={createNewMenu}
                      style={{ marginLeft: "25em" }}
                    >
                      Submit
                    </button>
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
                ></Paper>
              </Grid>
            </Grid>

            {/* CURRENTLY DOESN'T SHOW MODAL IF FIELDS ARE INCOMPLETE, SHOWS ONLY IF INPUT FIELDS ARE ALL BLANK, FIX CONDITIONALS of the fields? */}
            {showWarningModal && (
              <ModalWarningMenu
                // sendDataBBQ={sendDataBBQ}
                setOpenModalWarningMenu={setShowWarningModal}
              />
            )}

            {/* SHOWS WHEN FIELDS ARE COMPLETE, SHOWS ALSO IF FIELDS ARE INCOMPLETE */}
            {showConfirmModal && (
              <ModalConfirmMenu
                // sendDataBBQ={sendDataBBQ}
                setOpenModalConfirmMenu={setShowConfirmModal}
                pushFunctionality={confirmNewMenu}
              />
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
