import React from "react";
import ListCourseDetails from "./ListCourseDetails";
import {
  Button,
  Grid,
  makeStyles,
  Modal,
  Chip,
  Typography,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
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
      />

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Stack"
            variant="outlined"
          />
        </Grid>
        <Grid item xs className={classes.root}>
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
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
      <ListCourseDetails
        chipData={chipData}
        // handleDelete={handleDelete()}
      ></ListCourseDetails>
    </div>
  );
}
export default CreateNewCourse;
