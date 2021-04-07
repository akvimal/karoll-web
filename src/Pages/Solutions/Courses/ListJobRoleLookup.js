import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  Checkbox,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 150,
    marginTop: "3vh",
    marginBottom: "2vh",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

function ListJobRoleLookup(props) {
  const { data } = props;

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <List className={classes.root} subheader={<li />}>
        {data.map((d, i) => {
          return (
            <>
              {" "}
              <ListItem
                key={i}
                role={undefined}
                dense
                button
                style={{
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                }}
                onClick={handleToggle(d)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(d) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps="aria-labelledby"
                  />
                </ListItemIcon>
                <ListItemText id={i} primary={`${d.title} `} />
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );
}

export default ListJobRoleLookup;
