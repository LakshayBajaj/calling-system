import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ToggleButtons from './call-list-togglebuttons'


export default function CallLists() {
    return(
        <Container style={{overflow: 'hidden'}}>
        <Box border={2} component="div" style={{ backgroundColor: '#fff', height:'100%' }}>
        <Typography style={{padding:'2% 3%'}} variant="h6">
        Call List
        <Button style={{float:'right'}} variant="contained" >
        Search
      </Button> 
      </Typography>
                         
      
      <Box style={{margin:'2%', height:'40vh'}} border={1}>

      </Box>

      <ToggleButtons />

        </Box>
        
      </Container>
    );
}