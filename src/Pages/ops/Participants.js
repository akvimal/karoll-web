import React, { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Link,
  Paper,
  Modal,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles,
  FormHelperText,
} from "@material-ui/core";
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

function Participants() {
  const [Stack, setStack] = useState([
    { stack: "Cohort 1..." },
    { stack: "Cohort 2..." },
  ]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Participant, setParticipant] = React.useState([
    { name: "Aravind", email: "aravind@gmail.com", status: "pending" },
    { name: "Akash", email: "akash@gmail.com", status: "verified" },
    { name: "Raj", email: "raj@gmail.com", status: "pending" },
  ]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Add Participant
      </Typography>
      <TextField
        className={classes.textfield}
        size="small"
        id="outlined-select-currency"
        fullWidth={true}
        label="Name"
        // value={currency}
        // onChange={handleChange}
        // helperText="Please select stack type"
        variant="outlined"
      ></TextField>
      <TextField
        className={classes.textfield}
        size="small"
        id="outlined-select-currency"
        fullWidth={true}
        label="Email"
        // value={currency}
        // onChange={handleChange}
        // helperText="Please select stack type"
        variant="outlined"
      ></TextField>
      <TextField
        className={classes.textfield}
        size="small"
        id="outlined-select-currency"
        fullWidth={true}
        label="Password"
        // value={currency}
        // onChange={handleChange}
        // helperText="Please select stack type"
        variant="outlined"
      ></TextField>
      <TextField
        className={classes.textfield}
        size="small"
        id="outlined-select-currency"
        fullWidth={true}
        label="Mobile No"
        // value={currency}
        // onChange={handleChange}
        // helperText="Please select stack type"
        variant="outlined"
      ></TextField>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} name="java" />}
            label="SME"
          />
        </FormGroup>
      </FormControl>
      <br></br>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Paper>
  );
  return (
    <div style={{ padding: "20px" }}>
      <Paper
        elevation={0}
        style={
          {
            // borderBottomStyle: "solid",
            // borderBottomWidth: "1px",
            // marginTop: "2vh",
            // paddingBottom: "1vh",
          }
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h6" gutterBottom>
              Participants
            </Typography>
          </Grid>
          <Grid item>
            <Link to="Add Participants">
              {" "}
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Participants
              </Button>
            </Link>
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
      <Grid container spacing={3} style={{ marginTop: "4vh" }}>
        <Grid
          item
          xs={4}
          style={{
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            // paddingRight: "-3vh",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs>
              <TextField
                size="small"
                id="outlined-size-small"
                label="Name"
                fullWidth={true}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                size="small"
                id="outlined-select-currency"
                select
                label="Status"
                fullWidth={true}
                // style={{ marginTop: "4vh" }}
                // value={currency}
                // onChange={handleChange}
                // helperText="Please select your currency"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Pending</option>
                <option value={20}>Verified</option>
              </TextField>
            </Grid>
            <Grid item xs>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={true} name="java" />}
                    label="SME"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
            }}
          >
            <Grid item xs={3} style={{ fontSize: "18px" }}>
              Name
            </Grid>{" "}
            <Grid item xs={6} style={{ fontSize: "18px" }}>
              Email
            </Grid>
            <Grid item xs={3} style={{ fontSize: "18px" }}>
              Status
            </Grid>
          </Grid>
          {Participant.map((p) => {
            return (
              <Grid container spacing={3} style={{ marginTop: "1.5vh" }}>
                <Grid item xs={3}>
                  {p.name}
                </Grid>{" "}
                <Grid item xs={6}>
                  {p.email}
                </Grid>
                <Grid item xs={3}>
                  {p.status}
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        <Grid item xs>
          <Grid container spacing={3}>
            <Grid item xs={3} style={{ fontSize: "20px" }}>
              Akash
            </Grid>
            <Grid item xs={6} style={{ fontSize: "20px" }}>
              akash123@gmail.com
            </Grid>
            <Grid item xs={3} style={{ fontSize: "20px" }}>
              9876543201
            </Grid>
          </Grid>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={true} name="java" />}
                label="SME"
              />
            </FormGroup>
          </FormControl>

          <Grid
            container
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              padding: "10px",
            }}
          >
            <Grid item xs={10}>
              <Typography variant="h6" gutterBottom>
                Learning Cohort
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              paddingBottom: "6px",
              marginTop: "2vh",
            }}
          >
            <Grid item xs style={{ paddingLeft: "10px" }}>
              <Typography variant="h6" gutterBottom>
                Cohort 1...
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ paddingRight: "5vh" }}>
              <Link
                style={{
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                {" "}
                Ongoing...
              </Link>{" "}
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              padding: "10px",
            }}
          >
            <Grid item xs={10}>
              <Typography variant="h6" gutterBottom>
                SME Cohort
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Grid>
          </Grid>
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
                <Grid item xs style={{ paddingLeft: "10px" }}>
                  {s.stack}
                </Grid>
                <Grid item xs={2}>
                  <Link style={{ textDecoration: "underline", color: "blue" }}>
                    {" "}
                    Ongoing...
                  </Link>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Participants;
