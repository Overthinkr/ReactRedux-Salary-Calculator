import React from "react";
import Navbar from "../components/navbar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { incomeActions } from "../store/income-slice";
import { hourActions } from "../store/hour-slice";
import money2 from "../money2.jpg";
import DisplayOvertime from "../components/displayovertime";

export default function Salary() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      income: "",
      hours: "",
    },
  });

  const dispatch = useDispatch();
  const [income, setIncome] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSalary = (event) => {
    setIncome(event.target.value);
  };

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#ADF5B7",
          zIndex: 0,
          position: "relative",
          minHeight: "91vh",
          backgroundImage: { money2 },
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontFamily: "ui-monospace",
              m: 4,
              fontWeight: "200",
            }}
          >
            Overtime Pay Calculator
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              dispatch(incomeActions.setIncome(Number(income)));
              dispatch(hourActions.setHours(Number(hours)));
              setSubmitted(true);
            })}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              {...register("salary", {
                required: "This is required! ",
                min: {
                  value: 12,
                  message: "Minimum hourly wage is   $12.00",
                },
              })}
              type="number"
              id="outlined-error-helper-text"
              label="My Hourly overtime Pay:"
              defaultValue="Hello World"
              variant="filled"
              sx={{ m: 1, width: "50ch", fontFamily: "ui-monospace" }}
              onChange={handleSalary}
            />
            {errors.salary && (
              <Typography
                variant="h7"
                component="p"
                sx={{ fontSize: 14, color: "red", marginX: 2 }}
                role="alert"
              >
                {errors.salary?.message}
              </Typography>
            )}
            <FormControl sx={{ m: 1, marginTop: 2 }}>
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
                sx={{
                  width: "50ch",
                  fontFamily: "ui-monospace",
                }}
                label="Overtime this week:"
                onChange={handleHours}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 2,
                backgroundColor: "#31ED34",
                ":hover": {
                  backgroundColor: "inherit",
                  color: "#000000",
                },
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
          {submitted ? (
            <>
              <DisplayOvertime />
            </>
          ) : (
            <> </>
          )}
        </Stack>
      </Box>
    </div>
  );
}
