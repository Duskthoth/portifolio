import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

//css
const primaryColor = "#272f40";
const secondaryColor = "#031740";
const terciaryColor = "#c0dcfc";

const useStyles = makeStyles({
  particleCanva: {
    position: "absolute",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: { value: 25, density: { enable: true, value_area: 900 } },
            shape:{
              type: "circle",
              stroke:{
                width:5,
                color: terciaryColor,
              }
              
            },
            size:{
              value:1,
              random:true,
              anim:{
                enable:true,
                speed:5,
                size_min:0.1,
                sync:false,
              }
            },
            opacity:{
              value:1,
              random: false,
              anim:{
                enable:false,
                speed:1,
                opacity_min:3,
                sync:false,
              }
            }
          },
        }}
      />
      <Header />
    </div>
  );
};

export default Home;
