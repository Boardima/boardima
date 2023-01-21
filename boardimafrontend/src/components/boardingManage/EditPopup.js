import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { autocompleteClasses, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { blue} from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import EditFormContent from './EditFormContent';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',                                                                         
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 450,
  bgcolor: 'background.paper',
  border: '1px solid #FFFFFF',
  boxShadow: 24,
  p:2,
  borderRadius: '10px',
};

const stylehead = {
  color: "green",
  fontSize: 16,
}

const styletwo = {
  marginTop: 2,
  height: 400,
  overflow: "hidden",
  overflowY: "scroll",
}

//Colour buttons
const ColorButton1 = styled(Button)(({ theme }) => ({
  color: "#000000",
  textTransform: "none",
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

export default function EditPopup(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(props.flag);
  }, []);


  const filteredData = props.tableData.filter(
    (item) => item.id === props.boardimID
  );


  return (
    <React.Fragment>
      <Button
        style={{ marginRight: 6 }}
        onClick={handleClickOpen}
      >
        <EditIcon sx={{color: "green"}}></EditIcon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={stylehead}>Edit Boarding Place Details</Typography>
          <Box sx={styletwo}>
            <EditFormContent data={filteredData} boardimID={props.boardimID}/>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}