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
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("LoginToken"));

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/api/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
      localStorage.setItem("LoginToken", data.access_token);
      navigate("/salary");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitLogin();
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
              sx={{ fontFamily: "cursive", m: 3.2 }}
            >
              {" "}
              Sign In{" "}
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
                    aria-label="toggle confirm password visibility"
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
            <Button type="submit" sx={{ marginTop: 3 }}>
              Submit
            </Button>
          </form>
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            {" "}
            To create new account,{" "}
            <Link to="/signup">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "blue",
                  fontFamily: "cursive",
                }}
              >
                {" "}
                SIGN UP
              </Typography>
            </Link>
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
