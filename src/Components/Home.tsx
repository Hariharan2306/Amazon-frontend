import { useState, useEffect } from "react";
import { Box, Card, IconButton, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeaderAndNavBar from "./HeaderAndNavBar";
import shoppingCart from "../Assets/shoppingCart.jpg";
import redCart from "../Assets/redCart.jpg";
import HomeImage1 from "../Assets/HomeImage1.png";
import HomeImage2 from "../Assets/HomeImage2.png";
import HomeImage3 from "../Assets/HomeImage3.png";
import cushionCover from "../Assets/cushionCover.png";
import figurine from "../Assets/figurine.png";
import homeStorage from "../Assets/homeStorage.png";
import lightningSolutions from "../Assets/lightningSolutions.png";
import amazonBusinessLogo from "../Assets/amazonBusinessLogo.png";

const useStyles = makeStyles(() => ({
  sliderContainer: {
    position: "relative",
    width: "100%",
    height: "89vh",
    overflow: "hidden",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform .5s ease-in-out",
  },
  navButton: {
    top: "20%",
    transform: "translateY(-50%)",
    color: "white !important",
    zIndex: "1",
    "& .MuiSvgIcon-root": { fontSize: "3rem" },
  },
  leftButton: { left: "2%" },
  rightButton: { left: "90%" },
  cardBox: {
    display: "flex",
    position: "absolute",
    "& .MuiLink-root": { textDecoration: "none" },
  },
  card: {
    margin: "1% 1%",
    width: "26%",
    padding: "1%",
    marginTop: "14%",
    height: "fit-content",
  },
  image: { width: "93%" },
  card2Img: { margin: "2.7% 0" },
  typo: { fontSize: "1.3rem !important", fontWeight: "bold !important" },
  subTypo: {
    display: "flex",
    "& .MuiTypography-root": { fontSize: ".85rem !important" },
  },
  card3Imgs: { width: "87%" },
  flex: { display: "flex", padding: "2% 1%" },
  columns: { flexDirection: "column" },
  amazonBusinessLogo: { width: "30%" },
}));
const Home = () => {
  const classes = useStyles();
  const images = [shoppingCart, redCart];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <Box>
      <HeaderAndNavBar />
      <Box className={classes.sliderContainer}>
        {images.map((image, index) => (
          <Box
            key={index}
            className={classes.slide}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
        <IconButton
          onClick={handlePrev}
          className={`${classes.navButton} ${classes.leftButton}`}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          className={`${classes.navButton} ${classes.rightButton}`}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Box className={classes.cardBox}>
          <Card className={classes.card}>
            <Typography className={classes.typo} variant="h4">
              Pick up where you left off
            </Typography>
            <Box>
              <img
                className={classes.image}
                src={HomeImage1}
                alt="headphones"
              />
              <Box className={classes.subTypo}>
                <Typography>OnePlus Bullets Z2 Blu..</Typography>
                <Typography>OnePlus Bullets Z2 Blu..</Typography>
              </Box>
            </Box>
            <Box>
              <img
                className={classes.image}
                src={HomeImage2}
                alt="headphones"
              />
              <Box className={classes.subTypo}>
                <Typography>Parwaah OnePluss Bull...</Typography>
                <Typography>Noise Airwave Bluetoot..</Typography>
              </Box>
            </Box>
            <Link>See more</Link>
          </Card>

          <Card className={classes.card}>
            <Typography className={classes.typo} variant="h4">
              Continue Shopping Deals
            </Typography>
            <img
              className={`${classes.image} ${classes.card2Img}`}
              src={HomeImage3}
              alt="headphones"
            />
            <br />
            <Link>See all deals</Link>
          </Card>

          <Card className={classes.card}>
            <Typography className={classes.typo} variant="h4">
              Revamp your Home in style
            </Typography>
            <Box className={classes.flex}>
              <Box className={`${classes.subTypo} ${classes.columns}`}>
                <img
                  className={classes.card3Imgs}
                  src={cushionCover}
                  alt="headphones"
                />
                <Typography>Cushion covers, bedsheets & more</Typography>
              </Box>
              <Box className={`${classes.subTypo} ${classes.columns}`}>
                <img
                  className={classes.card3Imgs}
                  src={figurine}
                  alt="headphones"
                />
                <Typography>Figurines, Vases & more</Typography>
              </Box>
            </Box>
            <Box className={classes.flex}>
              <Box className={`${classes.subTypo} ${classes.columns}`}>
                <img
                  className={classes.card3Imgs}
                  src={homeStorage}
                  alt="headphones"
                />
                <Typography>Home Storage</Typography>
              </Box>
              <Box className={`${classes.subTypo} ${classes.columns}`}>
                <img
                  className={classes.card3Imgs}
                  src={lightningSolutions}
                  alt="headphones"
                />
                <Typography>Lightning Solutions</Typography>
              </Box>
            </Box>
            <Link>Explore All</Link>
          </Card>

          <Card className={`${classes.card} ${classes.flex}`}>
            <Box>
              <Typography className={classes.typo} variant="h4">
                Get bulk discounts + Top B2B deals !!
              </Typography>
              <Link>Register Now</Link>
            </Box>
            <img
              className={classes.amazonBusinessLogo}
              src={amazonBusinessLogo}
              alt="amazonBusinessLogo"
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
