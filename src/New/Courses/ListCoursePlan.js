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
import UpdateActivity from "../UpdateActivity";

const Plan = [
  { id: "1", hour: "1 Hour", course: "Java Colections-Lecture" },
  { id: "2", hour: "2 Hour", course: "Java Arrays-Lecture" },
  { id: "3", hour: "1 Hour", course: "Java Functions-Lecture" },
];
function ListCoursePlan() 
{
  // console.log(props.location.state);
  const [characters, updateCharacters] = useState(Plan);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              {characters.map(({ id, hour, course }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Grid
                          container
                          style={{
                            borderBottomWidth: "2px",
                            paddingBottom: "6px",
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
                              <UpdateActivity></UpdateActivity>
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
