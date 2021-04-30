import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Checkbox,
  Button,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
function ListLookupObj() {
  const classes = useStyles();
  const [data, setdata] = useState([
    { title: "Objective 1" },
    { title: "Objective 2" },
    { title: "Objective 3" },
  ]);
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
      <Button variant="contained" style={{ marginTop: "3vh" }} color="primary">
        Add
      </Button>
    </div>
  );
}

export default ListLookupObj;
