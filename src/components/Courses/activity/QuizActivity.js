import {
  RadioGroup,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deleteQuizActivity,
  fetchQuizActivity,
} from "../../../redux/activity/activityAction";
import AddQuiz from "./AddQuiz";

function QuizActivity(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const load = useSelector((state) => state.activity.quizLoading);
  const data = useSelector((state) => state.activity.QuizActivityData);
  const loaddelete = useSelector((state) => state.activity.loadDeleteQuiz);
  useEffect(() => {
    dispatch(fetchQuizActivity(props.activity));
  }, [load, loaddelete]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs>
          Quiz
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Quiz
          </Button>
        </Grid>
      </Grid>
      {data
        ? data.map((d, index) => {
            return (
              <Grid>
                <Grid container style={{ marginTop: "3px" }}>
                  <Grid item xs>
                    <FormLabel component="legend">
                      {" "}
                      Q{index + 1}.{d.question}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={1}>
                    <DeleteIcon
                      onClick={() => dispatch(deleteQuizActivity(d.id))}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                      }}
                    ></DeleteIcon>
                  </Grid>
                </Grid>

                <FormControl component="fieldset">
                  {/* <RadioGroup aria-label="gender" name="gender1"> */}
                  <Grid container>
                    {d.Options.map((op) => {
                      return (
                        <Grid item xs>
                          <FormControlLabel
                            value="female"
                            control={<Radio checked={op.isCorrect == true} />}
                            label={op.answerText}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                  {/* </RadioGroup> */}
                  <br />
                </FormControl>
              </Grid>
            );
          })
        : "loading.."}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddQuiz act={props.activity} handleClose={handleClose}></AddQuiz>
      </Modal>
    </div>
  );
}

export default QuizActivity;
