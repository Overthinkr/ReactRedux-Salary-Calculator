import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const salaryColor = location.pathname.includes("/salary")
    ? "#000000"
    : "#FFFFFF";
  const overtimeColor = location.pathname.includes("/overtime")
    ? "#000000"
    : "#FFFFFF";

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, zIndex: 9, position: "relative" }}>
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
          <Button
            onClick={() => {
              localStorage.setItem("LoginToken", null);
              navigate("/signin");
            }}
            variant="contained"
            sx={{
              fontFamily: "sans-serif",
              m: 1,
              backgroundColor: "#e049e3",
              borderRadius: "13px",
              ":hover": {
                backgroundColor: "#0ef012",
                color: "#000000",
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
