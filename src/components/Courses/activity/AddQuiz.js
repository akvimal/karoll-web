import React, { useState } from "react";
import {
  Grid,
  Link,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
  Input,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { addQuizActivity } from "../../../redux/activity/activityAction";
import { useDispatch, useSelector } from "react-redux";

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
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function AddQuiz(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [question, setquestion] = useState();
  const [option1, setoption1] = useState();
  const [option2, setoption2] = useState();
  const [option3, setoption3] = useState();
  const [option4, setoption4] = useState();
  const [selectedValue, setSelectedValue] = React.useState();

  const onAddHandler = () => {
    const d = {
      question: question,
      option: [
        {
          answerText: option1,
          isCorrect: selectedValue === "option1" ? true : false,
        },
        {
          answerText: option2,
          isCorrect: selectedValue === "option2" ? true : false,
        },
        {
          answerText: option3,
          isCorrect: selectedValue === "option3" ? true : false,
        },
        {
          answerText: option4,
          isCorrect: selectedValue === "option4" ? true : false,
        },
      ],
      activityId: props.act,
    };
    dispatch(addQuizActivity(d));
    setquestion("");
    setoption1("");
    setoption2("");
    setoption3("");
    setoption4("");
    props.handleClose();
    console.log(d);
  };
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Add Quiz
        </Typography>
        <TextField
          style={{ marginTop: "2vh" }}
          size="small"
          id="outlined-select-currency"
          fullWidth={true}
          value={question}
          label="Question"
          variant="outlined"
          onChange={(e) => setquestion(e.target.value)}
        />
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={2}>
            <Radio
              checked={selectedValue === "option1"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="option1"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />{" "}
          </Grid>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              value={option1}
              label="Option 1"
              variant="outlined"
              onChange={(e) => setoption1(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={2}>
            <Radio
              checked={selectedValue === "option2"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="option2"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />{" "}
          </Grid>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              value={option2}
              label="Option 2"
              variant="outlined"
              onChange={(e) => setoption2(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={2}>
            <Radio
              checked={selectedValue === "option3"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="option3"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />{" "}
          </Grid>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              value={option3}
              label="Option 3"
              variant="outlined"
              onChange={(e) => setoption3(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={2}>
            <Radio
              checked={selectedValue === "option4"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="option4"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />{" "}
          </Grid>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              fullWidth={true}
              value={option4}
              label="Option 4"
              variant="outlined"
              onChange={(e) => setoption4(e.target.value)}
            />
          </Grid>
        </Grid>
        {selectedValue != undefined ? (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => onAddHandler()}
          >
            Add
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            onClick={() => onAddHandler()}
            disabled
          >
            Add
          </Button>
        )}
        <Button size="small" color="primary" onClick={props.handleClose}>
          close
        </Button>
      </Paper>
    </div>
  );
}

export default AddQuiz;
