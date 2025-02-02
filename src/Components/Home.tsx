import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderAndNavBar from "./HeaderAndNavBar";

const useStyles = makeStyles(() => ({}));
const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <HeaderAndNavBar />
    </Box>
  );
};
export default Home;
