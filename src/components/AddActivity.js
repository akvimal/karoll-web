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
function AddActivity(props) {
  const { onaddActivity } = props;
  const classes = useStyles();
  const [title, settitle] = useState("");
  const [type, settype] = useState("");
  const [descrip, setdescrip] = useState("");
  const [timePeriod, settimePeriod] = useState("");
  const [duration, setduration] = useState("");
  const path = window.location.pathname;
  console.log(path);
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
          value={title}
          label="Title"
          variant="outlined"
          onChange={(e) => settitle(e.target.value)}
        />

        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-multiline-static"
          label="Description"
          value={descrip}
          multiline
          rows={4}
          fullWidth={true}
          variant="outlined"
          onChange={(e) => setdescrip(e.target.value)}
        />

        {/* <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          select
          value={type}
          label="Activity Type"
          fullWidth={true}
          onChange={(e) => settype(e.target.value)}
          variant="outlined"
        >
          <option aria-label="None" value="" />
          <option value={"Learn"}>Learn</option>
          <option value={"Project"}>Project</option>
          <option value={"Exercise"}>Exercise</option>
          <option value={"Quiz"}>Quiz</option>
          <option value={"SME connect"}>SME connect</option>
        </TextField> */}

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
              value={duration}
              onChange={(e) => setduration(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Durations"
              fullWidth={true}
              value={timePeriod}
              variant="outlined"
              onChange={(e) => settimePeriod(e.target.value)}
            >
              <option aria-label="None" value="" />
              <option value={"hours"}>Hours</option>
              <option value={"days"}>Days</option>
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
          onClick={() => {
            onaddActivity(title, type, timePeriod, duration, descrip);
            settitle("");
            settype("");
            settimePeriod("");
            setduration("");
          }}
        >
          Done
        </Button>
      </Paper>
    </div>
  );
}

export default AddActivity;
