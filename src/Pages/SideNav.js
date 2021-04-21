import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Router, Route, Link, Redirect } from "react-router-dom";
import List from "@material-ui/core/List";
import SettingsIcon from "@material-ui/icons/Settings";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ReceiptIcon from "@material-ui/icons/Receipt";
import StorageIcon from "@material-ui/icons/Storage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";
function MainListItems(props) {
  const sidenav = [
    {
      name: "Create Course",
      icons: <ListAltIcon></ListAltIcon>,
      path: "createnewcourses",
    },
    // {
    //   name: "Course Plan",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "courseplan",
    // },
    {
      name: "Create Cohort",
      icons: <ListAltIcon></ListAltIcon>,
      path: "createcohorts",
    },

    // {
    //   name: "Courses",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "opscourses",
    // },
    // {
    //   name: "My Cohorts",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "mycohort",
    // },
    // {
    //   name: "Cohorts",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "cohorts",
    // },
    // {
    //   name: "Participants",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "participants",
    // },

    // {
    //   name: "Objectives",
    //   icons: <ListAltIcon></ListAltIcon>,
    //   path: "objectives",
    // },
    // { name: "Skills", icons: <HowToRegIcon></HowToRegIcon>, path: "skills" },
    // {
    //   name: "Job Roles",
    //   icons: <PersonAddIcon></PersonAddIcon>,
    //   path: "jobroles",
    // },
    // {
    //   name: "Certifications",
    //   icons: <ReceiptIcon></ReceiptIcon>,
    //   path: "certifications",
    // },
    // { name: "Projects", icons: <StorageIcon></StorageIcon>, path: "projects" },
    // { name: "Courses", icons: <MenuBookIcon></MenuBookIcon>, path: "courses" },
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
