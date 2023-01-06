import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { red, green } from '@mui/material/colors';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #FFFFFF',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};

//Colour buttons
const ColorButton1 = styled(Button)(({ theme }) => ({
    color: "#000000",
    textTransform: "none",
    backgroundColor: red[500],
    "&:hover": {
        backgroundColor: red[700],
    },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: red[500],
    "&:hover": {
        backgroundColor: red[700],
    },
}));

export default function DeletePopup(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        setOpen(props.flag);
    }, []);

    return (
        <React.Fragment>
            <ColorButton1
                style={{ marginRight: 6 }}
                onClick={handleClickOpen}
            >
                Delete
            </ColorButton1>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{textAlign: 'center', mb: '20px'}}>Do you want to delete it?</Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <ColorButton2>Yes</ColorButton2>
                        <ColorButton3 onClick={handleClose}>No</ColorButton3>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    );
}