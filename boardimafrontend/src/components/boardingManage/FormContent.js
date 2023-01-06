import { Button } from '@mui/material';
import React, { useState } from 'react';
import './formcontent.css';
import styled from '@emotion/styled';
import { green, blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";

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

    const [data, setData] = useState({
        boardimID: "",
        address: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            boardimID: data.boardimID,
            address: data.address
        };
        axios.post("http://localhost:5000/api/boardim/", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
        });
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
                        <input
                            type="text" required
                            className='form-input'
                            name="address"
                            value={data.address}
                            onChange={handleChange}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <label>Geographic Coordinate</label>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='form-group-coordinate'>
                                    <div >
                                        <label className='form-label'>Latitude</label><br></br>
                                        <input type="text" required className='form-input-coordinate'></input>
                                    </div>
                                    <div >
                                        <label className='form-label'>Longitude</label><br></br>
                                        <input type="text" required className='form-input-coordinate'></input>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
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

                    {/* <label htmlFor="boardimaID">
                        boardimID
                        <input
                            type="text"
                            name="boardimID"
                            value={data.boardimID}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="address">
                        Address
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                        />
                    </label> */}
                    {/* <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}

                    <div className='form-group-button'>
                        <ColorButton2 onClick={navigateToBoardingManage}>CLOSE</ColorButton2>
                        <ColorButton1 onClick={handleSubmit}>SAVE</ColorButton1>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default FormContent;