import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5vh",
    borderRadius: "1vh",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
function ListCohorts(props) {
  const classes = useStyles();
  const { s } = props;
  return (
    <div>
      <Link to="cohortview" style={{ textDecoration: "none" }}>
        <Paper
          variant="outlined"
          className={classes.root}
          style={{ marginTop: "8vh", height: "16vh" }}
        >
          <Grid container style={{ width: "42vh" }}>
            <Grid item>{s.title}</Grid>
            <Grid container style={{ marginTop: "-4vh" }}>
              <Grid
                item
                sm={9}
                style={{ marginLeft: "8vh", fontSize: "larger" }}
              >
                {s.course}
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "-4vh" }}>
              <Grid item sm={9}>
                Learners:{s.learners}
              </Grid>
              <Grid item sm={3}>
                SME:{s.Sme}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </div>
  );
}

export default ListCohorts;
