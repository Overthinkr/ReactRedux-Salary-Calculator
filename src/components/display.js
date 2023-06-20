import React from "react";
import { useSelector } from "react-redux";
import "../styles/styles.css";
import { Hidden, Typography } from "@mui/material";

export default function Display() {
  const basesalary = useSelector((state) => state.basesalary.basesalary);
  const hours = useSelector((state) => state.hours.hours);

  let final = 0;

  if (hours === 1) {
    final = basesalary * 5;
  } else if (hours === 2) {
    final = basesalary * 10;
  } else if (hours === 3) {
    final = basesalary * 20;
  } else if (hours === 4) {
    final = basesalary * 30;
  }

  return (
    <>
      {final !== 0 ? (
        <>
          <br />
          <br />

          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "#00ff00",
              fontFamily: "cursive",
              fontSize: 50,
            }}
          >
            $ {final.toLocaleString()}
          </Typography>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}
