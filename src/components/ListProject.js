import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
// import { TableContainer } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row } = props;
  console.log(row);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.userRole}</TableCell>
        <TableCell align="left">{row.module}</TableCell>

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  {row.task.map((t) => {
                    return (
                      <TableRow>
                        <TableCell>{t.title}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",

    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  title: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    flex: "1 1 100%",
    fontWeight: "bold",
    paddingTop: theme.spacing(2),
  },
}));

function ListProject() {
  const [data, setdata] = useState([
    {
      project: "Project 1",
      feature: [
        {
          userRole: "Annonymous",
          module: "Site",
          title: "Feature 1",
          task: [{ title: "Task 1" }, { title: "Task 2" }],
        },
        {
          userRole: "Customer",
          module: "Payments",
          title: "Feature 2 ",
          task: [{ title: "Task 3" }, { title: "Task 2" }, { title: "Task 4" }],
        },
      ],
    },
    {
      project: "Project 2",
      feature: [
        {
          userRole: "Annonymous",
          module: "Site",
          title: "Feature 1",
          task: [{ title: "Task 1" }, { title: "Task 2" }],
        },
        {
          userRole: "Customer",
          module: "Payments",
          title: "Feature 2 ",
          task: [{ title: "Task 3" }, { title: "Task 2" }, { title: "Task 4" }],
        },
      ],
    },
    {
      project: "Project 3",
      feature: [],
    },
  ]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {data.map((d) => {
        return (
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ marginTop: "3vh" }}
          >
            <Typography
              className={classes.title}
              variant="h7"
              id="tableTitle"
              component="div"
            >
              {d.project}
            </Typography>

            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                {/* <TableHead>
                  <TableRow style={{ backgroundColor: "blue", color: "white" }}>
                    <TableCell colSpan={4}>{d.project}</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {d.feature.map((f, i) => (
                    <Row key={i} row={f} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          //   <List
          //     component="nav"
          //     aria-labelledby="nested-list-subheader"
          //     subheader={
          //       <ListSubheader component="div" id="nested-list-subheader">
          //         {d.project}
          //       </ListSubheader>
          //     }
          //     className={classes.root}
          //   >
          //     {d.feature.map((f) => {
          //       return (
          //         <>
          //           {" "}
          //           <ListItem button onClick={handleClick}>
          //             <ListItemIcon>
          //               <InboxIcon />
          //             </ListItemIcon>
          //             <ListItemText primary={f.title} />
          //             {open ? <ExpandLess /> : <ExpandMore />}
          //           </ListItem>
          //           <Collapse in={open} timeout="auto" unmountOnExit>
          //             <List component="div" disablePadding>
          //               <ListItem button className={classes.nested}>
          //                 <ListItemIcon>
          //                   <StarBorder />
          //                 </ListItemIcon>
          //                 <ListItemText primary="Starred" />
          //               </ListItem>
          //             </List>
          //           </Collapse>
          //         </>
          //       );
          //     })}
          //   </List>
        );
      })}
    </div>
  );
}

export default ListProject;
