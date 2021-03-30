import React from "react";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
import ListProject from "../../components/ListProject";
function Projects() {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs>
          <Link to="createproject">
            {" "}
            <Button variant="contained" color="primary">
              create project
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            fullWidth={true}
            label="Industry"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
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
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </Grid>
      </Grid>
      <ListProject></ListProject>
    </div>
  );
}

export default Projects;
