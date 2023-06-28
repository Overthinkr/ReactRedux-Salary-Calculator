import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  const setCookie = (name, value, minutes = 10) => {
    const expires = new Date(Date.now() + 1000000000).toUTCString();
    document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
  };

  const deleteCookie = (name) => {
    document.cookie =
      name + "=; expires=Thu, 09 Sep 2001 00:00:00 UTC; path=/;";
  };

  const navigate = useNavigate();
  const [token, setToken] = useState(getCookie("LoginToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("/api/users/me", requestOptions);

      if (!response.ok) {
        setToken(null);
        deleteCookie("LoginToken");
      }
      setCookie("LoginToken", token);
    };
    fetchUser();
  }, [token]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, hashed_password: password }),
    };

    const response = await fetch("/api/users", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
      setCookie("LoginToken", data.access_token);
      navigate("/salary");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      submitRegistration();
    } else {
      setErrorMessage("Ensure that the passwords match!");
    }
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#ADF5B7",
          zIndex: 0,
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
            borderRadius: "15px",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "30vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 95,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontFamily: "cursive", marginBottom: 3.5 }}
            >
              {" "}
              Sign UP{" "}
            </Typography>
            <InputLabel>Username</InputLabel>
            <TextField
              required
              type="text"
              variant="standard"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputLabel sx={{ marginTop: 3 }}>Password</InputLabel>
            <Input
              required
              sx={{ m: 1.2 }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              variant="standard"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <InputLabel sx={{ marginTop: 3 }}>Confirm Password</InputLabel>
            <Input
              required
              sx={{ m: 1.2 }}
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              variant="standard"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {errorMessage !== "" ? (
              <Typography sx={{ color: "red", textAlign: "center" }}>
                {" "}
                {errorMessage}{" "}
              </Typography>
            ) : (
              <></>
            )}
            <Button
              type="submit"
              sx={{
                marginTop: 3,
                backgroundColor: "#31ED34",
                borderRadius: 4,
                paddingX: 2,
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#ADF5B7",
                  transform: "scale(1.1)",
                  transition: "transform 0.35s ease-in-out",
                },
                "&:active": {
                  transform: "scale(0.95)",
                  transition: "transform 0.2s ease-in-out",
                },
              }}
            >
              Register
            </Button>
          </form>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            {" "}
            To Sign into an existing account,{" "}
            <Link to="/signin">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "blue",
                  fontFamily: "cursive",
                }}
              >
                {" "}
                SIGN IN
              </Typography>
            </Link>
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
