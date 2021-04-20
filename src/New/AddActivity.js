import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
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
          style={{ marginTop: "1vh" }}
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
          <Grid item xs={4}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
          <Grid item xs>
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
