

import { Grid, TextField, Typography } from "@material-ui/core";
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

import ListMoreDetails from "./ListMoreDetails";


  
  function Row(props) {
    const { row } = props;
    console.log(row);
    const [open, setOpen] = React.useState(false);
 
  
    return (
      
      <React.Fragment>
        <TableRow>
          <TableCell >{row.title}</TableCell>
          <TableCell >{row.userRole}</TableCell>
          <TableCell >{row.module}</TableCell>
  
          <TableCell>
              <Grid item m={3}>
          <TextField style={{marginLeft:"-45vh"}}
                size="small"
                id="outlined-select-currency"
                
                label="Java Collections"
                variant="outlined"/></Grid>
          </TableCell>
          <TableCell style={{marginLeft:"3vh"}}>
          <TextField 
              size="small"
              id="outlined-select-currency"
              select
              label="Activity Type"
              fullWidth={true}
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
              </TextField>
          </TableCell>
          <TableCell >
            <IconButton style={{marginLeft:"4vh"}}
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >More
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
                    <TableRow>
                         <ListMoreDetails></ListMoreDetails>
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
          
          title: "",
         
        },
        {
          title: " ",
          
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
