import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import amazonLogo from "../Assets/amazonLogo.svg";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiLink-root": {
      color: "#14748c",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline", color: "#c4541c" },
    },
  },
  container: {
    margin: "auto 48%",
    display: "flex",
    flexDirection: "column",
  },
  amazonIcon: { width: "8vw", height: "8vh", margin: "auto" },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    margin: "auto",
    "& .MuiTextField-root": { width: "20vw" },
    "& .MuiOutlinedInput-input": { padding: "5px" },
    "& .MuiButton-root": {
      backgroundColor: "#ffdc14",
      borderRadius: "25px",
      color: "black",
      textTransform: "capitalize",
      margin: "4% 0",
      paddding: "4px 8px",
    },
  },
  disclaimer: {
    fontSize: ".85rem",
    "& .MuiLink-root": { textDecoration: "underline" },
  },
  needhelp: {
    display: "flex",
    alignItems: "center",
    margin: "7% 0",
  },
  buyingForWork: { fontSize: ".85rem", margin: "3% 0" },
  fontWeight: {
    "& .MuiTypography-root": { fontWeight: "bold", fontSize: ".85rem" },
  },
  signIn: {
    "& .MuiTypography-root": { fontSize: "1.7rem", fontWeight: "400" },
  },
  newToAmazon: {
    width: "23vw",
    display: "flex",
    flexDirection: "column",
    margin: "2% auto",
    color: "#565959",
    fontSize: ".85rem",
    "& .MuiButton-root": {
      border: ".85px solid black",
      borderRadius: "25px",
      fontSize: ".85rem",
      color: "black",
      textTransform: "none",
      margin: "2% 0",
      padding: "3px 8px",
    },
  },
  footer: { width: "17.7vw", margin: "3% auto" },
  footerLinks: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiTypography-root": { fontSize: ".85rem" },
  },
}));
const Login = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
    sessionStorage.setItem("loggedinUser", value);
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className={classes.amazonIcon}
        />

        <Card className={classes.card}>
          <Box className={classes.signIn}>
            <Typography variant="h6">Sign in</Typography>
          </Box>
          <Box className={`${classes.disclaimer} ${classes.fontWeight}`}>
            <Typography variant="subtitle1">
              Email or mobile phone number
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            value={userName}
            onChange={handleChange}
          />
          <Button>Continue</Button>
          <Box className={classes.disclaimer}>
            {" By continuing, you agree to Amazon's "}
            <Link href="#">
              Conditions of <br /> Use
            </Link>
            {" and "}
            <Link href="#">Privacy Notice</Link>
          </Box>
          <Box className={classes.needhelp}>
            <KeyboardArrowDownIcon />
            <Link href="#">Need help?</Link>
          </Box>

          <Divider />

          <Box className={classes.buyingForWork}>
            <Box className={classes.fontWeight}>
              <Typography variant="subtitle1">Buying for work?</Typography>
            </Box>
            <Link href="#">Shop on Amazon Business</Link>
          </Box>
        </Card>

        <Box className={classes.newToAmazon}>
          <Divider>New to Amazon?</Divider>
          <Button>Create your Amazon account</Button>
        </Box>
      </Container>

      <Divider />

      <Box className={classes.footer}>
        <Box className={classes.footerLinks}>
          <Link href="#">Conditions of Use</Link>
          <Link href="#">Privacy Notice</Link>
          <Link href="#">Help</Link>
        </Box>
        <Typography variant="caption" display="block">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </Typography>
      </Box>
    </Box>
  );
};
export default Login;
