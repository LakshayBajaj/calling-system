import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CallsCard from './callscard';
import './calls.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Calls() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{overflow: 'hidden'}}>
        <Box border={2} component="div" style={{minHeight:'800px', backgroundColor: '#fff'}}>
        <Typography style={{fontSize:'2vw', paddingLeft: '5%',paddingTop: '2%'}} variant="h6">
        911 Calls
      </Typography>
        <Box className='horizontal' container spacing={1}>
          <Grid item spacing={1} className={classes.root} style={{display: 'inline-flex', justifyContent: 'center', paddingTop: '1%',paddingbottom: '1%'}}>
            <Button variant="outlined">Join</Button>
            <Button variant="outlined">Monitor</Button>
            <Button variant="outlined">Whisper</Button>
            <Button variant="outlined">Abandoned Callback</Button>
          </Grid>
        </Box>               
      
        <Box style={{height:'100%'}} className='vertical' border={1} item spacing={1}>
          <CallsCard />
          <CallsCard />
          <CallsCard />
          <CallsCard />
          <CallsCard />
          <CallsCard />
          <CallsCard />
          <CallsCard />
      </Box>  

        </Box>
        
      </Container>
    </React.Fragment>
    
  );
}
