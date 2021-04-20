import { Button, Checkbox, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import CreateParticipantsList from './CreateParticipantsList';
import ViewSelectDay from './ViewSelectDay';
function CreateCohort (){
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <div style={{ padding: "20px" }}>
          <Typography variant="h6"  style={{ marginTop: "3vh" }} gutterBottom>
        Create Cohort
      </Typography>  
      <Grid container spacing={3}
      >
          <Grid item sm={3}>
          <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Course"
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
          <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Hourly"
                variant="outlined"/>
              </Grid>
      </Grid><br/>
      <Grid container spacing={3}>
      <Grid item sm={4}>
          <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Title"
                variant="outlined"/>
              </Grid>
              <Grid item sm={2}>
              <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="min participants"
                variant="outlined"/>
              </Grid>
              <Grid item sm={2}>
              <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="max participants"
                variant="outlined"/>
            </Grid>    
      </Grid><br/>

      <Grid container spacing={3}
      >
      <Grid item sm={3}>
          <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Apr 18"
                variant="outlined"/>
              </Grid>
              <Grid item sm={3}>
              <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="10.00"
                variant="outlined"/>
              </Grid>
              <Grid item sm={3}>
              <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="max daily hours"
                variant="outlined"/>
            </Grid>    
      </Grid><br/>
   <ViewSelectDay></ViewSelectDay>
   <Grid container style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",}}
        >
   <Button variant="contained" color="primary" style={{marginTop:"1vh" ,marginBottom:"2vh"}}>
                Generate Schedule
              </Button>
              </Grid><br/>
        <CreateParticipantsList></CreateParticipantsList>
    
        </div>
    );
}
 export default CreateCohort;