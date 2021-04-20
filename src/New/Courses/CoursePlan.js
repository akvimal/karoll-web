import { Typography,Grid, TextField, Button } from '@material-ui/core';
import React from 'react';
import ListCoursePlan from './ListCoursePlan';
function CoursePlan(){
    return(
        <div style={{ padding: "20px" }}>
            <Typography  style={{ marginTop: "3vh" }} gutterBottom>
        Title
      </Typography> 
      <Typography  style={{ marginTop: "3vh" }} gutterBottom>
        Desc
      </Typography>
     <Grid container spacing={3}>
        <Grid item sm={2}>
          <Typography  style={{ marginTop: "3vh" }} gutterBottom>
        Java
      </Typography>
      </Grid>
      <Grid item sm={3}>
          <Typography  style={{ marginTop: "3vh" }} gutterBottom>
        SQL
      </Typography>
      </Grid>
      </Grid> 
      <Typography variant="h5"  style={{ marginTop: "3vh" }} gutterBottom>
        Structure
      </Typography>
      <Grid container spacing={3}
      style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",marginTop:"3vh"}}>
       <Grid item sm={1}>
       <TextField 
                size="small"
                id="outlined-select-currency"
                label=" 1 "
                variant="outlined"/>
       </Grid>
       <Grid item sm={2}>
       <TextField 
              size="small"
              id="outlined-select-currency"
              select
              label="Hour"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
              </TextField>
       </Grid>
       <Grid item sm={7}>
       <TextField 
              size="small"
              id="outlined-select-currency"
              select
              label="Activity Type"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
              </TextField>
       </Grid>
       <Grid item sm={2}>
       <Button variant="contained" color="primary" >
            +
          </Button>
          <div style={{marginTop:"6vh"}}> </div>
       </Grid>
      </Grid>
      <ListCoursePlan></ListCoursePlan>
        </div>
    );
}
 export default CoursePlan;