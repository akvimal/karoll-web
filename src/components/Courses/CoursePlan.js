import {
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  makeStyles,
  Paper,
  Modal,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCourseById } from "../../redux/course/courseAction";
import ListCoursePlan from "./CoursePlanActivityList";
import { useHistory } from "react-router";
import CoursePlanActivityList from "./CoursePlanActivityList";
import AddActivity from "../AddActivity";
import { addActivity } from "../../redux/activity/activityAction";

const useStyles = makeStyles((theme) => ({
  chip: {
    // margin: "5px",
    marginLeft: "1vw",
  },
}));

function CoursePlan(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const courses = useSelector((state) => state.course.course);
  const check = useSelector((state) => state.activity.loading);
  const [open, setOpen] = React.useState(false);

  const { id, title, descrip, tag, act } = courses;

  useEffect(() => {}, [courses, check]);
  const [activity, setactivity] = useState(act);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteCourseById(id));
    history.push({ pathname: "/courses" });
  };
  const onaddActivity = (title, type, timePeriod, duration) => {
    console.log(title, type, timePeriod, duration);
    const data = {
      id: `${Math.floor(Math.random() * 10000)}`,
      title: title,
      type: type,
      timePeriod: timePeriod,
      duration: duration,
      courseId: id,
    };
    dispatch(addActivity(data));
    // const arr = [...activity];
    // arr.push(data);
    // setactivity(arr);
    handleClose();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h6" gutterBottom>
            Course Plan
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onDeleteHandler(id)}
          >
            delete
          </Button>
        </Grid>
      </Grid>

      {/* {datas.map((c)=>{
       return <> */}

      <Grid container>
        <Grid item xs={2}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            {title}
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
            {descrip}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1vh" }}>
        <Grid item xs={2}>
          <Typography variant="subtitle2" gutterBottom>
            Stack
          </Typography>
        </Grid>
        <Grid item xs>
          {tag === undefined
            ? ""
            : tag.map((d) => {
                return (
                  <Chip className={classes.chip} key={d.id} label={d.stack} />
                );
              })}
        </Grid>
      </Grid>
      {/* </>
      })} */}

      <Grid container spacing={2} style={{ marginTop: "3vh" }}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Structure
          </Typography>
        </Grid>

        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Activity
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddActivity onaddActivity={onaddActivity}></AddActivity>
      </Modal>
      {act != undefined ? (
        <CoursePlanActivityList
          act={act}
          courseId={id}
        ></CoursePlanActivityList>
      ) : (
        ""
      )}
    </div>
  );
}
export default CoursePlan;
