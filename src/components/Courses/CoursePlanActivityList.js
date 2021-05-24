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
import React, { useEffect, useState, memo } from "react";
import "./style.css";
import UpdateActivity from "../UpdateActivity";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteActivity,
  getByIdActivity,
  updateOrderActivity,
} from "../../redux/activity/activityAction";

function CoursePlanActivityList(props) {
  const dispatch = useDispatch();
  const { act, courseId } = props;

  const [characters, updateCharacters] = useState();

  useEffect(() => {
    updateCharacters(act);
  }, [act]);

  const onDeleteHandler = (id) => {
    dispatch(deleteActivity(id, courseId));
    // console.log(courseId, id);
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);

    dispatch(updateOrderActivity(courseId, items));
  };

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
              {characters
                ? characters.map(({ id, title, Schedule }, index) => {
                    return (
                      <Draggable
                        key={`${id}`}
                        draggableId={`${id}`}
                        index={index}
                      >
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
                              <Grid item xs={5} style={{ fontSize: "medium" }}>
                                <p>{title}</p>
                              </Grid>
                              <Grid item xs={3} style={{ fontSize: "medium" }}>
                                {Schedule.duration}-{Schedule.timePeriod}
                              </Grid>
                              <Grid item xs={2}>
                                <DeleteIcon
                                  onClick={() => onDeleteHandler(id)}
                                  style={{ color: "blue", cursor: "pointer" }}
                                ></DeleteIcon>
                              </Grid>
                              <Grid item xs={2}>
                                <Link
                                  style={{
                                    textDecoration: "underline",
                                    color: "blue",
                                  }}
                                  onClick={() => {
                                    dispatch(getByIdActivity(id), handleOpen());
                                    // handleOpen();
                                  }}
                                >
                                  {" "}
                                  Update{" "}
                                </Link>
                              </Grid>
                            </Grid>
                            {/* </div> */}
                          </li>
                        )}
                      </Draggable>
                    );
                  })
                : "loading"}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <UpdateActivity courseId={courseId}></UpdateActivity>
              </Modal>
              {/* })} */}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default CoursePlanActivityList;
