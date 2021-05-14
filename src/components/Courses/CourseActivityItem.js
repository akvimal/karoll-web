import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function CourseActivityItem(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={props.title}
          secondary={<React.Fragment>Type: {props.type}</React.Fragment>}
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <TextField
              style={{ marginTop: "2vh" }}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth={true}
              variant="outlined"
            />

            <Grid container spacing={3} style={{ marginTop: "2vh" }}>
              <Grid item xs={3}>
                <TextField
                  size="small"
                  id="outlined-select-currency"
                  fullWidth={true}
                  label="Stack"
                  variant="outlined"
                  onKeyPress={(e) => props.handleStackAdd(e)}
                />
              </Grid>
              <Grid item className={classes.root}>
                {/* <li key={data.key}>
                  <Chip
                    label={data.label}
                    onDelete={handleDelete(data)}
                    className={classes.chip}
                  />
                </li> */}
                {/* {props.activityStack.map((data) => {
              return (
                <li key={data.key}>
                  <Chip
                    label={data}
                    onDelete={props.data}
                    className={classes.chip}
                  />
                </li>
              );
            })} */}
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </>
  );
}

export default CourseActivityItem;
