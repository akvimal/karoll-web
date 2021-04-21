import {
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  makeStyles,
  Paper,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import AddActivity from "../AddActivity";
import ListCoursePlan from "./ListCoursePlan";
const useStyles = makeStyles((theme) => ({
  chip: {
    //margin: "5px",
    marginLeft: "1vw",
  },
}));

function CoursePlan() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [Data, setData] = useState([
    { stack: "Java" },
    { stack: "HTML" },
    { stack: "CSS" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Course Plan
      </Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Java
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography variant="subtitle2" gutterBottom>
            Description
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            A collection is an object that can hold references to other objects.
            The collection interfaces declare the operations that can be
            performed on each type of collection. The classes and interfaces of
            the collections framework are in package java. util.
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1vh" }}>
        <Grid item xs={2}>
          <Typography variant="subtitle2" gutterBottom>
            Stack
          </Typography>
        </Grid>
        <Grid item xs>
          {Data.map((d) => {
            return <Chip className={classes.chip} label={d.stack} />;
          })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "3vh" }}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Structure
          </Typography>
        </Grid>

        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Activity
          </Button>
        </Grid>
      </Grid>

      <ListCoursePlan></ListCoursePlan>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddActivity></AddActivity>
      </Modal>
    </div>
  );
}
export default CoursePlan;
