import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  CardActions,
  Paper,
  Popper,
  Typography,
  TextField,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { authenticationService } from "../../../services/authentication.service";

import {
  addExerciseActivity,
  addLearnActivity,
  fetchExerciseActivity,
  fetchLearnActivity,
} from "../../../redux/activity/activityAction";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function ExerciseActivity(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();
  // const [content, setcontent] = useState([]);
  const [statement, setstatement] = useState("");
  const [descrip, setdescrip] = useState("");
  const [file, setfile] = useState("");
  const content = useSelector((state) => state.activity.ExerciseActivityData);
  const [user, setuser] = useState(authenticationService.currentUserValue);
  const load = useSelector((state) => state.activity.exerciseLoading);
  useEffect(() => {
    dispatch(fetchExerciseActivity(props.activity));
  }, [load]);

  const handleClick = (newPlacement) => (event) => {
    console.log(newPlacement);
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setPlacement(newPlacement);
  };

  const onAddHandler = () => {
    const arrcpy = [...content];
    const d = {
      problemStatement: statement,
      descrip: descrip,
      file: file,
      activityId: props.activity,
    };
    dispatch(addExerciseActivity(d, props.activity));

    setstatement("");
    setdescrip("");
    setOpen(false);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          {content.map((c, index) => {
            return (
              <>
                <Typography variant="subtitle2" gutterBottom>
                  {index + 1}. Problem Statement
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {c.problemStatement}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {c.descrip}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Output
                </Typography>
                <img src={c.file} alt="Girl in a jacket" />
              </>
            );
          })}
        </Grid>
        <Grid item xs>
          {user.roles[0] != "Learner" ? (
            <IconButton
              aria-label="add"
              color="primary"
              className={classes.margin}
              onClick={handleClick("left")}
            >
              <AddCircleIcon fontSize="large" />
            </IconButton>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Add Exercise
                  </Typography>
                  <Grid>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Problem Statement"
                      value={statement}
                      variant="outlined"
                      onChange={(e) => setstatement(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{ marginTop: "10px" }}>
                    <TextField
                      value={descrip}
                      size="small"
                      id="outlined-basic"
                      onChange={(e) => setdescrip(e.target.value)}
                      label="Description"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid style={{ marginTop: "10px" }}>
                    <TextField
                      value={file}
                      size="small"
                      id="outlined-basic"
                      onChange={(e) => setfile(e.target.value)}
                      label="File"
                      variant="outlined"
                    />
                  </Grid>
                </CardContent>

                <CardActions>
                  {statement && descrip != " " ? (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => onAddHandler()}
                    >
                      Add
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      onClick={() => onAddHandler()}
                      disabled
                    >
                      Add
                    </Button>
                  )}
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    close
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default ExerciseActivity;
