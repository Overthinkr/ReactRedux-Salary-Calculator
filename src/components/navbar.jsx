import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link, useHref } from "react-router-dom";

export default function Navbar() {
  const currentPath = useHref();

  const salaryColor = currentPath.includes("/salary") ? "#000000" : "#FFFFFF";
  const overtimeColor = currentPath.includes("/overtime")
    ? "#000000"
    : "#FFFFFF";
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
                fontFamily: "Bellota",
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
                fontFamily: "Bellota",
                m: 1,
              }}
            >
              OVERTIME
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
