import React from "react";
import ListCourseProject from "./ListCourseProject";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
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

function CourseProject(props) {
  const { handleOpen, lookupProject } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper
        elevation={0}
        style={{
          borderBottomStyle: "dotted",
          borderBottomWidth: "3px",
          borderBottomColor: "darkgray",
          marginTop: "10px",
          paddingBottom: "2vh",
          marginBottom: "2vh",
        }}
        square
      >
        <Grid container>
          <Grid item xs>
            <Typography
              className={classes.title}
              variant="h7"
              id="tableTitle"
              component="div"
            >
              Project
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={lookupProject}
            >
              Lookups
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <ListCourseProject></ListCourseProject>
      <div
        style={{
          marginTop: "2vh",
          marginBottom: "2vh",
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
        }}
      ></div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="include certification"
      />
      <Grid item xs={3} style={{ marginTop: "2vh", marginBottom: "1vh" }}>
        <TextField
          size="small"
          id="outlined-select-currency"
          select
          label="Certification Provider"
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
    </div>
  );
}

export default CourseProject;
