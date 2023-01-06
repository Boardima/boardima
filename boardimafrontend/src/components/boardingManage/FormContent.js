import { Button } from '@mui/material';
import React, { useState } from 'react';
import './formcontent.css';
import styled from '@emotion/styled';
import { green, blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ColorButton1 = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    width: '120px',
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    width: '120px',
    backgroundColor: blue[500],
    "&:hover": {
        backgroundColor: blue[700],
    },
}));

function FormContent() {

    const navigate = useNavigate();

    const navigateToBoardingManage = () => {
        navigate('/boardingManage');
      };

    return (

        <div className='page'>

            <form>

                <h2 className='form-headline'>Add a New Boarding Place</h2>

                <div className='feedback-form'>

                    <div className='form-group'>
                        <label className='form-label'>Owner Name</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Address</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group-radio'>
                        <label className='form-label'>Gender</label><br />

                        <div className='form-group-radio-content'>
                            <label for="male">Male</label>
                            <input type="radio" id="male" name="fav_language" value="male" />

                            <label for="female">Female</label>
                            <input type="radio" id="female" name="fav_language" value="female" />
                        </div>

                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Contact Number</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Description</label>
                        <input type="textarea" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to UOC</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to UOM</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to USJ</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group-radio'>
                        <label className='form-label'>Nearest Universities</label><br />

                        <div className='form-group-radio-content'>
                            <label for="uoc">UOC</label>
                            <input type="radio" id="uoc" name="uoc" value="uoc" />

                            <label for="uom">UOM</label>
                            <input type="radio" id="uom" name="uom" value="uom" />

                            <label for="usj">USJ</label>
                            <input type="radio" id="usj" name="usj" value="usj" />
                        </div>

                    </div>


                    <div className='form-group-button'>
                        <ColorButton2 onClick={navigateToBoardingManage}>CLOSE</ColorButton2>
                        <ColorButton1>SAVE</ColorButton1>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default FormContent;