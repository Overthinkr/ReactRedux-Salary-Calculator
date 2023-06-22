import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SalaryContext } from "../pages/salary";

export default function HRA() {
  const salarycontext = useContext(SalaryContext);
  const [rent, setRent] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const Monthly = salarycontext / 0.012;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRent(event.target.elements.rent.value);
    setSubmitted(true);
  };

  const calculateHRA = () => {
    const tenp = 0.1 * Monthly;
    return Math.min(0.5 * Monthly, rent - tenp);
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          background: "inherit",
          alignItems: "center",
          justifyContent: "center",
          m: 8,
        }}
      >
        <Stack direction="row">
          <form onSubmit={handleFormSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Typography
                      component={"h2"}
                      variant={"p"}
                      sx={{ m: 1, fontFamily: "cursive" }}
                    >
                      {" "}
                      My Income:{" "}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      component={"h2"}
                      variant={"p"}
                      sx={{ m: 1, marginLeft: 4, fontFamily: "cursive" }}
                    >
                      {" "}
                      {(salarycontext * 1000).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}{" "}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      component={"h2"}
                      variant={"p"}
                      sx={{ m: 1, fontFamily: "cursive" }}
                    >
                      {" "}
                      My Monthly Rent:{" "}
                    </Typography>
                  </td>
                  <td>
                    <TextField
                      type="number"
                      id="rent"
                      name="rent"
                      variant="filled"
                      label="₹"
                      required
                      sx={{ fontFamily: "ui-monospace" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 4,
                marginX: 21,
                color: "orangered",
                backgroundColor: "#ADF5B7",
                border: "1px solid #000000",
                ":hover": {
                  backgroundColor: "inherit",
                  color: "#000000",
                },
              }}
            >
              Check my HRA
            </Button>
          </form>
        </Stack>
        {submitted && (
          <Typography
            component={"h2"}
            variant={"p"}
            sx={{
              fontFamily: "cursive",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {calculateHRA() < 0
              ? "Oops! Seems like I am not applicable for this Allowance!"
              : "My Monthly House Rent Allowance:                        " +
                calculateHRA().toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
          </Typography>
        )}
      </Box>
    </div>
  );
}
