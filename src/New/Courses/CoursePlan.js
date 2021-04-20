import {
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import ListCoursePlan from "./ListCoursePlan";
const useStyles = makeStyles((theme) => ({
  chip: {
    //margin: "5px",
    marginLeft: "1vw",
  },
}));

function CoursePlan() {
  const classes = useStyles();
  const [Data, setData] = useState([
    { stack: "Java" },
    { stack: "HTML" },
    { stack: "CSS" },
  ]);

  const body = <Paper elevation={3} className={classes.paper}></Paper>;
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Course Plan
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body 1"
            gutterBottom
            style={{ fontSize: "1.1rem" }}
          >
            Java Collections
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body 1"
            gutterBottom
            style={{ fontSize: "1.1rem" }}
          >
            A collection is an object that can hold references to other objects.
            The collection interfaces declare the operations that can be
            performed on each type of collection. The classes and interfaces of
            the collections framework are in package java. util.
          </Typography>
        </Grid>
      </Grid>
      {Data.map((d) => {
        return (
          <Chip
            className={classes.chip}
            label={d.stack}

            // onDelete={handleDelete}
          />
        );
      })}

      <Typography variant="h6" style={{ marginTop: "3vh" }} gutterBottom>
        Structure
      </Typography>

      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "145vh" }}
      >
        Add Activity
      </Button>

      <ListCoursePlan></ListCoursePlan>
    </div>
  );
}
export default CoursePlan;
