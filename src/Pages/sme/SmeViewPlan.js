import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Button,
} from "@material-ui/core";
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
import CircularProgressScore from "../progress/CircularProgressScore";
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
        <TableCell align="left">{row.stack}</TableCell>
        <TableCell></TableCell>
        <TableCell align="left">
          <CircularProgressScore></CircularProgressScore>
        </TableCell>

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
                  {row.Objectives.map((t) => {
                    return (
                      <>
                        <TableRow
                          style={{
                            borderBottomStyle: "dotted",
                            borderBottomWidth: "2px",
                            paddingBottom: "6px",
                            borderBottomColor: "darkgray",
                            marginTop: "2vh",
                          }}
                        >
                          <TableCell>{t.obj}</TableCell>
                          <TableCell
                            style={{
                              textDecoration: "underline",
                              color: "blue",
                            }}
                          >
                            {" "}
                            Learn{" "}
                          </TableCell>
                          <TableCell
                            style={{
                              textDecoration: "underline",
                              color: "blue",
                            }}
                          >
                            {" "}
                            Practise{" "}
                          </TableCell>
                          <TableCell
                            style={{
                              textDecoration: "underline",
                              color: "blue",
                            }}
                          >
                            {" "}
                            Quiz{" "}
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Button> Upload </Button>{" "}
                          </TableCell>
                        </TableRow>
                        <TableRow
                          style={{
                            borderBottomStyle: "dotted",
                            borderBottomWidth: "2px",
                            paddingBottom: "6px",
                            borderBottomColor: "darkgray",
                            marginTop: "2vh",
                          }}
                        >
                          <Paper elevation={0}>
                            <TableCell>a</TableCell>
                          </Paper>
                        </TableRow>
                      </>
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
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },
  textfield: {
    marginBottom: "2vh",
  },
}));
function SmeViewPlan() {
  const [Plan, setStack] = useState([
    {
      stack: "Skill 1",
      Objectives: [{ obj: "Objective 1" }, { obj: "Objective 2" }],
    },
    {
      stack: "Skill 2",
      Objectives: [
        { obj: "Objective 1" },
        { obj: "Objective 2" },
        { obj: "Objective 3" },
      ],
    },
  ]);
  const classes = useStyles();
  return (
    <div style={{ marginTop: "2vh" }}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} name="java" />}
            label="Show Current"
          />
        </FormGroup>
      </FormControl>
      <br></br>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {Plan.map((f, i) => (
              <Row key={i} row={f} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {Plan.map((p) => {
        return (
          <Grid
            container
            spacing={3}
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              paddingBottom: "1vh",
              marginTop: "2vh",
            }}
          >
            <Grid item xs>
              {p.stack}
            </Grid>
            <Grid item xs>
              <CircularProgressScore></CircularProgressScore>
            </Grid>
          </Grid>
        );
      })} */}
    </div>
  );
}

export default SmeViewPlan;
