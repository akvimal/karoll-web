
import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  Link,
  makeStyles,
  Modal,
} from "@material-ui/core";
import ListLookupSkill from "../Pages/Solutions/ListLookupSkill";
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
function CreateSkillCertification() {
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
        Skill Lookup
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Stack"
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
      <ListLookupSkill></ListLookupSkill>
    </Paper>
  );

  return (
    <div style={{ padding: "20px" }}>
      <Paper
        elevation={0}
        square
        style={{
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          paddingBottom: "2vh",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Create Skill Certification
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              label="Skill"
              fullWidth={true}
              // value={currency}
              // onChange={handleChange}
              // helperText="Please select your currency"
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={1}>Java</option>
              <option value={2}>HTML</option>
              <option value={3}>CSS</option>
            </TextField>
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Lookup Skill
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
      <Typography variant="h6" style={{ marginTop: "3vh" }} gutterBottom>
        Knowledge
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
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Topic"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Question Weight"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Score Weight"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
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
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
          paddingBottom: "6px",
          borderBottomColor: "darkgrey",
          color: "black",
          marginTop: "2vh",
        }}
      >
        <Grid item xs>
          Java | Collections
        </Grid>
        <Grid item xs={1}>
          50% | 25%
        </Grid>

        <Grid item xs={1}>
          <Link style={{ textDecoration: "underline", color: "blue" }}> x</Link>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
          paddingBottom: "6px",
          borderBottomColor: "darkgrey",
          color: "black",
          marginTop: "1vh",
        }}
      >
        <Grid item xs>
          Java | OOPS
        </Grid>
        <Grid item xs={1}>
          50% | 75%
        </Grid>
        <Grid item xs={1}>
          <Link style={{ textDecoration: "underline", color: "blue" }}> x</Link>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ marginTop: "3vh" }} gutterBottom>
        Application
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Measuring Criteria"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Weightage"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "3vh" }}>
        <Grid item xs={3}>
          Completion
        </Grid>
        <Grid item xs={1}>
          50%
        </Grid>
        <Grid item xs={1}>
          <Link style={{ textDecoration: "underline", color: "blue" }}> x</Link>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1vh" }}>
        <Grid item xs={3}>
          Requirement Clarification
        </Grid>
        <Grid item xs={1}>
          25%
        </Grid>
        <Grid item xs={1}>
          <Link style={{ textDecoration: "underline", color: "blue" }}> x</Link>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "1vh" }}>
        <Grid item xs={3}>
          Coding Standards
        </Grid>
        <Grid item xs={1}>
          25%
        </Grid>
        <Grid item xs={1}>
          <Link style={{ textDecoration: "underline", color: "blue" }}> x</Link>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "3vh" }}>
        <Grid item xs={3}>
          Minimum tasks per objective
        </Grid>

        <Grid item xs={1}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
      </Grid>
      <Grid container xs={10} style={{ marginTop: "3vh" }}>
        <Grid item xs>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Maximum task complexity level"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Easy</option>
            <option value={2}>Medium</option>
            <option value={3}>Hard</option>
          </TextField>
        </Grid>
      </Grid>
      <Typography variant="h6" style={{ marginTop: "3vh" }} gutterBottom>
        Badge
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="graphics.jpeg"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            Browse..
          </Button>
        </Grid>
      </Grid>
      <Button variant="contained" style={{ marginTop: "3vh" }} color="primary">
        Submit
      </Button>
    </div>
  );
}

export default CreateSkillCertification;
