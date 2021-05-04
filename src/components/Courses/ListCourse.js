import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCoursesById } from "../../redux/course/courseAction";

function ListCourse(props) {
  const { title, id } = props.course;
  const dispatch = useDispatch();
  const history = useHistory();
  const getCourse = (id) => {
    dispatch(getCoursesById(id));
    history.push({ pathname: "/courseplan" });
  };
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
        onClick={() => getCourse(id)}
      >
        {title}
      </Paper>
    </Grid>
  );
}

export default ListCourse;
