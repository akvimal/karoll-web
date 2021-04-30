import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Router, Route, Link, Redirect } from "react-router-dom";
import List from "@material-ui/core/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
function MainListItems(props) {
  const sidenav = [
    {
      name: "Courses",
      icons: <ListAltIcon></ListAltIcon>,
      path: "courses",
    },
    {
      name: "Cohorts",
      icons: <ListAltIcon></ListAltIcon>,
      path: "cohorts",
    },
    { name: "Admin", icons: <PersonIcon></PersonIcon>, path: "admin" },
  ];
  const Side = sidenav
    .filter((e) => (props.isAdmin ? e : e.name !== "Admin"))
    .map((side, i) => {
      return (
        <Link to={side.path} key={i}>
          {" "}
          <ListItem button>
            <ListItemIcon>{side.icons}</ListItemIcon>
            <ListItemText primary={`${side.name}`} />
          </ListItem>
        </Link>
      );
    });
  return (
    <List>
      <div>{Side}</div>
    </List>
  );
}

export default MainListItems;

export function SecondaryListItems() {
  return (
    <List>
      {/* <Link to="/settings">
        {" "}
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon></SettingsIcon>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Link> */}
    </List>
  );
}
