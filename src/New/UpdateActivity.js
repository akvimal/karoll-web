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
function UpdateActivity() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Update Activity
        </Typography>
        <Typography variant="h6" gutterBottom>
          Java Collections-Lecture
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "1vh" }}>
          <Grid item sm={3}>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              label="1"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={5}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Hour"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
            </TextField>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "6vh" }}
        >
          Done
        </Button>
      </Paper>
    </div>
  );
}

export default UpdateActivity;
