import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Navbar2 = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    navigate("/");
  };

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
          zIndex: 100,
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
              <Typography sx={{color:'white', fontWeight:'bold', ":hover":{color:'red'}}}>Home</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/trending">
              <Typography sx={{color:'white', fontWeight:'bold', ":hover":{color:'red'}}}>Trending</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/nowplaying">
              <Typography sx={{color:'white', fontWeight:'bold', ":hover":{color:'red'}}}>Now Playing</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/upcoming">
              <Typography sx={{color:'white', fontWeight:'bold', ":hover":{color:'red'}}}>Up Coming</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography sx={{color:'white', fontWeight:'bold', ":hover":{color:'red'}}}>My List</Typography>
            </Link>
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {togle ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: 20,
                  right: 0,
                  paddingRight: 2,
                  zIndex: 150,
                }}
              >
                <PersonIcon
                  onClick={() => navigate("/profile")}
                  fontSize="medium"
                  sx={{ color: "white", mx: 2 }}
                />
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
                  paddingRight: 2,
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 4,
                    gap: 1,
                  }}
                >
                  {loading ? (
                    <Typography
                      color={"white"}
                      bgcolor={"red"}
                      padding={0.5}
                      borderRadius={"5px"}
                      fontSize={"1rem"}
                    >
                      Inisialising user
                    </Typography>
                  ) : error ? (
                    <Typography
                      color={"white"}
                      bgcolor={"red"}
                      padding={0.5}
                      borderRadius={"5px"}
                    >
                      error
                    </Typography>
                  ) : user ? (
                    <>
                      <Typography color={"white"}>{user.email}</Typography>
                      <Button
                        size="small"
                        sx={{ color: "white", bgcolor: "red", width: "80%" }}
                        onClick={logOut}
                        variant="contained"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Typography
                        color={"white"}
                        bgcolor={"red"}
                        borderRadius={"5px"}
                      >
                        <Button
                          sx={{ color: "white" }}
                          onClick={() => {
                            navigate("/login");
                            togleHandler();
                          }}
                        >
                          Sign In
                        </Button>
                      </Typography>
                      <Typography
                        color={"white"}
                        border={"1px solid white"}
                        borderRadius={"5px"}
                      >
                        <Button
                          sx={{ color: "white" }}
                          onClick={() => {
                            navigate("/register");
                            togleHandler();
                          }}
                        >
                          Sign Up
                        </Button>
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {loading ? (
              <Typography
                color={"white"}
                bgcolor={"red"}
                padding={0.5}
                borderRadius={"5px"}
              >
                Inisialising user
              </Typography>
            ) : error ? (
              <Typography
                color={"white"}
                bgcolor={"red"}
                padding={0.5}
                borderRadius={"5px"}
              >
                error
              </Typography>
            ) : user ? (
              <>
                <Typography
                  color={"white"}
                  bgcolor={"red"}
                  borderRadius={"5px"}
                  border={'1px solid red'}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      ":hover": { bgcolor: "black", color: "red" },
                    }}
                    onClick={logOut}
                  >
                    Sign Out
                  </Button>
                </Typography>
                <Typography
                  color={"white"}
                  border={"1px solid white"}
                  borderRadius={"5px"}
                >
                  <Button sx={{ color: "white" }}>{user.email}</Button>
                </Typography>
              </>
            ) : (
              <>
                <PersonIcon
                  onClick={() => navigate("/profile")}
                  fontSize="large"
                  sx={{ color: "white", margin: "auto" }}
                />
                <Typography
                  color={"white"}
                  bgcolor={"red"}
                  border={"1px solid red"}
                  borderRadius={"5px"}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      ":hover": { bgcolor: "black", color: "red" },
                    }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </Typography>
                <Typography
                  color={"white"}
                  border={"1px solid white"}
                  borderRadius={"5px"}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      ":hover": { bgcolor: "white", color: "black" },
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar2;
