import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Grid, Link, TextField, } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:"13vh",
  },

}));

 function ViewSelectDay() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    S: true,
    M: false,
    T: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { S, M, T } = state;
  const error = [S, M, T ].filter((v) => v).length !== 2;

  return (
    <div style={{ padding: "20px" }}>
        <Grid container spacing={3}
        style={{marginLeft:"-3vh",
          }}>
        <h6>Skip date</h6>
            <Grid item sm={1}>
      <FormControl component="fieldset"
      style={{marginLeft:"-12vh"}} >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={S} onChange={handleChange} name="S" />}
            label="S"
          />
        </FormGroup>
      </FormControl >
      </Grid>
      <Grid item sm={1}>
      <FormControl required error={error} component="fieldset" style={{marginLeft:"-14vh"}}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={M} onChange={handleChange} name="M" />}
            label="M"
          />
        </FormGroup>
      </FormControl>
      </Grid>
      <Grid item sm={1}>
      <FormControl required error={error} component="fieldset" style={{marginLeft:"-14vh"}} >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={T} onChange={handleChange} name="T" />}
            label="T"
          />
        </FormGroup> 
      </FormControl>
      </Grid>
      <Grid item sm={2}>
      <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Date"
                variant="outlined"/>
      </Grid>
      <Grid item sm={1} style={{marginTop:"1vh"}}>
          May-1
         </Grid>
         <Grid item sm={1} style={{marginTop:"1vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue"  }}>X</Link>
         
         </Grid>
         <Grid item sm={1} style={{marginTop:"1vh"}}>
          May-1
         </Grid>
         <Grid item sm={1} style={{marginTop:"1vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue"  }}>X</Link>
         
         </Grid>
         
      </Grid>
      
    </div>
  );
}
export default ViewSelectDay;