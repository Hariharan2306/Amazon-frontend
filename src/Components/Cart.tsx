import { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import HeaderAndNavBar from "./HeaderAndNavBar";
import { Box } from "@mui/material";
import { getCartData } from "../Thunks/cartThunks";
import { cartSelectorData } from "../Selectors/cartSelector";
import type { RootState, AppDispatch } from "../Tools/store";
import type { CartProps } from "../types/commonTypes";

const useStyles = makeStyles(() => ({}));

const Cart: React.FC<CartProps> = (props) => {
  const { fetchCartData } = props;
  const classes = useStyles();
  const userName = sessionStorage.getItem("loggedinUser") || "";

  useEffect(() => {
    fetchCartData(userName);
  }, [userName]);

  return (
    <>
      <HeaderAndNavBar />
      <Box></Box>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartData: cartSelectorData(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCartData: (userName: string) => dispatch(getCartData(userName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
