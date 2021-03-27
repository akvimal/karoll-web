import React from "react";
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";
import ViewVersionAndTopics from "./ViewVersionAndTopics";
function VersionAndTopics() {
  return (
    <Paper variant="outlined" square style={{ padding: "10px" }}>
      {" "}
      <Typography variant="h6" gutterBottom>
        Version & Topics
      </Typography>
      <Grid container spacing={3} style={{ marginBottom: "10px" }}>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Stack"
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
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            label="Version"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            label="Topic"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
      <ViewVersionAndTopics></ViewVersionAndTopics>
    </Paper>
  );
}

export default VersionAndTopics;
