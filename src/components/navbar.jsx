import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import blankprofpic from "../blankprofpic.jpg";

export default function Navbar() {
  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  const token = getCookie("LoginToken");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch("/api/users/me", requestOptions);
      if (!response.ok) {
        console.log("Not logged in");
      } else {
        const data = await response.json();
        setUser(data.username);
      }
    };
    fetchUser();
  }, [token]);

  const location = useLocation();

  const salaryColor = location.pathname.includes("/salary")
    ? "#000000"
    : "#FFFFFF";
  const overtimeColor = location.pathname.includes("/overtime")
    ? "#000000"
    : "#FFFFFF";

  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie =
      "LoginToken=; expires=Thu, 11 Sep 2001 00:00:00 UTC; path=/;";
    navigate("/signin");
  };

  return (
    <Box
      sx={{ flexGrow: 1, zIndex: 9, position: "relative" }}
      onClick={() => {
        if (getCookie("LoginToken") === "") {
          navigate("/signin");
        }
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#31ED34" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/salary" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                color: salaryColor,
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "cursive",
                m: 1,
              }}
            >
              SALARY
            </Button>
          </Link>
          <Link to="/overtime" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                color: overtimeColor,
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "cursive",
                m: 1,
              }}
            >
              OVERTIME
            </Button>
          </Link>
          <Tooltip
            title={
              <Typography
                sx={{
                  fontSize: 14,
                }}
              >
                {" "}
                {user}{" "}
              </Typography>
            }
            arrow
          >
            <img
              src={blankprofpic}
              alt="profile"
              style={{ width: 40, height: 40, borderRadius: 50, margin: 6 }}
            />
          </Tooltip>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              fontFamily: "sans-serif",
              m: 1,
              backgroundColor: "#e049e3",
              borderRadius: "13px",
              ":hover": {
                backgroundColor: "#0ef012",
                color: "#000000",
                fontWeight: "550",
              },
            }}
          >
            LogOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
