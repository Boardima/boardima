import * as React from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Appbar from "../stats/Appbar";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function SignIn() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const navigate = useNavigate();
  const signInUser = async () => {
    try {
      const data = await axios
        .post("https://boardima-backend.onrender.com/api/boardim/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          Swal.fire("Hey user!", "Welcome", response.data.message);
          localStorage.setItem("token", response.data.token);
          navigate("/userhome");
        })
        .catch((error) => {
          console.log(error);
          switch (error.response.status) {
            case 404:
              Swal.fire(
                "Hey user!",
                error.response.data.message,
                "No user found"
              );
              return;
            case 500:
              Swal.fire(
                "Hey user!",
                error.response.data.message,
                "Please Try Again"
              );
              return;
            default:
              Swal.fire("Hey user!", "Error", "");
              return;
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Appbar value={2} />

      <div className="bgImagesignin"></div>

      <div className="contentsignup">
        <div className="signinform">
          <Typography
            className="signintitle"
            sx={{ fontWeight: "bold", fontSize: "16pt" }}
          >
            BOARDIMA
          </Typography>
          <Typography className="signintitle">Sign In</Typography>

          <form>
            <Box className="signininputf">
              <TextField
                className="signintextf"
                id="standard-basic"
                label="email"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
              />
            </Box>
            <Box className="signininputf">
              <FormControl
                label="Password"
                variant="standard"
                className="signuptextf"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  label="Password"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Button
              onClick={() => {
                signInUser();
              }}
              variant="contained"
              className="signinbtn"
            >
              <Typography>Sign In</Typography>
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
}

export default SignIn;
