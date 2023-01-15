import * as React from 'react';
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Appbar from "../stats/Appbar";
import './signup.css'

function SignUp() {

  const [values, setValues] = React.useState({
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

  return (
    <Box>
      <Appbar value={1} />

      <div className="bgImagesignup"></div>


      <div className="contentsignup">

        <div className="signupform">

          <Typography className='signuptitle'>Sign Up</Typography>

          <form>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="First Name" variant="standard" />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Last Name" variant="standard" />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Address" variant="standard" />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Gender" variant="standard" />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="University" variant="standard" />
            </Box>
            <Box className='signupinputf'>
              <TextField className='signuptextf' id="standard-basic" label="Faculty" variant="standard" />
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

    </Box>
  );
}

export default SignUp;
