import React, { useState } from "react";
import { Card, Grid, Paper } from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
function ViewJobRoles() {
  const [jobroles, setjobroles] = useState([
    {
      title: "DevOps Engineer ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Beginner",
    },
    {
      title: "Java Developer ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Intermediate",
    },
    {
      title: "Java Developer ",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Intermediate",
    },
    {
      title: "DevOps Engineer",
      stack: ["Git", "JenKins", "Unix", "Maven", "Docker"],
      level: "Beginner",
    },
  ]);
  return (
    <Grid container spacing>
      {jobroles.map((s, i) => {
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

export default ViewJobRoles;
