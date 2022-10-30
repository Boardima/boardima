import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import Unicard from "./Unicard";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 7,
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

function Content() {
    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                height:"50vh"
            }}
        >
            <Item sx={{width:"25%" }}>
                <Typography >
                    <Box sx={{ fontWeight: "light", textAlign: "justify", fontSize: "16pt"}}>
                        All the boarding houses included here are places recommended by University of Colombo,Sri Lanka,
                        University of Moratuwa, Sri Lanka and  University of Sri Jayewardenepura, Sri Lanka.
                        So this will be a great opportunity for Sri Lankan university students.
                    </Box>
                </Typography>
            </Item>

            <Item><Unicard img={"/assets/uoc-logo.png"} uniname={"University of Colombo,Sri Lanka"}/></Item>
            <Item><Unicard img={"/assets/uom-logo.png"} uniname={"University of Moratuwa, Sri Lanka"}/></Item>
            <Item><Unicard img={"/assets/usj-logo.png"} uniname={"University of Sri Jayewardenepura, Sri Lanka"}/></Item>
        </Box>


    );
}

export default Content;
