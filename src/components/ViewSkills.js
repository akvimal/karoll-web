import React, { useState } from "react";
import { Card, Grid, Paper } from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
function ViewSkills() {
  const [skill, setskill] = useState([
    {
      title: "Explain AWS Benefits ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Beginner",
    },
    {
      title: "Develop DB Model ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Intermediate",
    },
    {
      title: "Develop DB Model ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Intermediate",
    },
    {
      title: "Explain AWS Benefits ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Beginner",
    },
  ]);
  return (
    <Grid container spacing>
      {skill.map((s, i) => {
        return (
          <Paper
            elevation={3}
            key={i}
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "350px",
              padding: "20px",
              marginBottom: "15px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={7}>
                {s.title}
              </Grid>
              <Grid item xs style={{ color: "darkgrey" }}>
                {s.level}
              </Grid>
            </Grid>

            <Grid container spacing style={{ marginTop: "1vh" }}>
              {s.stack.join(", ")}
            </Grid>

            <Grid container spacing style={{ marginTop: "2vh" }}>
              <Link to="view" style={{ textDecoration: "underline" }}>
                {" "}
                View
              </Link>
              <Link
                to="certifications"
                style={{ marginLeft: "30px", textDecoration: "underline" }}
              >
                Certifications
              </Link>
            </Grid>
          </Paper>
        );
      })}
    </Grid>
  );
}

export default ViewSkills;
