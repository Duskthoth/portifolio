import React from "react";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box, makeStyles } from "@material-ui/core";
import avatar from "../assets/avat.jpg";

//CSS Styles
const primaryColor = "#272f40";
const secondaryColor = "#031740";
const terciaryColor = "#c0dcfc";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    borderRadius: "50%",
    
  },
  title: {
    color: terciaryColor,
  },
  subtitle: {
    color: terciaryColor,
    marginBottom: "3rem",
  fontWeight: 7000,
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Andrew Dellamea"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Web Design",
            "Robotics Engeneering",
            "Data Analysis",
            "Crying in the free time",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
