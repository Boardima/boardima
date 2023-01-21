import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { blue} from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',                                                                         
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #FFFFFF',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

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
          <Box>
            data
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}