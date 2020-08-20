import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import './call-list-togglebuttons.css'

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup style={{margin:'0 3% 1% 3%'}}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <Typography>Recent Calls</Typography>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
      <Typography>My Calls</Typography>
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
      <Typography>Related Calls</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
    
  );
}
