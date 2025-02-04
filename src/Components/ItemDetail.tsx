import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import HeaderAndNavBar from "./HeaderAndNavBar";
import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../Tools/store";
import { productDetailsSelector } from "../Selectors/productsSelector";
import product from "../Assets/product.png";
import { getProductsDetails } from "../Thunks/productsThunk";
import { tabsLabels } from "../Constants";
import { addToCart } from "../Thunks/cartThunks";
import type { ItemDetailProps } from "../types/commonTypes";

const useStyles = makeStyles(() => ({
  root: { margin: "0 5%" },
  productPreview: {
    width: "5vw",
    height: "8vh",
    border: "2.5px solid #007184",
    borderRadius: "5px",
  },
  keepShopping: { display: "flex", marginTop: "1%" },
  keepShoppingTypography: {
    width: "20%",
    marginRight: "5% !important",
    fontSize: "1.7rem !important",
  },
  edit: { color: "#007184" },
  viewed: { margin: "0 1% 1% 1%" },
  itemDetails: {
    margin: "2% 0",
    "& .MuiButton-root": {
      backgroundColor: "#ffdc14",
      borderRadius: "25px",
      color: "black",
      textTransform: "capitalize",
      margin: "4% 0",
      padding: "2% 25%",
    },
  },
  prevViewedText: { fontWeight: "bold !important" },
  content: { display: "flex", margin: "1% 0 2% 0" },
  contentImg: { marginRight: "2%" },
  productImg: { width: "17vw" },
  stars: { color: "#575959 !important" },
  discountsBox: { display: "flex", gap: "7px", alignItems: "center" },
  deliveryDate: { margin: "5px" },
  discount: { fontSize: "2rem !important", color: "#cd1a39" },
  cost: { fontSize: "2rem !important" },
  tabs: {
    "& .MuiTab-root.Mui-selected": { color: "#007184" },
    "& .MuiTab-root": {
      fontWeight: "bold !important",
      textTransform: "capitalize !important",
      color: "black",
    },
    "& .MuiTabs-indicator": { backgroundColor: "#007184", height: "4px" },
  },
}));
const ItemDetail: FC<ItemDetailProps> = (props) => {
  const { productDetails, fetchItemDetails, addToCart } = props;
  const {
    category,
    productDescription,
    ratings,
    reviewsCount,
    discount,
    costPrice,
    sellingPrice,
  } = productDetails;
  const classes = useStyles();
  const { id = "" } = useParams();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetchItemDetails(id);
  }, [id]);

  const generateStars = (rating: number) => {
    const fullStars = "⭐".repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? "☆" : "";
    return `${fullStars}${halfStar}`;
  };

  const addCart = () => {
    const userName = sessionStorage.getItem("loggedinUser") || "";
    addToCart(userName, id);
  };

  return (
    <>
      <HeaderAndNavBar />
      <Box className={classes.root}>
        <Box className={classes.keepShopping}>
          <Typography className={classes.keepShoppingTypography}>
            Keep shopping for <b>{category}</b>
          </Typography>
          <Typography className={classes.edit} variant="subtitle1">
            Edit
          </Typography>
          <Box className={classes.viewed}>
            <img
              className={classes.productPreview}
              src={product}
              alt="product"
            />
            <Typography>1 Viewed</Typography>
          </Box>
        </Box>

        <Divider variant="middle" />

        <Box className={classes.content}>
          <Box className={classes.contentImg}>
            <Typography className={classes.prevViewedText}>
              Previously viewed
            </Typography>
            <img className={classes.productImg} src={product} alt="product" />
          </Box>
          <Box className={classes.itemDetails}>
            <Typography>{productDescription}</Typography>
            <Box className={classes.stars}>
              {generateStars(ratings)} {reviewsCount}
            </Box>
            <Typography className={classes.stars}>
              10K+ bought in past month
            </Typography>
            <Box className={classes.discountsBox}>
              <Typography className={classes.discount}>-{discount}%</Typography>
              <Typography className={classes.cost}>{sellingPrice}</Typography>
              <Box>{costPrice}</Box>
            </Box>
            <p className={classes.deliveryDate}>
              Get it by <b>Tomorrow, February 4</b>
            </p>
            <Typography>FREE Delivery by Amazon</Typography>
            <Button onClick={addCart}>Add to Cart</Button>
          </Box>
        </Box>

        <Divider />
        <Tabs
          className={classes.tabs}
          value={tabValue}
          onChange={(_e, value) => setTabValue(value)}
        >
          {tabsLabels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
        <Divider />
      </Box>
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  productDetails: productDetailsSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchItemDetails: (actions: string) => dispatch(getProductsDetails(actions)),
  addToCart: (userName: string, id: string) =>
    dispatch(addToCart(userName, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
