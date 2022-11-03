import { Box } from "@mui/material";
import PropTypes from 'prop-types';
import UserAppbar from "../stats/UserAppbar";
import UniDetailCard from "./UniDetailCard";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#FFFFFF'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid #FFFFFF',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
                // borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                width: "90%",
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


function FilterMain() {

    return (

        <div>

            <UserAppbar value={1} />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 15,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border:'1px solid #FFFFFF',
                    height:'60vh',
                }}
            >
                <Item><UniDetailCard /></Item>
            </Box>

        </div>

    );
}

export default FilterMain;