import React, { useEffect, useState } from "react";
import CourseActivityList from "./CourseActivityList";
import {
  Button,
  Grid,
  makeStyles,
  Modal,
  Chip,
  Typography,
  TextField,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import AddActivity from "../AddActivity";
import { addCourses } from "../../redux/course/courseAction";
import { useDispatch, useSelector } from "react-redux";
import StackTag from "../StackTag";
import { fetchStack } from "../../redux/stacktag/stacktagAction";
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
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function CreateNewCourse() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchStack());
  }, []);

  const checkShowPlan = useSelector((state) => state.course.course);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [courseData, setCourseData] = useState("");

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [stackData, setstackData] = React.useState([]);
  const [activity, setactivity] = useState([]);

  const addStackHandler = (e) => {
    const cpy = [...stackData];

    cpy.push(e);
    setstackData(cpy);
    const d = {
      title: title,
      description: description,
      stack: cpy,
    };
    setCourseData(d);
    // }
  };

  const handleDelete = (id) => () => {
    setstackData((chips) => chips.filter((chip) => chip.id !== id));
  };

  const onsubmitHandler = () => {
    console.log(courseData);
    dispatch(addCourses(courseData));
    history.push({ pathname: "/courses" });
  };

  const onaddActivity = (title, type, time, duration) => {
    console.log(title, type, time, duration);
    const data = {
      id: Math.floor(Math.random() * 100),
      title: title,
      type: type,
      time: time,
      duration: duration,
    };
    const arr = [...activity];
    arr.push(data);
    setactivity(arr);
    handleClose();
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Course
      </Typography>
      <TextField
        style={{ width: "45%" }}
        size="small"
        id="outlined-select-currency"
        fullWidth={true}
        label="Title"
        variant="outlined"
        onChange={(e) => settitle(e.target.value)}
      />
      <br />
      <TextField
        style={{ marginTop: "2vh" }}
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        fullWidth={true}
        variant="outlined"
        onChange={(e) => setdescription(e.target.value)}
      />

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={4}>
          <StackTag addStackHandler={addStackHandler}></StackTag>
        </Grid>

        <Grid item xs className={classes.root}>
          {stackData.map((data, i) => {
            return (
              <li key={i}>
                <Chip
                  label={data.stack}
                  onDelete={handleDelete(data.id)}
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={8}></Grid>

        <Grid item xs>
          {stackData != "" ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => onsubmitHandler()}
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateNewCourse;
