import "./navbar.scss";
import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../drawer/Drawer";
import logo from "../../img/logotype.svg";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    flexGrow: "1",
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "#FFC301",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
        background: "white",
        padding: "1vh 0vh",
        color: "black",
      }}
    >
      <CssBaseline />
      <Toolbar className="tool-bar">
        <Typography
          variant="h4"
          className={classes.logo}
          style={{ flexGrow: isMobile ? "1" : "0" }}
        >
          <img src={logo} alt="" />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            <div className={classes.navlinks}>
              <a href="/" className={classes.link}>
                Курсы
              </a>
              <a href="/team" className={classes.link}>
                Команда
              </a>
            </div>
            <div className="contact">
              <a href="tel:+998787777774">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#1C1C1C"></circle>
                  <path
                    fill="url(#paint0_linear)"
                    d="M21.053 17.901c-.74 0-1.466-.116-2.153-.342-.335-.116-.716-.027-.936.198L16.6 18.786c-1.563-.834-2.563-1.834-3.386-3.386l1-1.33a.956.956 0 00.235-.966 6.86 6.86 0 01-.345-2.157.949.949 0 00-.947-.947h-2.21a.948.948 0 00-.948.947C10 17.042 14.959 22 21.053 22a.948.948 0 00.947-.947v-2.205a.948.948 0 00-.947-.947z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="16"
                      x2="16"
                      y1="10"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD900"></stop>
                      <stop offset="1" stopColor="#FFC000"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ fontSize: "16px" }}>(78) 777 7774</span>
              </a>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
