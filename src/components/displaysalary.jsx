import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function DisplaySalary() {
  const ctc = useSelector((state) => state.basesalary.basesalary);

  const taxAPI = {
    50: 0.05,
    100: 0.1,
    150: 0.15,
    200: 0.2,
    1000: 0.42,
  };

  let incomeaftertax = ctc;

  for (const slab in taxAPI) {
    if (ctc >= slab) {
      incomeaftertax = ctc - ctc * taxAPI[slab];
      break;
    }
  }

  return (
    <Box sx={{ m: 12, animation: "backwards" }}>
      <Typography sx={{ fontFamily: "cursive" }}>
        {" "}
        My annual income is:
      </Typography>
      <Typography variant="h2" component="h2" sx={{ fontFamily: "cursive" }}>
        {" "}
        $ {(incomeaftertax * 1000).toLocaleString()}{" "}
      </Typography>
    </Box>
  );
}
