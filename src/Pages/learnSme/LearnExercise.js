import { Button, Grid, Link, TextField } from '@material-ui/core';
import React from 'react';
function LearnExercise(){
    return(
        <div style={{ padding: "10px" }}>
     <text style={{ marginLeft:"-3vh" }} >Problem Statement</text> 
     <TextField style={{marginTop:"2vh"}}
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Topic"
           variant="outlined"
          ></TextField>
          <Grid container spacing={3} style={{marginTop:"2vh"}}>
              <Grid item sm={3}>
              <TextField 
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Topic"
           variant="outlined"
          ></TextField>
              </Grid>
              <Grid item sm={2}>
              <Button variant="contained" color="primary">
            Browse...
          </Button>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item sm={3}>  
          <Link style={{ textDecoration: "underline", color: "blue" }}> Practice Exercise1.ppt</Link>
          </Grid>
          <Grid item sm={3}>  
          <Link style={{ textDecoration: "underline", color: "blue" }}> Delete </Link>
          </Grid>
          </Grid><br/>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
    );
}

export default LearnExercise;