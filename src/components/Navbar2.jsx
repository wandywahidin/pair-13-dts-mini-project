import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  const [togle, setTogle] = useState(true);
  const togleHandler = () => {
    setTogle(!togle);
  };

  return (
    <>
      <Box
        sx={{
          background: "#141414",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          zIndex:100
        }}
      >
        <Box sx={{ width: "40px" }}>
          <Link to="/">
            <img width="100%" src={logo} alt="logo" />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={"white"}>Home</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/trending">
              <Typography color={"white"}>Trending</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/nowplaying">
              <Typography color={"white"}>Now Playing</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/upcoming">
              <Typography color={"white"}>Up Coming</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={"white"}>My List</Typography>
            </Link>
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {togle ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: 20,
                  right: 0,
                  paddingRight: 1,
                  zIndex: 150,
                }}
              >
                <MenuIcon
                  onClick={togleHandler}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  position: "absolute",
                  top: 20,
                  right: 0,
                  paddingRight: 1,
                  paddingLeft: 3,
                  paddingBottom: 3,
                  zIndex: 150,
                  bgcolor: "rgba(0,0,0,0.8)",
                }}
              >
                <CloseIcon
                  onClick={togleHandler}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
                <Box
                  onClick={togleHandler}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "15px",
                    alignItems: "end",
                  }}
                >
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <Typography color={"white"}>Home</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/trending">
                      <Typography color={"white"}>Trending</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/nowplaying">
                      <Typography color={"white"}>Now Playing</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/upcoming">
                      <Typography color={"white"}>Up Coming</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <Typography color={"white"}>My List</Typography>
                    </Link>
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Typography
              color={"white"}
              bgcolor={"red"}
              padding={0.5}
              borderRadius={"5px"}
            >
              <Link to="/login">Sign In</Link>
            </Typography>
            <Typography
              color={"white"}
              border={"1px solid white"}
              padding={0.5}
              borderRadius={"5px"}
            >
              <Link to="/register">Sign Up</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar2;
