import { Opacity } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import Appbar from "../stats/Appbar";
import './landingmain.css'

function LandingMain() {
    return (
        <Box>

            <Appbar />

            <div className="bgImage"></div>

            <div className="content">

                <Typography sx={{
                    color: "#F0D90D",
                    fontSize: "25pt",
                    mb:"50px",
                    background:"#0C0F0C",
                    padding:"10px",
                    borderRadius:"10px",
                    Opacity:"rgba(15, 15, 15, 0.499)"
                    
                }}>
                    Find Your Accomadations ...<br></br>

                </Typography>

                <Typography sx={{
                    color: "#F0D90D",
                    fontSize: "25pt",
                    }}
                >
                    Use our platform to find the perfect boarding<br></br>
                    that suits you<br></br>
                    We have a variety of boardings listed<br></br>
                </Typography>

            </div>


        </Box>

    );
}

export default LandingMain;
