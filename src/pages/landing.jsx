import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import moneypic from "../moneyyyy.png";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const GetStartedButton = styled(Button)({
  boxshadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#000000",
  borderColor: "#000000",
  borderRadius: "10px",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#31ED34",
    borderColor: "#000000",
    color: "#000000",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#31ED34",
    borderColor: "#FFFFFF",
    color: "#000000",
  },
});

export default function Landing() {
  return (
    <div>
      <Stack direction="row" alignItems="center">
        <Paper
          elevation={7}
          sx={{
            flexGrow: 1,
            background: "#31ED34",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              color: "white",
              marginX: "42px",
              marginTop: "220px",
              fontFamily: "Bellota",
              fontSize: "60px",
            }}
          >
            {" "}
            CALCULATOR{" "}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{
              color: "white",
              marginX: "42px",
              marginTop: "18px",
              fontSize: "26px",
              fontFamily: "Bellota",
            }}
          >
            {" "}
            OF YOUR SALARY AND OVERTIME PAY
          </Typography>
          <Link to="/salary">
            <GetStartedButton
              variant="contained"
              sx={{ marginX: "42px", marginTop: "25px" }}
            >
              {" "}
              Get Started{" "}
            </GetStartedButton>
          </Link>
        </Paper>
        <Box sx={{ backgroundColor: "#ADF5B7" }}>
          <img
            src={moneypic}
            alt="money"
            width="710"
            style={{ opacity: "0.37" }}
          />
        </Box>
      </Stack>
    </div>
  );
}
