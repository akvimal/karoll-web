import React from "react";
import {
  Grid,
  Link,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
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
function AddActivity() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Add Activity
        </Typography>
        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          fullWidth={true}
          label="Title"
          variant="outlined"
        />

        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          select
          label="Activity Type"
          fullWidth={true}
          variant="outlined"
        >
          <option aria-label="None" value="" />
          <option value={1}>Learn</option>
          <option value={2}>Project</option>
          <option value={3}>Exercise</option>
          <option value={4}>Quiz</option>
          <option value={5}>SME connect</option>
        </TextField>

        <Grid container spacing={3} style={{ marginTop: "1vh" }}>
          <Grid item sm={6}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="Start Date"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="Start Time"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label=""
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Durations"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Hours</option>
              <option value={2}>Days</option>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="End Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="End Time"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "2vh" }}
        >
          Done
        </Button>
      </Paper>
    </div>
  );
}

export default AddActivity;
