import { Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";
function ListCourses() {
  const [data, setdata] = useState([
    { title: "Course 1", deliveyplan: true },
    { title: "Course 2", deliveyplan: false },
  ]);
  return (
    <div>
      {data.map((d) => {
        return (
          <Paper elevation={0} style={{ marginTop: "3vh" }}>
            {d.title}
            <Paper
              variant="outlined"
              style={{ padding: "2vh", marginTop: "1vh" }}
              square
            >
              {d.deliveyplan ? (
                <Link style={{ textDecoration: "underline" }}>
                  Delivery Plan
                </Link>
              ) : (
                <Button size="small" variant="contained" color="primary">
                  Create Delivery Plan
                </Button>
              )}
            </Paper>
          </Paper>
        );
      })}
    </div>
  );
}

export default ListCourses;
