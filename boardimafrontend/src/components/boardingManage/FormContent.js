import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './formcontent.css';
import styled from '@emotion/styled';
import { green, blue, blueGrey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Box, Card, CardActionArea, CardActions, CardMedia } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import { storage } from '../firebase/firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

import { v4 } from "uuid";

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

const ColorButton3 = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    width: '120px',
    backgroundColor: blueGrey[500],
    "&:hover": {
        backgroundColor: blueGrey[700],
    },
}));

function FormContent() {

    const [counter, setCounter] = useState(0);
    const dataFetchedRef = useRef(false);

    const navigate = useNavigate();

    const navigateToBoardingManage = () => {
        navigate('/boardingManage');
    };

    const [value, setValue] = React.useState(0);

    const handleChangeArrow = (event, newValue) => {
        setValue(newValue);
    };

    const [uni, setUni] = useState([]);

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    };

    // useEffect(() => {
    //     if (dataFetchedRef.current) return;
    //     dataFetchedRef.current = true;
    //     listAll(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageList((prev) => [...prev, url])
    //             })
    //         })
    //     })
    // }, []);

    const [data, setData] = useState({
        boardimID: "",
        ownerName: "",
        address: "",
        longitude: "",
        latitude: "",
        gender: "",
        contactNumber: "",
        description: "",
        busUOC: "",
        busUOM: "",
        busUSJ: "",
        nearUniUoc: "",
        nearUniUom: "",
        nearUniUsj: "",
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
        setUni([data.nearUniUoc + "," + data.nearUniUom + "," + data.nearUniUsj])
        const userData = {
            boardimID: data.boardimID,
            ownerName: data.ownerName,
            address: data.address,
            longitude: data.longitude,
            latitude: data.latitude,
            gender: data.gender,
            contactNumber: data.contactNumber,
            description: data.description,
            busUOC: data.busUOC,
            busUOM: data.busUOM,
            busUSJ: data.busUSJ,
            nearUni: uni,
            image: imageList,
        };
        axios.post("http://localhost:5000/api/boardim/", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
            alert("ok")
        });
    };

    console.log(imageList)

    return (

        <div className='page'>

            <form>

                <h2 className='form-headline'>Add a New Boarding Place</h2>

                <div className='feedback-form'>

                    <div className='form-group'>
                        <label className='form-label'>Owner ID</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="boardimID"
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Owner Name</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="ownerName"
                            value={data.ownerName}
                            onChange={handleChange}></input>
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
                                        <input type="text" required className='form-input-coordinate'
                                            name="latitude"
                                            value={data.latitude}
                                            onChange={handleChange}></input>
                                    </div>
                                    <div >
                                        <label className='form-label'>Longitude</label><br></br>
                                        <input type="text" required className='form-input-coordinate'
                                            name="longitude"
                                            value={data.longitude}
                                            onChange={handleChange}></input>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='form-group-radio'>
                        <label className='form-label'>Gender</label><br />

                        <div className='form-group-radio-content'>
                            <label for="male">Male</label>
                            <input type="radio"
                                className='radio-button'
                                id="male"
                                name="gender"
                                value="Male"
                                onChange={handleChange} />

                            <label for="female">Female</label>
                            <input type="radio"
                                className='radio-button'
                                id="female"
                                name="gender"
                                value="Female"
                                onChange={handleChange} />
                        </div>

                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Contact Number</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="contactNumber"
                            value={data.contactNumber}
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Description</label>
                        <input
                            type="textarea" required
                            className='form-input'
                            name="description"
                            value={data.description}
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to UOC</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="busUOC"
                            value={data.busUOC}
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to UOM</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="busUOM"
                            value={data.busUOM}
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Bus Route to USJ</label>
                        <input
                            type="text" required
                            className='form-input'
                            name="busUSJ"
                            value={data.busUSJ}
                            onChange={handleChange}></input>
                    </div>

                    <div className='form-group-radio'>
                        <label className='form-label'>Nearest Universities</label><br />

                        <div className='form-group-radio-content'>
                            <label for="uoc">UOC</label>
                            <input type="radio" id="uoc"
                                className='radio-button'
                                name="nearUniUoc"
                                value="uoc"
                                onChange={handleChange} />

                            <label for="uom">UOM</label>
                            <input type="radio" id="uom"
                                className='radio-button'
                                name="nearUniUom"
                                value="uom"
                                onChange={handleChange} />

                            <label for="usj">USJ</label>
                            <input type="radio" id="usj"
                                className='radio-button'
                                name="nearUniUsj"
                                value="usj"
                                onChange={handleChange} />
                        </div>

                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Boarding Place Images</label>
                        <div className='image-group'>
                            <input
                                type="file" required
                                className='form-input-image'
                                onChange={(event) => { setImageUpload(event.target.files[0]) }}
                            ></input>
                            <ColorButton3 onClick={uploadImage}>Upload Image</ColorButton3>
                        </div>
                    </div>
                    <Box sx={{
                        margin: 'auto',
                        flexGrow: 1,
                        maxWidth: { xs: 480, sm: 370 },
                        display: 'grid',
                        bgcolor: 'background.paper',
                    }}>
                        <Tabs
                            onChange={handleChangeArrow}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            {imageList.map((url) => {
                                return (
                                    <Grid item xs={3}>
                                        <Box sx={{ p: 1, m: 1 }}>
                                            <Card sx={{ width: 250, }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        image={url}
                                                        alt="green iguana"
                                                        sx={{ width: "250px", height: "150px", objectFit: "contain", pt: 2 }}
                                                    />
                                                </CardActionArea>
                                                <CardActions sx={{ m: 0, p: 0 }}>
                                                    <IconButton>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </CardActions>
                                            </Card>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Tabs>
                    </Box>
                    {/* </div> */}

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