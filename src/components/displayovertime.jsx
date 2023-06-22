import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function DisplayOvertime() {
  const income = useSelector((state) => state.income.income);
  const hours = useSelector((state) => state.hours.hours);
  const hourstovalue = {
    0: 0,
    1: 5,
    2: 10,
    3: 20,
    4: 30,
  };

  const final = income * hourstovalue[hours];
  return (
    <Box
      sx={{
        m: 12,
        animation: "backwards",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Typography
        sx={{
          fontFamily: "cursive",
          marginY: 3,
          marginX: 2,
        }}
      >
        {" "}
        My Overtime pay this week:
      </Typography>
      <Typography variant="h2" component="h2" sx={{ fontFamily: "cursive" }}>
        $ {final}
      </Typography>
    </Box>
  );
}
