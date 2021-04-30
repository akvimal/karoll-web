import { Chip, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

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
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
}));
function Row(props) {
  const { row, onhandleDelete } = props;
  const classes = useStyles();
  const l = row;
  // console.log(l,"Row data");
  const [listData, setListData] = React.useState([]);


  

  console.log(listData);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{row.title}</TableCell>
        <TableCell>Type: {row.activityType}</TableCell>
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
                    {/* <MoreActivityDetails
                      // chipData={props.chipData}
                      // handleStackAdd={(e)=>props.handleStack(e)}
                      // handleDelete={onhandleDelete()}
                    ></MoreActivityDetails> */}

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
            onKeyPress = {(e)=>props.handleStackAdd(e)}
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
            
          
        </Grid>
      </Grid>
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

function CourseActivityList(props) {
  const his = useHistory()
  // console.log(his.location,"CAL");
  const listData = his.location.state;
  // const { title, activitytype,time , duration } = props.location.state;

  // const [data, setdata] = useState([
  //   { id: 1, title: "Java-Collection", type: "Learn" },
  //   { id: 2, title: "Java-oops", type: "Project" },
    
  // ]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
   {/* {listData !== undefined? <> <b> {listData.title} </b><b> {listData.activityType} </b> <b> {listData.time} {listData.duration} </b> </>:null} */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            
            {listData !== undefined? 
              <Row
                // key={}
                row={listData}
                // chipData={props.chipData}
                // onhandleDelete={() => props.handleDelete()}
              />
            : null}
           
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default CourseActivityList;
