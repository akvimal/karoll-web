import React, { useState } from "react";
import Progressbar from "./Progressbar";
import { Card, CardContent, CardHeader, Grid, makeStyles, Paper, Select, TextField, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
   
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `88%`,
    transform: `translate(-15%, -38%)`,
  },
}))
function MyCohorts() {
  const [option, setOption] = useState(null);
  const options = [
    { value: "Ongoing Cohort", label: "Ongoing Cohort" },
    { value: "Current Cohort", label: "Current Cohort" },
    { value: "Upcoming Cohort", label: "Upcoming Cohort" },
  ];
  const data = [
    {
      title: "Ongoing Cohort",
    },
    {
      title: "Current Cohort",
    },
    {
      title: "Upcoming Cohort",
    },
  ];
  const classes = useStyles();
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        My Cohorts
      </Typography>
      <Grid container spacing={3}
      style={{marginTop:"3vh"}}>
        <Grid item sm={3}>
      <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Status"
                variant="outlined"
              >
                <option aria-label="None"value="" />
                <option value={10}>Ongoing</option>
                <option value={20}>Completed</option>
                <option value={30}>Future</option>
              </TextField>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item sm={3}>
                 <Paper variant="outlined" className={classes.root}
                  style={{marginTop:"3vh",height:"18vh",textAlign:"center",fontFamily:"sans-serif",fontSize:"3vh",paddingTop:"7vh"}}> Cohort 1 / Course 1 
                  </Paper>
                  <Progressbar></Progressbar> 
                  </Grid> 
                  <Grid item sm={3}>
                 <Paper variant="outlined" className={classes.root}
                  style={{marginTop:"3vh",height:"18vh",textAlign:"center",fontFamily:"sans-serif",fontSize:"3vh",paddingTop:"7vh"}}> Cohort 2 / Course 1 
                  </Paper> 
                 <Progressbar></Progressbar>
                  </Grid> 
                  <Grid item sm={3}>
                 <Paper variant="outlined" className={classes.root}
                 style={{marginTop:"3vh",height:"18vh",textAlign:"center",fontFamily:"sans-serif",fontSize:"3vh",paddingTop:"7vh"}} > Cohort 3 / Course 1
                  </Paper> 
                 <Progressbar></Progressbar>
                  </Grid> 
          </Grid>
      
    </div>
  );
}

export default MyCohorts;
