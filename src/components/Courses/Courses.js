import {
  Button,
  Grid,
  Typography,
  TextField,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";
import ListCourse from "./ListCourse";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `88%`,
    transform: `translate(-15%, -38%)`,
  },
}));
function Courses() {
  const courses = useSelector((state) => state.courses);

  const classes = useStyles();
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item sm={9}>
          <Typography variant="h6" gutterBottom>
            Courses
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Link to="createnewcourses">
            <Button variant="contained" color="primary">
              Create Courses{" "}
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={2}>
          <TextField
            label="Stack"
            id="outlined-size-small"
            fullWidth={true}
            variant="outlined"
            size="small"
          />
        </Grid>
        {/* <Grid item sm={4}>
          <TextField
            size="small"
            fullWidth={true}
            id="outlined-select-currency"
            select
            label="Skill"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </TextField>
        </Grid> */}
        <Grid item sm={4}>
          <TextField
            size="small"
            fullWidth={true}
            id="outlined-select-currency"
            select
            label="Project Industry"
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
            Search
          </Button>
        </Grid>
        <Grid container spacing={2} style={{ padding: "1vw" }}>
          {courses.map((c, i) => {
            return (
              <React.Fragment key={i}>
                <ListCourse course={c}></ListCourse>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
export default Courses;
