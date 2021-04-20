import { Grid, Link, makeStyles, Modal, Paper, TextField,Button, Typography } from '@material-ui/core';
import React from 'react';
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
function ListAddNew(){
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

          <Grid container spacing={3} style={{marginTop:"2vh"}}>
          <Grid item sm={6}>
          <TextField 
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="Start"
              variant="outlined"/>
          </Grid>
          <Grid item sm={6}>
          <TextField 
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="Start Time"
              variant="outlined"/>
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop:"2vh"}}>
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
    return(
<div style={{marginTop:"3vh"}}>
<Grid container spacing={3}>
 <Grid item sm={8}>
<Typography   gutterBottom>
Apr 18
</Typography>
</Grid>
<Grid item sm={4}>
<Button variant="contained" color="primary"  onClick={handleOpen} style={{marginTop:"1vh" ,marginBottom:"3vh"}}>
 Add New
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
</Grid>
</div>
    );
}
 export default ListAddNew;
 