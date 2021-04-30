import React from "react";
import { Grid, TextField, TextareaAutosize, Button } from "@material-ui/core";
import ListFeatures from "./ListFeatures";
import { Link } from "react-router-dom";
function FormCreateProject() {
  return (
    <div style={{ paddingRight: "15px" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <TextField
            label="Title"
            fullWidth={true}
            id="outlined-size-small"
            // defaultValue="Topics"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Industry"
            id="outlined-size-small"
            // defaultValue="Topics"
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
      <TextareaAutosize
        rowsMin={4}
        style={{
          width: "100%",
          height: "50%",
          marginTop: "2vh",
          borderColor: "darkgray",
          borderRadius: "4px",
          marginBottom: "1vh",
        }}
      ></TextareaAutosize>
      <label> Features</label>
      <Grid container spacing={3}>
        <Grid item xs>
          <TextField
            label="User Role"
            id="outlined-size-small"
            // defaultValue="Topics"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Module / Component"
            id="outlined-size-small"
            // defaultValue="Topics"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Title"
            id="outlined-size-small"
            // defaultValue="Topics"
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
      <TextareaAutosize
        rowsMin={4}
        style={{
          width: "100%",
          height: "50%",
          marginTop: "2vh",
          borderColor: "darkgray",
          borderRadius: "4px",
          marginBottom: "1vh",
        }}
      ></TextareaAutosize>
      <Button size="small" variant="contained" color="primary">
        Add
      </Button>
      <ListFeatures></ListFeatures>
      <Link to="projects">
        <Button
          style={{ marginTop: "2vh" }}
          size="small"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Link>
    </div>
  );
}

export default FormCreateProject;
