import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ListJobRoleLookup from "./ListJobRoleLookup";
const useStyles = makeStyles((theme) => ({
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
}));
function JobRoleLookup(props) {
  const { lookup } = props;

  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        {lookup.title}
      </Typography>
      <Grid item xs={8}>
        <TextField
          size="small"
          id="outlined-select-currency"
          select
          label={lookup.filter}
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
      <Grid style={{ marginTop: "2vh" }}>
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
      <ListJobRoleLookup data={lookup.data}></ListJobRoleLookup>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={props.handleClose}
      >
        Add
      </Button>
    </Paper>
  );
}

export default JobRoleLookup;
