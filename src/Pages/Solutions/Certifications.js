import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  Card,
} from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
function Certifications() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Job Role"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Beginner</option>
            <option value={20}>Intermediate</option>
            <option value={30}>Advance</option>
          </TextField>
        </Grid>
        <Grid item xs>
          <Link to="createJobRolecertifications">
            <Button variant="contained" color="primary">
              Create Job Role certifications{" "}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="skill"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Beginner</option>
            <option value={20}>Intermediate</option>
            <option value={30}>Advance</option>
          </TextField>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary">
            Create skill certification{" "}
          </Button>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs>
          <Paper elevation={0} style={{ padding: "10px" }}>
            <Grid
              container
              style={{
                borderBottomStyle: "dotted",
                borderBottomWidth: "2px",
                paddingBottom: "6px",
                borderBottomColor: "darkgray",
              }}
            >
              <Grid items xs={2} style={{ color: "darkgrey" }}>
                {" "}
                Provider 1
              </Grid>
              <Grid items xs>
                {" "}
                Certification 1
              </Grid>
            </Grid>
          </Paper>
        </Grid>
<Grid
          item
          xs
          style={{
            borderLeftStyle: "solid",
            borderLeftWidth: "1px",
            padding: "10px",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Certification 1..
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              paddingBottom: "6px",
              color: "darkgray",
            }}
          >
            Provider 1
          </Typography>
          <Grid
            container
            style={{
              marginTop: "6px",
              color: "darkgray",
            }}
          >
            <Grid items xs>
              Attempts : 478
            </Grid>
            <Grid items xs>
              Success Rate : 87%
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ marginTop: "2vh" }}
          >
            Knowledge
          </Typography>
          <Grid
            container
            style={{
              marginTop: "6px",
            }}
          >
            <Grid items xs>
              Questions : 30
            </Grid>
            <Grid items xs>
              Duration : 30 mins
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: "6px",
            }}
          >
            <Grid items xs>
              Partial Score : No
            </Grid>
            <Grid items xs>
              Negative Score : No
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "4vh" }}>
            Question Weightage / Score Weightage
            <Grid
              container
              style={{
                borderBottomStyle: "dotted",
                borderBottomWidth: "2px",
                paddingBottom: "6px",
                borderBottomColor: "darkgray",
                color: "red",
                marginTop: "2vh",
              }}
            >
              <Grid item xs>
                Java | Collections
              </Grid>
              <Grid item xs>
                50% | 25%
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                borderBottomStyle: "dotted",
                borderBottomWidth: "2px",
                paddingBottom: "6px",
                borderBottomColor: "darkgray",
                color: "red",
                marginTop: "1vh",
              }}
            >
              <Grid item xs>
                Java | OOPS
              </Grid>
              <Grid item xs>
                50% | 75%
              </Grid>
            </Grid>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ marginTop: "3vh" }}
            >
              Application
            </Typography>
            <Grid container>
              <Grid item xs>
                Completion
              </Grid>
              <Grid item xs>
                50%
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                Requirement Clarification
              </Grid>
              <Grid item xs>
                25%
              </Grid>
            </Grid>
            <Grid container style={{ marginBottom: "2vh" }}>
              <Grid item xs>
                Coding Standards
              </Grid>
              <Grid item xs>
                25%
              </Grid>
            </Grid>
            <Grid>Minimum tasks per objective : 4</Grid>
            <Grid>Maximum tasks complexity level : Intermediate</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Certifications;
