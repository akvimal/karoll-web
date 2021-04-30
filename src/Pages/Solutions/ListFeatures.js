import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import {Link } from "react-router-dom";
function ListFeatures() {
  const [data, setdata] = useState([
    { userRole: "Annonymous", module: "Site", feature: "Feature 1" },
    { userRole: "Customer", module: "Payments", feature: "Feature 2" },
  ]);
  return (
    <div>
      {data.map((d) => {
        return (
          <Paper
            elevation={0}
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "3px",
              paddingBottom: "6px",
              borderBottomColor: "darkgray",
              marginTop: "15px",
            }}
          >
            <Grid container spacing={3} style={{ marginTop: "1vh" }}>
              <Grid item xs>
                <Grid container spacing={3}>
                  <Grid item xs>
                    {d.userRole}
                  </Grid>
                  <Grid item xs>
                    {d.module}
                  </Grid>
                  <Grid item xs={6}>
                    {d.feature}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={2}>
                <Link
                  to="createtask"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  {" "}
                  Tasks
                </Link>
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    marginLeft: "30px",
                  }}
                >
                  x
                </Link>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}

export default ListFeatures;
