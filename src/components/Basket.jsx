import { Divider } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ModalRemoveItem from "./ModalRemoveItem";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;

    //ModalRemoveItem State
    const [modalOpenRemoveItem, setModalOpenRemoveItem] = useState(false);

  return (
    <div>
      <div>{cartItems.length === 0 && <div>Order Cart is Empty</div>}</div>

      {cartItems.map((item) => (
        <div key={item.id}>
          <Typography
            sx={{
              ml: -0.1,
              color: "white",
              fontSize: 20,
              fontFamily: "Barlow Condensed",
              textAlign: "left",
              mt: -1,
            }}
          >
            {item.name}
          </Typography>

          <Button
            onClick={() => onRemove(item)}
            sx={{
              ":hover": {
                bgcolor: "#D33131", // theme.palette.primary.main
              },
              color: "white",
              backgroundColor: "#9E3F3F",
              ml: 32,
              mt: -3,
              width: 3,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "50px",
            }}
            size="small"
          >
            <RemoveIcon />
          </Button>

          <h1 className="counterResult">{item.qty}</h1>

          <Button
            onClick={() => onAdd(item)}
            sx={{
              ":hover": {
                bgcolor: "#55CE6B", // theme.palette.primary.main
              },
              color: "white",
              backgroundColor: "#5D9B68",
              ml: 41.7,
              mt: -14.9,
              width: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "50px",
            }}
            size="small"
          >
            <AddIcon />
          </Button>

          <Typography> Php {item.price.toFixed(2)}</Typography>

          <TextField
            className="inputRounded"
            placeholder="Order Comments"
            variant="outlined"
            size="small"
            sx={{ ml: -0.5, width: 335 }}
          />

          <Button
            onClick={() => {
              setModalOpenRemoveItem(true);
            }}
            sx={{
              ":hover": {
                bgcolor: "#D33131", // theme.palette.primary.main
              },
              color: "white",
              backgroundColor: "#9E3F3F",
              ml: 45,
              mt: -8.2,
              width: 10,
              borderRadius: 5,
              fontFamily: "Barlow Condensed",
              fontSize: "17px",
            }}
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "115px",
              minHeight: "40px",
            }}
            size="small"
          >
            Remove Item
          </Button>
          {modalOpenRemoveItem && (
            <ModalRemoveItem setOpenModalRemoveItem={setModalOpenRemoveItem} />
          )}

          <Typography sx={{ mt: -2, color: "#504C64" }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - -
          </Typography>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <div>
            <Typography class="initialPriceTag">
              Php {itemsPrice.toFixed(2)}
            </Typography>
          </div>

          <div>
            <div>
              <Typography
                sx={{
                  ml: 3,
                  mt: 1,
                  color: "white",
                  fontFamily: "Barlow Condensed",
                  fontSize: "18px",
                }}
              >
                Sub Total:
              </Typography>

              <Typography
                sx={{
                  ml: 20,
                  mt: -3.2,
                  color: "white",
                  fontFamily: "Barlow Condensed",
                  fontSize: "18px",
                }}
              >
                Php {totalPrice.toFixed(2)}
              </Typography>
            </div>
          </div>
        </>
      )}
    </div>
  );
}



//  <Container
//    sx={{
//      width: 530,
//      height: 450,
//      overflow: "hidden",
//      overflowY: "scroll",
//    }}
//  >
//    <Typography sx={{ mt: -1, ml: -1, mb: 1.8, color: "#504C64" }}>
//      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//      - - - - - - - - -
//    </Typography>

  

//    <Typography
//      sx={{
//        ml: -0.1,
//        color: "white",
//        fontSize: 20,
//        fontFamily: "Barlow Condensed",
//        textAlign: "left",
//        mt: -1,
//      }}
//    >
//      {props.menuItemName}
//    </Typography>

//    <DecreIncreCounter />

//    <Typography class="initialPriceTag">"add calculation""</Typography>

//    <Typography> {props.menuItemPrice}</Typography>

//    <TextField
//      className="inputRounded"
//      placeholder="Order Comments"
//      variant="outlined"
//      size="small"
//      sx={{ ml: -0.5, width: 335 }}
//    />

//    <Button
//      onClick={() => {
//        setModalOpenRemoveItem(true);
//      }}
//      sx={{
//        ":hover": {
//          bgcolor: "#D33131", // theme.palette.primary.main
//        },
//        color: "white",
//        backgroundColor: "#9E3F3F",
//        ml: 45,
//        mt: -8.2,
//        width: 10,
//        borderRadius: 5,
//        fontFamily: "Barlow Condensed",
//        fontSize: "17px",
//      }}
//      style={{
//        maxWidth: "30px",
//        maxHeight: "30px",
//        minWidth: "115px",
//        minHeight: "40px",
//      }}
//      size="small"
//    >
//      Remove Item
//    </Button>
//    {modalOpenRemoveItem && (
//      <ModalRemoveItem setOpenModalRemoveItem={setModalOpenRemoveItem} />
//    )}

//    <Typography sx={{ mt: -2, color: "#504C64" }}>
//      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//      - - - - - - - -
//    </Typography>
//  </Container>




 