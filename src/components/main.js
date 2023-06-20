import React from "react";
import Form from "./form";
import "../styles/styles.css";
import { Box, CssBaseline, Grid } from "@mui/material";
import moneypic from "../moneyyyy.png";

export default function Main() {
  return (
    <div className="main">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        component="main"
      >
        <CssBaseline />
        <Grid item xs={8}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "whitesmoke",
              backgroundImage: `url(${moneypic})`,
              backgroundPosition: "center",
              backgroundSize: "30%",
              height: "715px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={4}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}
