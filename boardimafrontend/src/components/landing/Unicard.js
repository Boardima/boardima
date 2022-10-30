import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Unicard(props) {
    return (
        <Box sx={{ height: "300px", width: "200px" }}>
            <Box sx={{
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
                
            }}>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt="green iguana"
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.uniname}
                    </Typography>
                </CardContent> */}
            </Box>
        </Box>
    );
}

export default Unicard;