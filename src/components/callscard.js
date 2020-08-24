import React,{Component} from 'react'
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


  const styles = theme => ({
    text: {
      [theme.breakpoints.down('xs')]: {
          fontSize:'12px',
        },
      [theme.breakpoints.down('sm')]: {
          fontSize:'20px',
        },
      [theme.breakpoints.up('md')]: {
          fontSize:'22px',
        },
  }
  });

class  CallsCard extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      borderColor: "lightblue",
      borderWidth: '5px'
    })
  }
    render() {
      const { classes } = this.props;
    
    return (
        <Box style={{padding: '1%',borderColor: this.state.borderColor, borderWidth: this.state.borderWidth}} onClick={this.boxClick} border={1}>
            <Grid container>
              <Grid xs={3} item>
                <Typography className={classes.text}  gutterBottom>
                    SOS Voice
                </Typography>
                <FiberManualRecordIcon style={{color:'green', fontSize:'45px' }} />
                <PhoneIcon fontSize="large" />
                <Typography className={classes.text}  gutterBottom>
                    5 Mins
                </Typography>
              </Grid>
              <Grid xs={6} item spacing={1}>
              <Typography className={classes.text}  gutterBottom>
                    Mike Tedder - 80 Main NC, New Canaan
                </Typography>
                <Typography className={classes.text}  gutterBottom>
                    Test 911 Call
                </Typography>
                <Typography className={classes.text}  gutterBottom>
                    Tarun, Mike , +1 99999 99999
                </Typography>
                
              </Grid>
              <Grid align="right" xs={3} item >
              
              <PhoneIcon style={{backgroundColor: 'lightblue', borderRadius: '100%', marginTop:'5%', padding: '4%', fontSize:'50'}} />
              <Button style={{margin:'5%',padding:'10% 0', bottom:'2.5vh' }} size='small' variant="contained">Info</Button>
              
              
              <Typography className={classes.text}  gutterBottom>
                    Resp: 3 Sec
                </Typography>                
              </Grid>
            </Grid>
        </Box>
    )
    }
}

export default withStyles(styles)(CallsCard);