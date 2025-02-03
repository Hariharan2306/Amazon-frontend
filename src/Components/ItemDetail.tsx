import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import HeaderAndNavBar from "./HeaderAndNavBar";
import { Box, Divider, Typography } from "@mui/material";
import { RootState } from "../Tools/store";
import { productDetailsSelector } from "../Selectors/productsSelector";
import type { ItemDetailProps } from "../types/commonTypes";
import product from "../Assets/product.png";

const useStyles = makeStyles(() => ({}));
const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  const { productDetails } = props;
  const { category } = productDetails;
  const classes = useStyles();
  return (
    <>
      <HeaderAndNavBar />
      <Box>
        <Box>
          <Typography>Keep shopping for{category}</Typography>
          <Typography variant="subtitle1">Edit</Typography>
          <Box>
            <img src={product} alt="product" />
            <Typography>1 Viewed</Typography>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  productDetails: productDetailsSelector(state),
});
export default connect(mapStateToProps, null)(ItemDetail);
