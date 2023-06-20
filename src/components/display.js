import React from "react";
import { useSelector } from "react-redux";
import moneypic from "../moneyyyy.png";
import "../styles/styles.css";
import { Box, Typography } from "@mui/material";

const marglength = (final) => {
  return 30 - final.toLocaleString().length;
};

export default function Display() {
  const basesalary = useSelector((state) => state.basesalary.basesalary);
  const hours = useSelector((state) => state.hours.hours);
  const final = basesalary * hours;

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "whitesmoke",
        backgroundImage: `url(${moneypic})`,
        backgroundPosition: "center",
        backgroundSize: "30%",
        height: "715px",
      }}
    >
      {final !== 0 ? (
        <>
          <br />
          <br />

          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "green",
              fontFamily: "cursive",
              marginTop: 36,
              marginX: marglength(final),
              fontSize: 60,
              background: "white",
            }}
          >
            $ {final.toLocaleString()}
          </Typography>
        </>
      ) : (
        <p></p>
      )}
    </Box>
  );
}
