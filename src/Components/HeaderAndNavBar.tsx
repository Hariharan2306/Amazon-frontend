import { useMemo, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ProductionQuantityLimits";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import debounce from "lodash/debounce";
import get from "lodash/get";
import amazonWhiteFont from "../Assets/amazonWhiteFont.png";
import { menuOptions, navBarOpts } from "../Constants";
import { getProductsDetails, getProductsNames } from "../Thunks/productsThunk";
import { productsSelector } from "../Selectors/productsSelector";
import type { AppDispatch, RootState } from "../Tools/store";
import type { HeaderAndNavBarProps, Option } from "../types/commonTypes";

const useStyles = makeStyles(() => ({
  amazonIcon: {
    width: "10vw",
    height: "5vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#141c24",
    color: "white",
    alignItems: "center",
    padding: "6px 25px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    width: "50vw",
    borderRadius: "5px",
    height: "5vh",
    "& .MuiAutocomplete-root": { width: "100%" },
    "& .MuiOutlinedInput-input": { paddingRight: 0 },
    "& .MuiInputBase-input": { fontSize: ".85rem", color: "#6e7372" },
  },
  autoCompText: { "& .MuiOutlinedInput-notchedOutline": { border: "none" } },
  location: { display: "flex", alignItems: "center" },
  locationTypo: { display: "flex", flexDirection: "column" },
  deliveryFont: {
    "& .MuiTypography-root": { fontSize: ".75rem" },
  },
  deliveryTextColor: { "& .MuiTypography-root": { color: "#6b7171" } },
  boldFont: {
    "& .MuiTypography-root": { fontSize: ".85rem !important", color: "white" },
  },
  cart: { display: "flex" },
  input: {
    flex: 1,
    padding: "5px 10px",
  },
  iconButton: {
    backgroundColor: "#ffbd69 !important",
    borderRadius: "0 !important",
  },
  languageMenu: {
    "& .MuiTypography-root": { alignItems: "center", display: "flex" },
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  },
  menu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    zIndex: 10,
    display: "none",
    width: "200px",
    "& .MuiMenuItem-root": { padding: 0 },
    "& .MuiLink-root": {
      color: "black",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline", color: "#c4541c" },
    },
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  show: { display: "block" },
  navBar: {
    backgroundColor: "#232f3f",
    "& .MuiButton-root": {
      color: "white !important",
      textTransform: "capitalize",
      "&:hover": { border: "1px solid white" },
    },
  },
  hoverBorder: { "&:hover": { border: "1px solid white" } },
}));
const HeaderAndNavBar: React.FC<HeaderAndNavBarProps> = (props) => {
  const { fetchProductsNames, products, fetchItemDetails } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const debouncedSearch = useMemo(
    () => debounce((value) => fetchProductsNames(value), 1000),
    []
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };

  const moveToItemPage = (value: string) => {
    setSearch(value);
    fetchItemDetails(value);
    navigate("/item-details");
  };

  return (
    <Box>
      <Box className={classes.header}>
        <img
          src={amazonWhiteFont}
          alt="Amazon Logo"
          className={`${classes.amazonIcon} ${classes.hoverBorder}`}
        />
        <Box className={classes.location}>
          <FmdGoodIcon />
          <Box className={classes.locationTypo}>
            <Box
              className={`${classes.deliveryFont} ${classes.deliveryTextColor}`}
            >
              <Typography>Deliver to ABC</Typography>
            </Box>
            <Box className={classes.boldFont}>
              <Typography>Chennai</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.searchBar}>
          <Select defaultValue="all">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
          </Select>
          <Autocomplete
            value={products.find(({ value }) => value === search)}
            onChange={(_event: React.SyntheticEvent, newValue: Option | null) =>
              moveToItemPage(get(newValue, "value", ""))
            }
            inputValue={search}
            onInputChange={(_event, newInputValue) =>
              handleSearch(newInputValue)
            }
            options={products}
            popupIcon={null}
            renderInput={(params) => (
              <TextField
                className={classes.autoCompText}
                placeholder="Search Amazon.in"
                {...params}
              />
            )}
          />
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box
          className={classes.dropdown}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Box className={`${classes.boldFont} ${classes.languageMenu}`}>
            <Typography>
              Menu
              <ArrowDownIcon />
            </Typography>
          </Box>
          <Box className={`${classes.menu} ${open ? classes.show : ""}`}>
            {menuOptions.map((option, i) => (
              <>
                <MenuItem key={i} className={classes.menuItem}>
                  <Radio name="radio-buttons" />
                  <Link href="#">{option.label}</Link>
                </MenuItem>
                {i === 0 && <Divider variant="middle" />}
              </>
            ))}
          </Box>
        </Box>
        <Box className={classes.deliveryFont}>
          <Typography>Hello ABc</Typography>
          <Box className={classes.boldFont}>
            <Typography>Account & List</Typography>
          </Box>
        </Box>
        <Box className={classes.deliveryFont}>
          <Typography>Returns</Typography>
          <Box className={classes.boldFont}>
            <Typography>& Orders</Typography>
          </Box>
        </Box>
        <Box className={`${classes.boldFont} ${classes.cart}`}>
          <CartIcon />
          <Typography>Cart</Typography>
        </Box>
      </Box>
      <Box className={classes.navBar}>
        {navBarOpts.map((e) => (
          <Button>{e}</Button>
        ))}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: productsSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchProductsNames: (actions: string) => dispatch(getProductsNames(actions)),
  fetchItemDetails: (actions: string) => dispatch(getProductsDetails(actions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAndNavBar);
