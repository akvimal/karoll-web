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
  const [jobroles, setjobroles] = useState([
    {
      title: "Skill A",
      stack: "Stack 1 , Stack 2",
    },
    {
      title: "Skill B",
      stack: "Stack 1 , Stack 2",
    },
  ]);

  const [courses, setcourses] = useState([
    "Course1",
    "Course2",
    "Course3",
    "Course4",
    "Course5",
  ]);
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
        <Grid item sm={4}>
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
        </Grid>
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
          {courses.map((c) => {
            return (
              <Grid item xs={3}>
                <Link to="courseplan">
                  {" "}
                  <Paper
                    variant="outlined"
                    style={{
                      // marginTop: "6vh",
                      height: "16vh",
                      textAlign: "center",
                      paddingTop: "5vh",
                      fontFamily: "sans-serif",
                      fontSize: "3vh",
                    }}
                  >
                    {c}
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
export default Courses;
