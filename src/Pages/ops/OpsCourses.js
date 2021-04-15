
import { Button, Grid, Typography,TextField, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
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
function Courses() {
  const [jobroles, setjobroles] = useState([
    {
      title: "Skill A",
      stack:  "Stack 1 , Stack 2",
      
    },
    {
      title: "Skill B",
      stack:  "Stack 1 , Stack 2",
    },
    
  ]);
  const classes = useStyles();
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Courses 1
      </Typography>

    <Grid container spacing={3}>
    <Grid item sm={2}>
    <TextField
                label="Stack"
                id="outlined-size-small"
                fullWidth={true}
                variant="outlined"
                size="small"
              />
    </Grid>
    <Grid item sm={4}>
    <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Skill"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
    </Grid>
    <Grid item sm={4}>
    <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Project Industry"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
    </Grid>
    <Grid item sm={2}>
    <Button variant="contained" color="primary">
                Search
              </Button>
              </Grid>
              <Grid container spacing={3}
              style={{marginLeft:"1vh"}}> 
              <Grid item sm={3}>
                 <Paper variant="outlined" className={classes.root}
                  style={{marginTop:"6vh",height:"16vh", textAlign:"center", paddingTop:"5vh",
                  fontFamily:"sans-serif",fontSize:"3vh"}}> Course 1 </Paper> 
                  </Grid> 
                  <Grid item sm={3}> 
                  <Paper variant="outlined" className={classes.root}
                   style={{marginTop:"6vh",height:"16vh",textAlign:"center", paddingTop:"5vh",
                   fontFamily:"sans-serif",fontSize:"3vh"}}> Course 2 </Paper> 
                   </Grid> 
                   <Grid item sm={3}>
                      <Paper variant="outlined" className={classes.root} 
                      style={{marginTop:"6vh",height:"16vh",textAlign:"center", 
                      paddingTop:"5vh",fontFamily:"sans-serif",fontSize:"3vh"}}> Course 3 </Paper> 
                      </Grid> </Grid>
              </Grid>
              </div>
  );
  
}
              export default Courses;