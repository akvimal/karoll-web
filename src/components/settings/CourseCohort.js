import React from "react";
import { Button, Grid, Link, Paper, makeStyles } from "@material-ui/core";
import ListCourseCohort from "./ListCourseCohort";

function CourseCohort() {
  return (
    <div style={{ padding: "20px" }}>
      <Button variant="contained" color="primary">
        Create Cohort
      </Button>

      <Grid container spacing={2} style={{ marginTop: "2vh" }}>
        <Grid item xs={3}>
          <Link
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            {" "}
            Published Cohorts
          </Link>{" "}
        </Grid>
        <Grid item xs={3}>
          <Link
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            {" "}
            Drafts Cohorts
          </Link>{" "}
        </Grid>
      </Grid>
      <ListCourseCohort></ListCourseCohort>
    </div>
  );
}

export default CourseCohort;
