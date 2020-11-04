import React, { useState } from "react";

import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
  rgbToHex,
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  MenuOpenOutlined,
} from "@material-ui/icons";
import avatar from "../assets/avatar.png";


//CSS STYLES
const primaryColor = "#272f40";
const secondaryColor = "#031740";
const terciaryColor = "#97b1e6";
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: primaryColor,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: terciaryColor,
  },
  

}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portifolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({ right: false });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box  component="nav">
        <AppBar   position="static" style={{ background: primaryColor }}>
          <Toolbar >
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuOpenOutlined style={{ color: terciaryColor}} />
            </IconButton>
           <MobileRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
            <Typography className={classes.listItem} variant={"h5"}>
              Progratório
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
