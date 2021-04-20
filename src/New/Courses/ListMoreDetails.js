import { Button, Grid, Link, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
function ListMoreDetails(){
    return(
        <div style={{ padding: "10px" }}>
     
     <TextareaAutosize rowsMin={3} style={{ width: "140vh" }} />

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
              <Grid item sm={2} style={{marginTop:"1vh"}}>
              <text>Programming</text>
                    <Link style={{ textDecoration: "underline", color: "blue", paddingLeft: "5vh" }}>X</Link>
              </Grid>
          </Grid>
        </div>
    );
}

export default ListMoreDetails;