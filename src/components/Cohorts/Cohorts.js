import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  TextField,
  Checkbox,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ListCohorts from "./ListCohorts";

function Cohorts() {
  const history = useHistory();

  const path = history.location.pathname;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [jobroles, setjobroles] = useState([
    {
      title: "Cohort 1",
      course: "Data Science",
      learners: 10,
      Sme: 3,
    },
    {
      title: "Cohort 2",
      course: "Java Programming",
      learners: 20,
      Sme: 3,
    },
    {
      title: "Cohort 3",
      course: "web framework",
      learners: 2,
      Sme: 3,
    },
  ]);
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item sm={9}>
          <h5>Cohorts</h5>
        </Grid>
        <Grid item sm={3}>
          <Link to="createcohorts">
            <Button variant="contained" color="primary">
              Create Cohorts{" "}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
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

        <Grid item xs={3}>
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
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginLeft: "-5vh" }}>
        {jobroles.map((s, i) => {
          return <ListCohorts s={s}></ListCohorts>;
        })}
      </Grid>
    </div>
  );
}

export default Cohorts;
