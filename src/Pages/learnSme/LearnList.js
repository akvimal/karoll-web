import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from "react";

import {
  
  Paper,
  TextField,
  Link,
  makeStyles,
  Modal,
} from "@material-ui/core";
import ListLookupSkill from "../Solutions/ListLookupSkill";
import LearnTopicList from './LearnTopicList';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop:"8vh",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },
}))

function LearnList(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Paper elevation={3} className={classes.paper}>
     

          <TextField style={{marginTop:"5vh",marginBottom:"6vh"}}
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Topic"
            variant="outlined"/>
        
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Ref link"
            variant="outlined"/>
          <Button variant="contained" color="primary" style={{marginTop:"18vh"}}>
            Add
          </Button>
    </Paper>

  );
    return(
        <div style={{ padding: "20px" }}>
         <Grid container spacing={2}>
         <Grid item style={{marginLeft:"102vh"}}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add Content / Ref link
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
          </Grid>
          <Grid item sm={2} style={{paddingLeft:"8vh"}}>
              Learning : 5 hrs
              </Grid>
          </Grid><br/>

    <Grid container spacing={3}>
     
      <Grid item  sm={6}>
            
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="SME/Learner"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
            </TextField>
          </Grid>
          <Grid item  sm={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Topic"
           variant="outlined"
          ></TextField>
     </Grid>
        </Grid><br/>
       <LearnTopicList></LearnTopicList>
        </div>
    );
}
export default LearnList;


