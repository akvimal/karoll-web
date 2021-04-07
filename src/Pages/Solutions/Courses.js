import React from "react";
import { Typography,Grid,TextField,Checkbox,Button,
  Link} from "@material-ui/core";
function Courses() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
       cohorts
      </Typography><br/>
      <Grid container spacing={3}
      style={{marginLeft:"8px"}}>
      <Grid container spacing={3}>
      <Grid item sm={2}>
              <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Course"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
            </Grid>

            <Grid item sm={2}>
              <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Status"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
            </Grid>
            <Grid item sm={2}>
              <Checkbox value="checkedA" label="SME Driven" inputProps={{'aria-label':'Checkbox A'}}/>SME Driven
            </Grid>
            <Grid item sm={2}>
            <Button variant="contained" color="primary">
                Filter
              </Button>
            </Grid>
            <Grid item sm={3}>
            <Link to="createCohorts">
            <Button variant="contained" color="primary">
              Create Cohorts{" "}
            </Button>
          </Link>
            </Grid>
      </Grid>
      </Grid>
    </div>
  );
}

export default Courses;
