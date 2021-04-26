import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  TextField,
  Checkbox,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ListCourseSkill from "../Solutions/Courses/ListCourseSkill";
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

function Cohorts() {
  const history = useHistory();
  console.log(history);
  const path = history.location.pathname;
  console.log(path);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [jobroles, setjobroles] = useState([
    {
      title: "Cohort 1",
      course: "Data Science",
      learners: 10,
      Sme: 3,
    },
    {
      title: "Cohort 2",
      course: "Java Programming",
      learners: 20,
      Sme: 3,
    },
    {
      title: "Cohort 3",
      course: "web framework",
      learners: 2,
      Sme: 3,
    },
  ]);
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item sm={9}>
          <h5>Cohorts</h5>
        </Grid>
        <Grid item sm={3}>
          <Link to="createCohorts">
            <Button variant="contained" color="primary">
              Create Cohorts{" "}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            size="small"
            fullWidth={true}
            id="outlined-select-currency"
            select
            label="Course"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            size="small"
            fullWidth={true}
            id="outlined-select-currency"
            select
            label="Status"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </TextField>
        </Grid>

        <Grid item sm={2}>
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginLeft: "-5vh" }}>
        {jobroles.map((s, i) => {
          return (
            <Link style={{ textDecoration: "none" }}>
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
          );
        })}
      </Grid>
    </div>
  );
}

export default Cohorts;
