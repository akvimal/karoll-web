import React, { useState } from "react";
import {
  Grid,
  Link,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop: "8vh",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },
}));
function AddActivity() {
  const classes = useStyles();
  const [addActivityData, setAddActivityData] = useState({
    title:"",
    activityType:"",
    time:"",
    duration:""
  }
  );
const  history = useHistory()
  const addHandler = () => {
    history.push({ state:addActivityData})
  }
  // console.log(history);
  const path = window.location.pathname;
  // console.log(path);
  // console.log(addActivityData);
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Add Activity
        </Typography>
        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          fullWidth={true}
          label="Title"
          variant="outlined"
          onChange={(e)=>setAddActivityData({...addActivityData, title:e.target.value})}
        />

        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          select
          label="Activity Type"
          fullWidth={true}
          variant="outlined"
          onChange={(e)=>setAddActivityData({...addActivityData, activityType:e.target.value})}
        >
          <option aria-label="None" value="" />
          <option value="Learn" >Learn</option>
          <option value="Project" >Project</option>
          <option value="Exercise" >Exercise</option>
          <option value="Quiz" >Quiz</option>
          <option value="SME connect" >SME connect</option>
        </TextField>

        {path === "/createcohorts" ? (
          <Grid container spacing={3} style={{ marginTop: "1vh" }}>
            <Grid item sm={6}>
              <TextField
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Start Date"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="Start Time"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ) : (
          " "
        )}
        <Grid container spacing={3} style={{ marginTop: "1vh" }}>
          <Grid item sm={3}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label=""
              variant="outlined"
              onChange={(e)=>setAddActivityData({...addActivityData, time:e.target.value})}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Durations"
              fullWidth={true}
              variant="outlined"
              onChange={(e)=>setAddActivityData({...addActivityData, duration:e.target.value})}
            >
              <option aria-label="None" value="" />
              <option value={1}>Hours</option>
              <option value={2}>Days</option>
            </TextField>
          </Grid>
        </Grid>

        {path === "/createcohorts" ? (
          <Grid container spacing={3}>
            <Grid item xs>
              <TextField
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="End Date"
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                size="small"
                id="outlined-select-currency"
                fullWidth={true}
                label="End Time"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ) : (
          " "
        )}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "2vh" }}
          onClick={()=>addHandler()}
        >
          Done
        </Button>
      </Paper>
    </div>
  );
}

export default AddActivity;
