import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Modal,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import AddActivity from "../AddActivity";
import CohortActivityList from "./CohortActivityList";
import SkipSchedule from "./SkipSchedule";
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
}));
function CreateCohort() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Cohort
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Course"
            fullWidth={true}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Cohort Title"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="min participants"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="max participants"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Start Date"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Time"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="max daily hours"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <br />
      <SkipSchedule></SkipSchedule>
      <Grid
        container
        style={{
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          marginTop: "2vh",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1vh", marginBottom: "2vh" }}
        >
          Generate Schedule
        </Button>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={10}></Grid>
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
      </Grid>

      <CohortActivityList></CohortActivityList>
    </div>
  );
}
export default CreateCohort;
