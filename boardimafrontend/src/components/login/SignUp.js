import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Appbar from "../stats/Appbar";
import "./signup.css";
import axios from "axios";
import Swal from "sweetalert2";
function SignUp() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeUni = (event) => {
    setUniversity(event.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setemail(value);
    }
    if (id === "university") {
      setUniversity(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "address") {
      setAddress(value);
    }
  };


  const handleSubmit = async () => {

    const data = await axios
      .post("https://boardima-backend.onrender.com/api/boardim/register", {
        email: email,
        university: university,
        password: password,
        address: address,
        gender: gender,
      })
      .then((response) => {
        Swal.fire("Hey user!", "You are registered!", "Please Login");

        navigate("/login");
      });
  };

  return (
    <Box>
      <Appbar value={1} />

      <div className="bgImagesignup"></div>

      <div className="contentsignup">
        <div className="signupform">
          <Typography className="signuptitle">Sign Up</Typography>

          <form>
            <Box className="signupinputf">
              <TextField
                className="signuptextf"
                id="standard-basic"
                label="Email"
                type="email"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Box>

            <Box className="signupinputf">
              <TextField
                className="signuptextf"
                id="standard-basic"
                label="Address"
                variant="standard"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Box>
            <Box className="signuplabelf">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  className="radiolabel"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  className="radiolabel"
                />
              </RadioGroup>
            </Box>
            <Box>
              <InputLabel id="demo-simple-select-standard-label">
                University
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={university}
                onChange={handleChangeUni}
                label="university"
                className="selectmenu"
              >
                <MenuItem value="Not Given">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"University of Colombo"}>
                  University of Colombo
                </MenuItem>
                <MenuItem value={"University of Moratuwa"}>
                  University of Moratuwa
                </MenuItem>
                <MenuItem value={"University of Sri Jayawardenepura"}>
                  University of Sri Jayewardenepura
                </MenuItem>
              </Select>
            </Box>

            <Box className="signupinputf">
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
                    setPassword(e.target.value);
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
              onClick={handleSubmit}
              variant="contained"
              className="signupbtn"
            >
              <Typography>Sign Up</Typography>
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
}

export default SignUp;
