import React, { useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
function ViewObjectives() {
  const [obj, setobj] = useState([
    {
      stack: "Cloud",
      topic: "Basic",
      decrip:
        "Explain cloud concept such as high availability,scalability,elasticity,agility,and...",
    },
    {
      stack: "Azure",
      topic: "Architecture",
      decrip:
        "Describe core Azure architecture components such as subscription , management...",
    },
  ]);

  return (
    <Paper variant="outlined" square className="objectives">
      <Typography variant="subtitle2" gutterBottom>
        Objectives
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            fullWidth={true}
            label="Stack"
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
            label="Topics"
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
            Filter
          </Button>
        </Grid>
      </Grid>

      {obj.map((o) => {
        return (
          <Paper
            elevation={0}
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "3px",
              borderBottomColor: "darkgray",
              marginTop: "30px",
            }}
          >
            {o.decrip}
            <Grid
              container
              spacing={3}
              style={{ marginTop: "1vh", marginBottom: "1vh" }}
            >
              <Grid item xs={5} style={{ color: "darkgrey" }}>
                {o.stack} | {o.topic}
              </Grid>

              <Grid item xs>
                <Link to="content" style={{ textDecoration: "underline" }}>
                  {" "}
                  Content
                </Link>
                <Link
                  to="evaluation"
                  style={{ marginLeft: "30px", textDecoration: "underline" }}
                >
                  Evaluations
                </Link>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Paper>
  );
}

export default ViewObjectives;
