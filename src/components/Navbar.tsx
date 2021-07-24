import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./auth/Login";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#05b0a7",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props: NavBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginClick = () => {
    console.log("login btn clicked");
    setShowLogin(true);
    props.onLoginClick(true);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Mi portal de salud
        </Typography>
        <Button color="inherit" onClick={() => handleLoginClick()}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

type NavBarProps = {
  onLoginClick: (isVisible: boolean) => void;
};

export default Navbar;
