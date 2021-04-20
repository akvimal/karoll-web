import {
  Grid,
  Link,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop: "8vh",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },
}));
const Plan = [
  { id: "1", hour: "1 Hour", course: "Java Colections-Lecture" },
  { id: "2", hour: "2 Hour", course: "Java Arrays-Lecture" },
  { id: "3", hour: "1 Hour", course: "Java Functions-Lecture" },
];
function ListCoursePlan() {
  const [characters, updateCharacters] = useState(Plan);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
    console.log(characters);
  }
  console.log(characters);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const body = (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Update Activity
      </Typography>
      <Typography variant="h6" gutterBottom>
        Java Collections-Lecture
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "1vh" }}>
        <Grid item sm={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="1"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Hour"
            fullWidth={true}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: "6vh" }}>
        Done
      </Button>
    </Paper>
  );
  return (
    <div style={{ marginTop: "9vh" }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* {Stack.map((s) => { */}
              {/* return ( */}
              {characters.map(({ id, hour, course }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {/* <div className="characters-thumb"> */}
                        <Grid
                          container
                          style={{
                            // borderBottomStyle: "dotted",
                            borderBottomWidth: "2px",
                            paddingBottom: "6px",
                            // borderBottomColor: "darkgray",
                            marginTop: "2vh",
                          }}
                        >
                          <Grid item xs={3} style={{ fontSize: "medium" }}>
                            <p>{hour}</p>
                          </Grid>
                          <Grid item xs={5} style={{ fontSize: "medium" }}>
                            <p>{course}</p>
                          </Grid>
                          <Grid item xs={2}>
                            <DeleteIcon style={{ color: "blue" }}></DeleteIcon>
                          </Grid>
                          <Grid item xs={2}>
                            <Link
                              style={{
                                textDecoration: "underline",
                                color: "blue",
                              }}
                              onClick={handleOpen}
                            >
                              {" "}
                              Update{" "}
                            </Link>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                              {body}
                            </Modal>
                          </Grid>
                        </Grid>
                        {/* </div> */}
                      </li>
                    )}
                  </Draggable>
                );
              })}

              {/* })} */}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default ListCoursePlan;
