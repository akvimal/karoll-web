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
  addLearnActivity,
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

function LearnActivity(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();
  // const [content, setcontent] = useState([]);
  const [note, setnote] = useState("");
  const [reflink, setreflink] = useState("");
  const content = useSelector((state) => state.activity.LearnActivityData);
  const [user, setuser] = useState(authenticationService.currentUserValue);

  const load = useSelector((state) => state.activity.learnLoading);
  useEffect(() => {
    dispatch(fetchLearnActivity(props.activity));
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
      note: note,
      reflink: reflink,
      activityId: props.activity,
    };
    dispatch(addLearnActivity(d, props.activity));

    arrcpy.push(d);
    // setcontent(arrcpy);
    setnote("");
    setreflink("");
    setOpen(false);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={11}>
          {content.map((c) => {
            return (
              <div>
                {" "}
                <a
                  style={{ textDecoration: "underline", color: "blue" }}
                  onClick={() => window.open(c.refLink)}
                >
                  {c.note}
                </a>
              </div>
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
                    Add Content
                  </Typography>
                  <Grid>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Notes"
                      value={note}
                      variant="outlined"
                      onChange={(e) => setnote(e.target.value)}
                    />
                  </Grid>
                  <Grid style={{ marginTop: "10px" }}>
                    <TextField
                      value={reflink}
                      size="small"
                      id="outlined-basic"
                      onChange={(e) => setreflink(e.target.value)}
                      label="RefLink"
                      variant="outlined"
                    />
                  </Grid>
                </CardContent>

                <CardActions>
                  {reflink && note != " " ? (
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
    </div>
  );
}

export default LearnActivity;
