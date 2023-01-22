import React, { useState, setState } from 'react';
import { Box, Button, FormControl, FormLabel, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Appbar from "../stats/Appbar";
import './signup.css'

function SignUp() {

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [university, setUniversity] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleChangeUni = (event) => {
    setUniversity(event.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "university") {
      setUniversity(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

  }

  const handleSubmit = () => {
    console.log(firstName, lastName, university, password, confirmPassword);
  }


  return (
    <Box>
      <Appbar value={1} />

      <div className="bgImagesignup"></div>


      <div className="contentsignup">

        <div className="signupform">

          <Typography className='signuptitle'>Sign Up</Typography>

          <form>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="First Name" variant="standard"
                value={firstName}
                onChange={(e) => handleInputChange(e)} />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Last Name" variant="standard"
                value={lastName}
                onChange={(e) => handleInputChange(e)} />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Address" variant="standard" />
            </Box>
            <Box className='signuplabelf'>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" className='radiolabel' />
                <FormControlLabel value="male" control={<Radio />} label="Male" className='radiolabel' />
                <FormControlLabel value="other" control={<Radio />} label="Other" className='radiolabel' />
              </RadioGroup>
            </Box>
            <Box >
              <InputLabel id="demo-simple-select-standard-label">University</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={university}
                onChange={handleChangeUni}
                label="Age"
                className='selectmenu'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>University of Colombo</MenuItem>
                <MenuItem value={20}>University of Moratuwa</MenuItem>
                <MenuItem value={30}>University of Sri Jayewardenepura</MenuItem>
              </Select>
            </Box>
            <Box className='signupinputf'>
            <InputLabel id="demo-simple-select-standard-label">Faculty</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={university}
                onChange={handleChangeUni}
                label="Age"
                className='selectmenu'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>University of Colombo</MenuItem>
                <MenuItem value={20}>University of Moratuwa</MenuItem>
                <MenuItem value={30}>University of Sri Jayewardenepura</MenuItem>
              </Select>
            </Box>
            <Box className='signupinputf'>
              <FormControl label="Password" variant="standard" className='signuptextf'>
                <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                <Input
                  label="Password"
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Button variant="contained" className='signupbtn'><Typography>Sign Up</Typography></Button>
          </form>

        </div>
      </div>

    </Box >
  );
}

export default SignUp;
