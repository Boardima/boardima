import * as React from 'react';
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Appbar from "../stats/Appbar";
import './signin.css'


function SignIn() {

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
            <Appbar value={2} />

            <div className="bgImagesignin"></div>


            <div className="contentsignup">

                <div className="signinform">

                    <Typography className='signintitle' sx={{fontWeight:"bold", fontSize:"16pt"}}>BOARDIMA</Typography>
                    <Typography className='signintitle'>Sign Up</Typography>

                    <form>
                        <Box className='signininputf'><TextField className='signintextf' id="standard-basic" label="Username" variant="standard" /></Box>
                        <Box className='signininputf'>
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
                        <Button variant="contained" className='signinbtn'><Typography>Sign In</Typography></Button>
                    </form>

                </div>
            </div>


        </Box>
    );
}

export default SignIn;
