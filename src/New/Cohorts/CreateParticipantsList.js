import { Grid, Link, makeStyles, Modal, Paper, TextField,Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ListAddNew from './ListAddNew';
const useStyles = makeStyles ((theme) => ({
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
function CreateParticipantsList(){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const classes = useStyles();
    const body = (
        <Paper elevation={3} className={classes.paper}>
           <Typography variant="h6"  style={{ marginTop: "3vh" }} gutterBottom>
        Java Collections-Lecture
      </Typography>
            <Grid container spacing={3} style={{marginTop:"1vh"}}>
                <Grid item sm={3}>
                <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="1"
                variant="outlined"/>
                </Grid>
                <Grid item sm={5}>
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
            </Grid>
              <Button variant="contained" color="primary" style={{marginTop:"6vh"}}>
                Done
              </Button>
        </Paper>
         );
    return(
        <div style={{marginTop:"3vh"}}>
          <ListAddNew></ListAddNew>
            <Grid container spacing={2}>
         <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue"  }}>Updown</Link>
         
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
         <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}  onClick={handleOpen} > Update </Link>  
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
         </Grid>
       </Grid><br/>


       <Grid container spacing={2}
       >
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
       </Grid><br/>


       <Grid container spacing={2}
       style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}>
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
       </Grid>
 
       <Grid container spacing={2}>
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1/2 Day</Grid>
         
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
         </Grid>
       <Typography  style={{ marginTop: "3vh" }} gutterBottom>
        Apr 19
      </Typography>
       <Grid container spacing={2}
       >
          
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
         <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}  onClick={handleOpen} > Update </Link>  
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
         </Grid>
       </Grid>

       <Grid container spacing={2}
       >
          
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
       </Grid>

       <Grid container spacing={2}
       style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        marginTop:"1vh"
      }}>
          
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         1 Hour
         </Grid>
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
       </Grid>
       <Grid container spacing={2}>
        <Grid item sm={2}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Updown </Link>
         </Grid>
         <Grid item sm={2}>
         2/2 Day</Grid>
         
         <Grid item sm={3}>
         Java Colections-Lecture
         </Grid>
         <Grid item sm={3} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> X </Link>
         </Grid>
         </Grid>
        </div>
    );
}
export default CreateParticipantsList;