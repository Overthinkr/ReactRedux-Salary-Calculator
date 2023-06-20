import React from "react";
import Form from "./form";
import "../styles/styles.css";
import Display from "./display";
import { CssBaseline, Grid } from "@mui/material";

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
          <Display />
        </Grid>
        <Grid item xs={4}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}
