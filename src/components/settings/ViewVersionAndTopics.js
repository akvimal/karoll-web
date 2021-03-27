import React, { useState } from "react";
import { Paper, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "5px",
  },
}));

function ViewVersionAndTopics() {
  const classes = useStyles();
  const [Data, setData] = useState([]);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div>
      1.0
      <Paper elevation={0} style={{ padding: "10px" }}>
        <Chip className={classes.chip} label="AWT" onDelete={handleDelete} />
        <Chip className={classes.chip} label="Thread" onDelete={handleDelete} />
      </Paper>
      <br />
      1.8
      <Paper elevation={0} style={{ padding: "10px" }}>
        <Chip className={classes.chip} label="Lamda" onDelete={handleDelete} />
      </Paper>
    </div>
  );
}

export default ViewVersionAndTopics;
