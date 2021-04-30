import { Typography } from "@material-ui/core";
import React, { useState } from "react";
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
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-router-dom";

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
          <TableCell >
            Scroll/Chart
            {/* <Progressbar></Progressbar> */}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
              <Link to="/learnobjectives" style={{textDecoration:"none"}}>
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
                </Table></Link>
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
function LearnCohort() {
  
const [data, setdata] = useState([
    {
      
      feature: [
        {
          
          title: "Skill 1",
          task: [{ title: "Objective 1" }, { title: "Objective 2" }],
        },
        {
          title: "Skill 2 ",
          task: [{ title: "Objective 1" }, { title: "Objective 2" }, { title: "Objective 3" }],
        },
        {
            title: "Skill 3 ",
            task: [{ title: "Objective 1" }, { title: "Objective 2" }, { title: "Objective 3" }],
          },
      ],
    },
    
  ]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ padding: "20px" }}>
    <Typography variant="h6" gutterBottom>
      Course 1 Title
    </Typography>
    <h6> Desc more...</h6>

      {data.map((d) => {
        return (
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ marginTop: "3vh" }}
          >

            <TableContainer component={Paper}>
            
              <Table aria-label="collapsible table">
              
               <TableBody>
              
                  {d.feature.map((f, i) => (
                <Row key={i} row={f} />
                  ))} 
            
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        );
      })}
    </div>
  );
}
export default LearnCohort;
