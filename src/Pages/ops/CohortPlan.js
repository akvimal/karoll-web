import React from "react";
import { Grid, Link } from "@material-ui/core";
function CohortPlan() {
  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item sm={2}>
          Day 1:Intro
        </Grid>
        <Grid item sm={2}>
          Objectives A
        </Grid>
        <Grid item sm={2}>
          <Link href="#">Open</Link>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item sm={2}>
          Day 2:Skill 1
        </Grid>
        <Grid item sm={2}>
          Objectives B
        </Grid>
        <Grid item sm={2}>
          <Link href="#">Close</Link>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item sm={2}>
          Day 3:Skill 2
        </Grid>
        <Grid item sm={2}>
          Objective B
        </Grid>
        <Grid item sm={2}>
          <Link href="#">Close</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default CohortPlan;
