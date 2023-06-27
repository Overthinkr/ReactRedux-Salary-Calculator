import React, { createContext, useEffect } from "react";
import Navbar from "../components/navbar";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { salaryActions } from "../store/base-slice";
import money2 from "../money2.jpg";
import DisplaySalary from "../components/displaysalary";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const SalaryContext = createContext(null);

export default function Salary() {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (localStorage.getItem("LoginToken") === "null") {
      navigate("/signin");
    }
  });

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
              fontWeight: 200,
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
              <ButtonGroup variant="text" aria-label="text button group">
                <Link to="taxbreakup">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#31ED34",
                      ":hover": {
                        backgroundColor: "inherit",
                        color: "#000000",
                      },
                    }}
                  >
                    {" "}
                    Tax Breakup{" "}
                  </Button>
                </Link>
                <Link to="hra">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#31ED34",
                      ":hover": {
                        backgroundColor: "inherit",
                        color: "#000000",
                      },
                    }}
                  >
                    {" "}
                    HRA{" "}
                  </Button>
                </Link>
              </ButtonGroup>
              <SalaryContext.Provider value={salary}>
                <Outlet />
              </SalaryContext.Provider>
            </>
          ) : (
            <> </>
          )}
        </Stack>
      </Box>
    </div>
  );
}
