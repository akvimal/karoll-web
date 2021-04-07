import React from "react";
import { Typography, Paper, Button, Grid, TextField } from "@material-ui/core";
import ListStack from "./ListStack";
function Stack() {
  return (
    <Paper variant="outlined" square style={{ padding: "10px" }}>
      {" "}
      <Typography variant="h6" gutterBottom>
        Stack
      </Typography>
      <Grid container spacing={3} style={{ marginBottom: "10px" }}>
        <Grid item xs>
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
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Stack Family"
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
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
      <ListStack></ListStack>
    </Paper>
  );
}

export default Stack;
