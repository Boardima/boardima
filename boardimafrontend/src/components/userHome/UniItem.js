import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import UniCard from './UniCard';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                m:5,
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
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

function UniItem() {
    return (
        <div style={{ width: '100%' }}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    borderRadius: 1,
                }}
            >
                <Item><UniCard uniName={"University of Colombo"} uniAddress={"College House 94, Cumaratunga Munidasa Mw Colombo 03"} uniImage={"./assets/uoc-logo.png"}/></Item>
                <Item><UniCard uniName={"University of Moratuwa"} uniAddress={"Bandaranayake Mawatha, Moratuwa 10400"} uniImage={"./assets/uom-logo.png"}/></Item>
                <Item><UniCard uniName={"University of Sri Jayawardanapura"} uniAddress={"Gangodawila, Nugegoda"} uniImage={"./assets/usj-logo.png"}/></Item>
            </Box>

        </div>

    );
}

export default UniItem;