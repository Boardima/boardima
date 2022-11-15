import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './contentstyle.css'
import UniChart from './UniChart';
import UserChart from './UserChart';

function Content() {

    return (

        <div>
            <Box sx={{ m: '120px 0px 0px 50px', width: '100wh' }}>
                <Grid container spacing={1} >
                    <Grid xs={3}>
                        <Grid>
                            <Box className='leftbox'>Registered Users Count<br /><h6 className='count'>120</h6></Box>
                            <Box className='leftbox'>Registered Boarding Places Count<br /><h6 className='count'>20</h6></Box>
                            <Box className='leftbox'>Submitted Feedback Count<br /><h6 className='count'>100</h6></Box>
                        </Grid>

                    </Grid>
                    <Grid xs={4.5}>
                        <Box className='rightbox'>
                            <h5 className='h-chart'>Univesirty vs Boarding Places</h5>
                            <UniChart />
                        </Box>
                    </Grid>
                    <Grid xs={4.5}>
                        <Box className='rightbox'>
                            <h5 className='h-chart'>University vs Users</h5>
                            <UserChart />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}

export default Content;