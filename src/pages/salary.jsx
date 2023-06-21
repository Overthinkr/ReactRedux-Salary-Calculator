import React from "react";
import Navbar from "../components/navbar";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { salaryActions } from "../store/base-slice";
import money2 from "../money2.jpg";
import DisplaySalary from "../components/displaysalary";

export default function Salary() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      salary: "",
    },
  });

  const dispatch = useDispatch();
  const [salary, setSalary] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSalary = (event) => {
    setSalary(event.target.value);
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
            Salary Calculator
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              dispatch(salaryActions.setSalary(Number(salary)));
              setSubmitted(true);
            })}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              {...register("salary", {
                required: "This is required! ",
                min: {
                  value: 30,
                  message: "Minimum CTC in company is 30k",
                },
              })}
              type="number"
              id="outlined-error-helper-text"
              label="My CTC (in thousands):"
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 2,
                backgroundColor: "#31ED34",
                ":hover": {
                  backgroundColor: "inherit",
                  color: "#000000",
                  border: "1px solid",
                  borderColor: "#000000",
                },
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
          {submitted ? (
            <>
              <DisplaySalary />
            </>
          ) : (
            <> </>
          )}
        </Stack>
      </Box>
    </div>
  );
}
