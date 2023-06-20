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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import Display from "./display";

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

  const handleChange = (event) => {
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
            OVERTIME PAY CALCULATOR
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
              id="standard-number"
              label="Your Base Overtime Pay:"
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
            <br />
            <br />
            <FormControl>
              <InputLabel id="simple-select-label">
                Overtime this week:
              </InputLabel>
              <Select
                {...register("hours", {
                  required: "This is required! ",
                })}
                labelId="simple-select-label"
                id="simple-select"
                value={hours}
                label="Overtime this week:"
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                sx={{ width: 400 }}
              >
                <MenuItem value={0}> None </MenuItem>
                <MenuItem value={1}> 5-10 hours </MenuItem>
                <MenuItem value={2}> 10-20 hours </MenuItem>
                <MenuItem value={3}> 20-30 hours </MenuItem>
                <MenuItem value={4}> 30+ hours </MenuItem>
              </Select>
            </FormControl>

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
          <Display />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
