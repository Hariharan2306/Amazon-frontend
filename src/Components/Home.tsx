import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeaderAndNavBar from "./HeaderAndNavBar";
import shoppingCart from "../Assets/shoppingCart.jpg";
import redCart from "../Assets/redCart.jpg";

const useStyles = makeStyles(() => ({
  carousel: {
    position: "relative",
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "10px",
  },
  slide: {
    width: "100%",
    height: "auto",
    display: "none",
  },
  activeSlide: {
    display: "block",
  },
  arrows: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: "50%",
    padding: "5px",
  },
  leftArrow: {
    left: "10px",
  },
  rightArrow: {
    right: "10px",
  },
}));
const Home = () => {
  const classes = useStyles();
  const images = [shoppingCart, redCart];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <HeaderAndNavBar />
      <Box className={classes.carousel}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={
              index === currentIndex ? classes.activeSlide : classes.slide
            }
          />
        ))}
        <IconButton
          className={`${classes.arrows} ${classes.leftArrow}`}
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          className={`${classes.arrows} ${classes.rightArrow}`}
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
