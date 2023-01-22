import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function MapContent(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const lat = 6.341530260094496
    const lng = 80.23768223058245

    React.useEffect(() => {
        const iframeData = document.getElementById("iframeid")
        const lat = props.lat
        const lng = props.lng
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
    }, []);

    console.log(props.lat,props.lng)

    return (
        <Box>
            <iframe width="598" height="498" id="iframeid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            {/* 6.341530260094496, 80.23768223058245 */}
        </Box>
  );
}