import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { updateActivity } from "../redux/activity/activityAction";
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
function UpdateActivity(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.activity.act);
  const check = useSelector((state) => state.activity.loading);
  const [durations, setdurations] = useState();
  const [timePeriods, settimePeriods] = useState();
  const { id, title, duration, timePeriod, scheduleId } = data;
  const { courseId } = props;
  useEffect(() => {
    setdurations(duration);
    settimePeriods(timePeriod);
  }, [data, check]);

  const onUpdateHandler = () => {
    const da = {
      timePeriod: timePeriods,
      duration: durations,
    };
    dispatch(updateActivity(scheduleId, courseId, da));
  };
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Update Activity
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title ? title : ""}
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "1vh" }}>
          <Grid item sm={3}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              value={durations !== undefined ? durations : ""}
              onChange={(e) => setdurations(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={5}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="TimePeriod"
              value={timePeriods !== undefined ? timePeriods : ""}
              onChange={(e) => settimePeriods(e.target.value)}
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={`hours`}>Hours</option>
              <option value={`days`}>Days</option>
            </TextField>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "6vh" }}
          onClick={() => onUpdateHandler()}
        >
          Done
        </Button>
      </Paper>
    </div>
  );
}

export default UpdateActivity;
