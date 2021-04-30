import React from "react";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListCourses from "../../components/ListCourses";
function Courses() {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Courses
          </Typography>
        </Grid>
        <Grid item xs>
          <Link to="createcourse">
            {" "}
            <Button variant="contained" color="primary">
              create course
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
            label="Proficency Level"
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
            label="Stack"
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
      <ListCourses></ListCourses>
    </div>
  );
}

export default Courses;
