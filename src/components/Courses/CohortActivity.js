import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ActivityTab from "./ActivityTab";
import { authenticationService } from "../../services/authentication.service";
import { useDispatch } from "react-redux";
import { getAttemptQuizScoreActivity } from "../../redux/activity/activityAction";

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
function CohortActivity() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const data = history.location.state.data;
  const [user, setuser] = useState(authenticationService.currentUserValue);
  useEffect(() => {
    dispatch(getAttemptQuizScoreActivity(user.id));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h6" gutterBottom>
            Activity
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="subtitle2" gutterBottom>
            Topic
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            {data.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography variant="subtitle2" gutterBottom>
            Description
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            {data.descrips}
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <ActivityTab activityId={data.id}></ActivityTab>
      </div>
    </div>
  );
}

export default CohortActivity;
