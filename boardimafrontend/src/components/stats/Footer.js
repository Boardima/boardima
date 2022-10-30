import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                color: "#ffffff",
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


function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                bgcolor: 'background.paper',
                height: "8vh",
                background: "#000",
            }}
        >
            <Item>Ⓒ 2022 Boardima. All right reserved.</Item>
            <Item>

                <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
                    <FacebookIcon sx={{mr:4}}/>
                    <TwitterIcon sx={{mr:4}}/>
                    <LinkedInIcon sx={{mr:4}}/>
                    <InstagramIcon sx={{mr:4}}/>
                </Box>

            </Item>
        </Box>
    );

}

export default Footer;