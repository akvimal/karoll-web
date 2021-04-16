import React, { useState } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "1vh",
  },
}));
function ListCourseCohort() {
  const [Stack, setStack] = useState([
    { title: "Cohort 1", status: "future" },
    { title: "Cohort 2", status: "completed" },
    { title: "Cohort 3", status: "ongoing" },
    { title: "Cohort 4", status: "completed" },
    { title: "Cohort 5", status: "completed" },
  ]);
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        {Stack.map((s) => {
          return (
            <Grid item xs={4}>
              <Paper
                variant="outlined"
                className={classes.root}
                style={{
                  marginTop: "8vh",
                  height: "20vh",

                  paddingTop: "5vh",
                  fontFamily: "sans-serif",
                  fontSize: "3vh",
                }}
              >
                <Grid container style={{ marginTop: "-4vh" }}>
                  <Grid
                    item
                    xs
                    style={{ textAlign: "center", paddingTop: "5vh" }}
                  >
                    {s.title}
                  </Grid>
                </Grid>
                <Grid container style={{ marginTop: "5vh", marginLeft: "1vh" }}>
                  <Grid item xs>
                    Status:{s.status}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ListCourseCohort;
