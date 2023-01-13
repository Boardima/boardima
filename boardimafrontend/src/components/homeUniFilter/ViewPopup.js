import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { blue, yellow } from '@mui/material/colors';
import { Grid, Card, CardActionArea, CardActions, CardMedia } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

export default function ViewPopup(props) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);
  
  const handleChangeArrow = (event, newValue) => {
    setValue(newValue);
};

  React.useEffect(() => {
    setOpen(props.flag);
  }, []);

  return (
    <React.Fragment>
      <ColorButton1
        style={{ marginRight: 6 }}
        onClick={handleClickOpen}
      >
        Images
      </ColorButton1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
          <Box sx={{
                        margin: 'auto',
                        flexGrow: 1,
                        maxWidth: { xs: 480, sm: 370 },
                        display: 'grid',
                        bgcolor: 'background.paper',
                    }}>
                        <Tabs
                            onChange={handleChangeArrow}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            {props.images.map((url) => {
                                return (
                                    <Grid item xs={3}>
                                        <Box sx={{ p: 1, m: 1 }}>
                                            <Card sx={{ width: 250, }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        image={url}
                                                        alt="green iguana"
                                                        sx={{ width: "250px", height: "150px", objectFit: "contain", pt: 2 }}
                                                    />
                                                </CardActionArea>
                                                <CardActions sx={{ m: 0, p: 0 }}>
                                                    <IconButton>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </CardActions>
                                            </Card>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Tabs>
                    </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}