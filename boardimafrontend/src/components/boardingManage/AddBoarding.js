import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

function AddBoarding() {

    const navigate = useNavigate()

    const linkBoardingForm = () => {

        navigate('/boardingform')

    }

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '40px' }}>
                <ColorButton onClick={() => linkBoardingForm()}>New Boarding</ColorButton>
            </Box>
        </div>
    );
}

export default AddBoarding;