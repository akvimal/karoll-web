import { Grid, Paper, Link } from "@material-ui/core";
import React, { useState } from "react";

function ViewStackFamily() {
  const [Stack, setStack] = useState([
    {
      familyName: "Web Dev",
      Stack: ["React", "Nade", "Mongoose"],
    },
    {
      familyName: "Web Dev",
      Stack: ["Angular", "Springboot", "Hibernate"],
    },
  ]);

  return (
    <Paper elevation={0} style={{ margin: "10px" }}>
      {Stack.map((s) => {
        return (
          <Grid
            container
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "2px",
              paddingBottom: "6px",
              borderBottomColor: "darkgray",

              marginTop: "3vh",
            }}
          >
            <Grid item xs={10}>
              {s.familyName} - {s.Stack.join(", ")}
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
    </Paper>
  );
}

export default ViewStackFamily;
