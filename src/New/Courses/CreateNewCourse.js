import React from 'react';
import ListCourseDetails from './ListCourseDetails';
import { Button, Grid, Link, makeStyles, Modal, Paper, TextareaAutosize, TextField } from '@material-ui/core';
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
function CreateNewCourse() {
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
              <TextField style={{marginTop:"4vh"}}
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Text"
                variant="outlined"/>
            
            <TextField style={{marginTop:"4vh"}}
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
            <Grid container spacing={3} style={{marginTop:"1vh"}}>
                <Grid item sm={3}>
                <TextField 
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="4"
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
              <Button variant="contained" color="primary" style={{marginTop:"8vh"}}>
                Done
              </Button>
        </Paper>
         );
    return (
        <div style={{ padding: "20px" }}>
            <TextField style={{ marginTop: "5vh", marginBottom: "6vh", width: "45vh" }}
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Title"
                variant="outlined" /><br />
            <TextareaAutosize rowsMin={3} style={{ width: "80vh" }} />
             
            <Grid container spacing={3} style={{marginTop:"2vh"}}>
                <Grid item sm={3}>
                    <TextField 
                        size="small"
                        id="outlined-select-currency"
                        fullWidth={true}
                        label="Java"
                        variant="outlined" />
                </Grid>
                <Grid item sm={2} style={{marginTop:"1vh",}}>
                <text>Java</text>
                    <Link style={{ textDecoration: "underline", color: "blue", paddingLeft: "5vh" }}>X</Link>
                </Grid>
                <Grid item sm={3} style={{marginTop:"1vh"}}>
                    <text>SQL</text>
                    <Link style={{ textDecoration: "underline", color: "blue",paddingLeft: "5vh"  }}>X</Link>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginTop:"1vh",marginLeft:"10vh"}}>
            <Grid item sm={3}>
            <Button variant="contained" color="primary" onClick={handleOpen} >
            Add Activity
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
            <Grid item sm={3}>
            <Button variant="contained" color="primary">
            Show Plan
          </Button>
            </Grid>
            </Grid>
             <ListCourseDetails></ListCourseDetails>
           

        </div>
    );
}
export default CreateNewCourse;





















                    