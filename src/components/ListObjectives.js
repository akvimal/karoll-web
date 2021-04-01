import React, { useState } from "react";
import {
  Typography,
  Paper,
  Button,
  Grid,
  Link,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import ListLookupObj from "../Pages/Solutions/ListLookupObj";
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
}));
function ListObjectives() {
  const [Stack, setStack] = useState([
    { stack: "Objective A" },
    { stack: "Objective B" },
  ]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Objective Lookup
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Stack"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Beginner</option>
            <option value={2}>Intermediate</option>
            <option value={3}>Advanced</option>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Version"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Version 1</option>
            <option value={2}>Version 2</option>
            <option value={3}>Version 3</option>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Topic"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Grid>
      </Grid>
      <ListLookupObj></ListLookupObj>
    </Paper>
  );

  return (
    <div>
      <Paper
        elevation={0}
        square
        style={{
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          marginTop: "5vh",
          paddingBottom: "1vh",
        }}
      >
        <Grid container>
          <Grid item xs>
            <Typography variant="h6" gutterBottom>
              Objectives
            </Typography>
          </Grid>{" "}
          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Lookup Objective
            </Button>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </Grid>
      </Paper>
      {Stack.map((s) => {
        return (
          <Grid
            container
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "2px",
              paddingBottom: "6px",
              borderBottomColor: "darkgray",

              marginTop: "2vh",
            }}
          >
            <Grid item xs>
              {s.stack}
            </Grid>
            <Grid item xs={1}>
              <Link style={{ textDecoration: "underline", color: "blue" }}>
                {" "}
                x
              </Link>
            </Grid>
          </Grid>
        );
      })}

      <Button variant="contained" style={{ marginTop: "3vh" }} color="primary">
        Submit
      </Button>
    </div>
  );
}

export default ListObjectives;
