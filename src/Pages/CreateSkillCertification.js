import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  Card,
  Link,
} from "@material-ui/core";
function CreateSkillCertification() {
  return (
    <div style={{ padding: "20px" }}>
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
          <Button variant="contained" color="primary">
            Lookup Skill
          </Button>
        </Grid>
      </Grid>

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
    </div>
  );
}

export default CreateSkillCertification;
