import React from "react";
import {
  Typography,
  TextareaAutosize,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TaskTab from "./TaskTab";
function CreateTask() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Project Task
      </Typography>
      Show all Payments by Customer <br />
      <label style={{ color: "darkgray", marginTop: "1vh" }}>
        XYZ e-Commerce platform
      </label>
      <TextField
        label="Title"
        fullWidth={true}
        id="outlined-size-small"
        // defaultValue="Topics"
        variant="outlined"
        size="small"
      />
      <TextareaAutosize
        rowsMin={3}
        style={{
          width: "100%",
          height: "50%",
          marginTop: "2vh",
          borderColor: "darkgray",
          borderRadius: "4px",
          marginBottom: "1vh",
        }}
      ></TextareaAutosize>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            fullWidth={true}
            label="Stack Family"
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
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            fullWidth={true}
            label="Skill"
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
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            fullWidth={true}
            label="Time "
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>S</option>
            <option value={20}>M</option>
            <option value={30}>L</option>
            <option value={30}>Xl</option>
          </TextField>
        </Grid>
        <Grid item xs>
          <label>S - 1 hr, M - 2 hr, L - 4 hr, XL - 8 hr</label>
        </Grid>
      </Grid>
      <br />
      <Grid>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Grid>
      <TaskTab></TaskTab>
      <br />
      <Link to="createproject">
        <Button variant="contained" color="primary">
          Close
        </Button>
      </Link>
    </div>
  );
}

export default CreateTask;
