import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { salaryActions } from "../store/base-slice";
import { hourActions } from "../store/hour-slice";
import "../styles/styles.css";
import { useForm } from "react-hook-form";
import {
  Box,
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
  Typography,
  Paper,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const theme = createTheme();

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      salary: "",
      hours: "",
    },
  });
  const dispatch = useDispatch();
  const [salary, setSalary] = useState("0");
  const [hours, setHours] = useState("0");
  const [submitted, setSubmitted] = useState(false);

  const handleSalary = (event) => {
    setSalary(event.target.value);
  };

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={22}>
        <Box
          sx={{
            backgroundColor: "#8A2BE2",
            textAlign: "center",
            padding: "2rem",
            height: "715px",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "#FFF", fontFamily: "sans-serif  " }}
          >
            SALARY CALCULATOR
          </Typography>
          <Typography variant="h6" component="h4" sx={{ color: "#FFF" }}>
            <span>Using </span>REACT-REDUX
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              dispatch(salaryActions.setSalary(Number(salary)));
              dispatch(hourActions.setHours(Number(hours)));
              setSubmitted(true);
            })}
          >
            <TextField
              {...register("salary", {
                required: "This is required! ",
                min: {
                  value: 100,
                  message: "Minimum salary in company is 100/hour",
                },
              })}
              sx={{ margin: 1 }}
              fullWidth
              type="number"
              value={salary}
              onChange={handleSalary}
              required
              id="standard-number"
              label="Base Salary:"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            {errors.salary && (
              <Typography
                variant="h7"
                component="p"
                sx={{ fontSize: 14, color: "orangered" }}
                role="alert"
              >
                {errors.salary?.message}
              </Typography>
            )}
            <TextField
              {...register("hours", {
                required: "This is required! ",
                min: {
                  value: 20,
                  message: "Must clock atleast 20 hours first",
                },
              })}
              sx={{
                margin: 1,
              }}
              fullWidth
              type="number"
              required
              value={hours}
              onChange={handleHours}
              id="standard-number"
              label="Hours clocked:"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            {errors.hours && (
              <Typography
                variant="h7"
                component="p"
                sx={{ fontSize: 14, color: "orangered" }}
                role="alert"
              >
                {errors.hours?.message}
              </Typography>
            )}
            <br />
            <IconButton
              type="submit"
              sx={{
                color: "white",
              }}
            >
              <PaidIcon fontSize="large" />
            </IconButton>
          </form>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
