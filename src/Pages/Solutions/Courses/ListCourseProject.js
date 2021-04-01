import React, { useState } from "react";
import { Grid, Link } from "@material-ui/core";
function ListCourseProject() {
  const [skill, setskill] = useState([
    { title: "Project 1" },
    { title: "Project 2" },
  ]);

  return (
    <div style={{ marginTop: "2vh" }}>
      {" "}
      {skill.map((s) => {
        return (
          <Grid
            container
            style={{
              paddingBottom: "6px",

              marginTop: "2vh",
            }}
          >
            <Grid item xs={10}>
              {s.title}{" "}
            </Grid>
            <Grid item xs>
              <Link style={{ textDecoration: "underline", color: "blue" }}>
                {" "}
                x
              </Link>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default ListCourseProject;
