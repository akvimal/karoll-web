import { Grid, Paper } from "@material-ui/core";
import React from "react";

function ListCourse(props) {
  const { title } = props.course;
  return (
    <Grid item xs={3}>
      {" "}
      <Paper
        variant="outlined"
        style={{
          // marginTop: "6vh",
          height: "16vh",
          textAlign: "center",
          paddingTop: "5vh",
          fontFamily: "sans-serif",
          fontSize: "3vh",
        }}
      >
        {title}
      </Paper>
    </Grid>
  );
}

export default ListCourse;
