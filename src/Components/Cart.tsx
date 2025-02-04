import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import HeaderAndNavBar from "./HeaderAndNavBar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, getCartData, removeFromCart } from "../Thunks/cartThunks";
import { cartSelectorData } from "../Selectors/cartSelector";
import type { RootState, AppDispatch } from "../Tools/store";
import type { CartDetails, CartProps } from "../types/commonTypes";
import creditcard from "../Assets/creditcard.svg";
import product from "../Assets/product.png";
import { actionIcons } from "../Constants";

const useStyles = makeStyles(() => ({
  bckg: { backgroundColor: "#ebecec" },
  root: { margin: "1% 1.5%" },
  card1: {
    display: "flex",
    justifyContent: "space-between",
    height: "7vh",
    marginBottom: "2%",
    "& .MuiButton-root": {
      border: ".5px solid black",
      borderRadius: "15px",
      height: "24px",
      alignSelf: "center",
      textTransform: "capitalize",
      color: "black",
      marginRight: "2vw",
    },
  },
  img: { width: "15%" },
  creditCardBox: {
    padding: "0 .5%",
    width: "2%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  creditcard: { width: "110%" },
  card1Typo: { alignSelf: "center !important" },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  quantitySelector: {
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    border: "2px solid #FFD700",
    padding: "0 8px",
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  actionIcons: {
    display: "flex",
    "& .MuiTypography-root": { color: "gray", fontSize: "2rem " },
    "& .MuiButton-root": { textTransform: "none" },
  },
  contentBox: { display: "flex", justifyContent: "space-between" },
  contentCard: { padding: "1% 2%" },
  cart: { display: "flex", justifyContent: "space-between" },
  shoppingCart: {
    marginBottom: "1%",
    ".MuiTypography-root": { fontSize: "2rem", fontWeight: "bold" },
    "& .MuiLink-root": { textDecoration: "none" },
  },
  price: { alignSelf: "end" },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1% 0 1% 2%",
  },
  itemImgAndDetails: {
    display: "flex",
    gap: "10px",
  },
  totalCost: {
    display: "flex",
    justifyContent: "end",
    marginBottom: "2%",
    "& .MuiTypography-root": { fontSize: "1.3rem" },
  },
  buyNowContainer: {
    padding: "16px",
    height: "20%",
    width: "19%",
    "& .MuiLinearProgress-root": {
      borderRadius: 5,
      height: "15px",
      backgroundColor: "#e0e0e0",
    },
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#2e7d32",
    },
    "& .MuiButton-root": {
      backgroundColor: "#ffdc14",
      borderRadius: "25px",
      color: "black",
      textTransform: "capitalize",
      margin: "4% 0",
      padding: "4px 8px",
      width: "100%",
    },
  },
  emiSection: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "16px",
  },
  subTotal: { fontSize: "1rem !important" },
}));

const Cart: FC<CartProps> = (props) => {
  const { fetchCartData, cartData, addCart, deleteFromCart } = props;
  const classes = useStyles();
  const userName = sessionStorage.getItem("loggedinUser") || "";

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (productId: number) => {
    setQuantity((prev) => prev + 1);
    addCart(userName, productId);
  };
  const decreaseQuantity = (productId: number) => {
    setQuantity((prev) => Math.max(1, prev - 1));
    deleteFromCart(userName, productId);
  };

  useEffect(() => {
    fetchCartData(userName);
  }, []);

  const renderProducts = ({
    quantity,
    productId,
    productName,
    sellingPrice,
    stockQuantity,
    stockStatus,
    productDescription,
    freeShipping,
  }: CartDetails) => (
    <>
      <Box className={classes.cartItem}>
        <Box className={classes.itemImgAndDetails}>
          <img className={classes.img} src={product} alt="product" />
          <Box>
            <Typography>{productName + " " + productDescription}</Typography>
            <Typography variant="subtitle1">{stockStatus}</Typography>
            <Typography variant="subtitle1">
              {(freeShipping === "No" && "Not ") + "Eligible for Free Shipping"}
            </Typography>
            <Typography>
              <b>Color:</b> green
            </Typography>

            <Box className={classes.container}>
              <Box className={classes.quantitySelector}>
                <IconButton size="small">
                  {quantity === 1 ? (
                    <DeleteIcon onClick={() => decreaseQuantity(productId)} />
                  ) : (
                    <RemoveIcon />
                  )}
                </IconButton>
                <Typography variant="body1" fontWeight="bold" mx={1}>
                  {quantity}
                </Typography>
                <IconButton
                  onClick={() => increaseQuantity(productId)}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
              </Box>

              <Box className={classes.actionButtons}>
                {actionIcons.map((label, index) => (
                  <Box key={index} className={classes.actionIcons}>
                    <Typography>|</Typography>
                    <Button>{label}</Button>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography fontWeight="bold">{sellingPrice}</Typography>
      </Box>
      <Divider />
    </>
  );

  return (
    <Box className={classes.bckg}>
      <HeaderAndNavBar />
      <Box className={classes.root}>
        <Card className={classes.card1}>
          <Box className={classes.creditCardBox}>
            <img
              className={classes.creditcard}
              src={creditcard}
              alt="creditcard"
            />
          </Box>
          <Typography className={classes.card1Typo}>
            Get <b>3% back (Rs.44.97)</b> + rewards worth{" "}
            <b>₹2,000 + ₹500 off on Prime membership.</b>
          </Typography>
          <Button>Apply Now</Button>
        </Card>
        <Box className={classes.contentBox}>
          <Card className={classes.contentCard}>
            <Box className={classes.cart}>
              <Box className={classes.shoppingCart}>
                <Typography fontSize="1.7rem">Shopping Cart</Typography>
                <Link>Deselect all items</Link>
              </Box>
              <Typography className={classes.price}>Price</Typography>
            </Box>
            <Divider />
            {cartData.map((el) => renderProducts(el))}
            <Box className={classes.totalCost}>
              <Typography>Subtotal ({cartData.length} items):</Typography>
              <Typography fontWeight="bold">
                ₹
                {cartData.reduce(
                  (total, { sellingPrice }) => total + Number(sellingPrice),
                  0
                )}
              </Typography>
            </Box>
          </Card>

          <Card className={classes.buyNowContainer}>
            <Typography variant="body2" fontWeight="bold">
              ₹499
            </Typography>
            <LinearProgress variant="determinate" value={60} />

            <Typography variant="body2" color="green" fontWeight="bold" mt={1}>
              ✅ Your order is eligible for{" "}
              <span style={{ color: "#0073E6" }}>FREE Delivery.</span>
            </Typography>
            <Typography variant="caption" color="gray">
              Choose <span style={{ color: "#0073E6" }}>FREE Delivery</span>{" "}
              option at checkout.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              className={classes.subTotal}
            >
              Subtotal (1 item): ₹
              {cartData.reduce(
                (total, { sellingPrice }) => total + Number(sellingPrice),
                0
              )}
            </Typography>

            <Grid container alignItems="center">
              <Checkbox />
              <Typography variant="body2">
                This order contains a gift
              </Typography>
            </Grid>

            <Button>Proceed to Buy</Button>

            <Accordion className={classes.emiSection}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">EMI Available</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  EMI options will be available at checkout based on your
                  payment method.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartData: cartSelectorData(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCartData: (userName: string) => dispatch(getCartData(userName)),
  addCart: (userName: string, id: string | number) =>
    dispatch(addToCart(userName, id)),
  deleteFromCart: (userName: string, id: string | number) =>
    dispatch(removeFromCart(userName, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
