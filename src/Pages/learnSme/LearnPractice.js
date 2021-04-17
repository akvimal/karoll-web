

import { Grid, Typography } from "@material-ui/core";
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
import LearnExercise from "./LearnExercise";
import Progressbar from "./Progressbar";

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
            <Progressbar></Progressbar>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                         <LearnExercise></LearnExercise> 
                        </TableRow>
                      
                  </TableHead>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  function LearnPractice(){
    
        
const [data, setdata] = useState([
    {
      
      feature: [
        {
          
          title: "Exercise 1",
         
        },
        {
          title: "Exercise 2 ",
          
        },
        {
            title: "Exercise 3 ",
           
          },
      ],
    },
    
  ]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ padding: "20px" }}>
        <text style={{marginLeft:"61vh"}}>Handons : 5hrs</text>

      {data.map((d) => {
        return (
          

            <TableContainer component={Paper}>
            
              <Table aria-label="collapsible table">
              
               <TableBody>
                
                  
               
               {d.feature.map((f, i) => (
                <Row key={i} row={f} />
                  ))}
                  
                </TableBody>
              </Table>
            </TableContainer>
          
        );
      })}
    </div>
  );
}
export default LearnPractice;
