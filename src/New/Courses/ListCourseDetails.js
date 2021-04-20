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
import { DriveEtaSharp } from "@material-ui/icons";

function Row(props) {
  const { row, onhandleDelete } = props;
  console.log(row);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{row.title}</TableCell>
        <TableCell>Type: {row.type}</TableCell>
        <TableCell>
          <div
            style={{
              marginLeft: "4vh",
              textDecoration: "underline",
              color: "blue",
            }}
            onClick={() => setOpen(!open)}
          >
            <Grid container>
              <Grid items>more</Grid>
              <Grid items>
                {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
              </Grid>
            </Grid>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <ListMoreDetails
                      chipData={props.chipData}
                      // handleDelete={onhandleDelete()}
                    ></ListMoreDetails>
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

function LearnPractice(props) {
  const [data, setdata] = useState([
    { id: 1, title: "Java-Collection", type: "Learn" },
    { id: 2, title: "Java-oops", type: "Project" },
  ]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {data.map((f, i) => (
              <Row
                key={i}
                row={f}
                chipData={props.chipData}
                // onhandleDelete={() => props.handleDelete()}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default LearnPractice;
