import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

  
const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

function AddBoarding() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '40px' }}>
                <ColorButton >New Boarding</ColorButton>
            </Box>
        </div>
    );
}

export default AddBoarding;