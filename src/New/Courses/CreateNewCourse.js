import React, { useState } from "react";
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

 
const history=useHistory();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [chipData, setChipData] = React.useState([
  //   { key: 0, label: "Angular" },
  //   { key: 1, label: "jQuery" },
  //   { key: 2, label: "Polymer" },
  //   { key: 3, label: "React" },
  //   { key: 4, label: "Vue.js" },
  // ]);
  

 const [courseData, setCourseData] = useState({
   title:"",
   description:"",stack:[]
 })
//  const [activityData, setActivityData] = useState({
//    title:"",
//    activityType:"",
//    duration:"",
//    description:""
//  })

//  const [stack, setStack] = useState([]);
 const [activityStack, setActivityStack] = useState([])
 console.log(courseData);
  const onAddStack = (event) => {
    const e = event.target.value;
    return event.key === "Enter" ? setCourseData({...courseData,stack:e}) : null;
    
  };

  // const onActivityKey = (event) => {
  //   const e = event.target.value;
  //   return event.key === "Enter" ? setActivityStack((arr) => [...arr, e]) : null;
    
  // };

  const handleDelete = (chipToDelete) => () => {
    console.log(chipToDelete);
    // setStack((chips) =>
    //   chips.filter((chip) => chip !== chipToDelete)
    // );
  };
  const onsubmitHandler = () => {
    // setCourseData({...courseData, stack})
    history.push({ pathname: "/courseplan", state: courseData });
  }
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
        onChange={(e)=>setCourseData({...courseData, title:e.target.value})}
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
        onChange={(e)=>setCourseData({...courseData, description:e.target.value})}
      />

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Stack"
            variant="outlined"
            // onChange={(e)=>setCourseData({...courseData, stack:e.target.value})}
            onKeyPress={(e) => onAddStack(e)}
          />
        </Grid>

        
        <Grid item xs className={classes.root}>
          {courseData.stack.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  label={data}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            );
          })}
          {/* {name !== undefined ? name.map((text) => <b> {text} </b>) : null} */}
        </Grid>
      </Grid>


      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={8}></Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Activity
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AddActivity></AddActivity>
          </Modal>
        </Grid>
        <Grid item xs>
          <Link to="courseplan">
            <Button variant="contained" color="primary">
              Show Plan
            </Button>
          </Link>
        </Grid>
      </Grid>
      <CourseActivityList
        // handleStack={(e)=>onActivityKey(e)}
        // chipData={chipData}
        // handleDelete={handleDelete()}
      ></CourseActivityList>
      <Button variant="contained" color="primary" onClick={()=>onsubmitHandler()} >
            Submit
          </Button>
    </div>
  );
}
export default CreateNewCourse;
