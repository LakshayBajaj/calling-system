import React from 'react';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';

export default function CallsCard() {
    return (
        <Box  style={{margin: '2% 1%', padding: '1%'}} border={1}>
            <Grid container>
              <Grid xs={3} item spacing={1}>
                <Typography variant="subtitle2" gutterBottom>
                    SOS Voice
                </Typography>
                <FiberManualRecordIcon style={{color:'green',fontSize:"40" }} />
                <PhoneIcon fontSize="large" />
                <Typography variant="subtitle2" gutterBottom>
                    5 Mins
                </Typography>

              </Grid>
              <Grid xs={6} item spacing={1}>
              <Typography variant="subtitle2" gutterBottom>
                    Mike Tedder - 80 Main NC, New Canaan
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Test 911 Call
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Tarun, Mike , +1 99999 99999
                </Typography>
                
              </Grid>
              <Grid xs={3} item >
              
              <PhoneIcon style={{backgroundColor: 'lightblue', borderRadius: '100%', marginTop:'5%', padding: '4%', fontSize:'50'}} />
              <Button style={{margin:'5%',padding:'10% 0', bottom:'2.5vh' }} size='small' variant="contained">Info</Button>
              
              
              <Typography align="right"  variant="subtitle2" gutterBottom>
                    Resp: 3 Sec
                </Typography>                
              </Grid>
            </Grid>
             
        </Box>
    )
}