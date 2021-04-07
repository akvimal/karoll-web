import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Radio,
  makeStyles,
  FormControlLabel,
  RadioGroup,
  Paper,
  Modal,
  Checkbox,
} from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
import clsx from "clsx";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CreateCourseProject from "./ListCourseProject";
import CreateCourseSkill from "./ListCourseSkill";
import CourseProject from "./CourseProject";
import CourseSkill from "./CourseSkill";
import ListJobRoleLookup from "./ListJobRoleLookup";
import JobRoleLookup from "./JobRoleLookup";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `26vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },

  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  title: {
    paddingRight: theme.spacing(1),
    flex: "1 1 100%",
    fontWeight: "bold",
    paddingTop: theme.spacing(2),
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function CreateCourse() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [lookup, setlookup] = useState("Job Role");
  const [JobRole, setJobRole] = useState({
    title: "Job Role Lookup",
    filter: "Stack Family",
    data: [
      { title: "Job Role 1" },
      { title: "Job Role 2" },
      { title: "Job Role 3" },
      { title: "Job Role 4" },
    ],
  });
  const [Project, setProject] = useState({
    title: "Project Lookup",
    filter: "Industry",
    data: [
      { title: "Project 1" },
      { title: "Project 2" },
      { title: "Project 3" },
      { title: "Project 4" },
    ],
  });
  const [Skill, setSkill] = useState({
    title: "Skill Lookup",
    filter: "Stack",
    data: [
      { title: "Skill 1" },
      { title: "Skill 2" },
      { title: "Skill 3" },
      { title: "Skill 4" },
    ],
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const lookupProject = () => {
    setlookup("Project");
    handleOpen();
  };
  const handleClose = () => {
    setOpen(false);
    setlookup("Job Role");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Course
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            label="Title"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Proficency Level"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </TextField>
        </Grid>
      </Grid>
      <RadioGroup
        defaultValue="Job Rol"
        value={lookup}
        style={{ marginTop: "2vh" }}
        name="customized-radios"
        onChange={(e) => setlookup(e.target.value)}
      >
        <Grid container style={{ paddingLeft: "1vh" }}>
          <Grid item xs={2}>
            <FormControlLabel
              value="Job Role"
              control={<StyledRadio />}
              label="Job Role"
            />
          </Grid>

          <Grid item xs={1}>
            <FormControlLabel
              value="Skill"
              control={<StyledRadio />}
              label="Skill"
            />
          </Grid>
          <Grid item xs>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Lookups
            </Button>
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <JobRoleLookup
              handleClose={handleClose}
              lookup={
                lookup === "Job Role"
                  ? JobRole
                  : lookup === "Skill"
                  ? Skill
                  : Project
              }
            ></JobRoleLookup>
          </Modal>
        </Grid>
      </RadioGroup>

      <CourseSkill></CourseSkill>
      <CourseProject
        handleClose={handleClose}
        handleOpen={handleOpen}
        lookupProject={lookupProject}
      ></CourseProject>

      <Link to="courses" style={{ marginTop: "2vh" }}>
        <Button size="small" variant="contained" color="primary">
          Submit
        </Button>
      </Link>
    </div>
  );
}

export default CreateCourse;
