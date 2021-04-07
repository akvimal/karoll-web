import React from "react";
import {
  Button,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles,
  FormHelperText,
} from "@material-ui/core";
import { Router, Route, Link, Redirect } from "react-router-dom";
import ViewSkills from "../../components/ViewSkills";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
        </Grid>
        <Grid item xs>
          <Link to="createskill">
            {" "}
            <Button variant="contained" color="primary">
              create skill
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid
          item
          xs={3}
          style={{ borderRightStyle: "solid", borderRightWidth: "1px" }}
        >
          <TextField
            // label="Size"
            id="outlined-size-small"
            defaultValue="text"
            variant="outlined"
            size="small"
          />
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Proficieny Level"
            fullWidth={true}
            style={{ marginTop: "4vh" }}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Beginner</option>
            <option value={20}>Intermediate</option>
            <option value={30}>Advance</option>
          </TextField>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Stacks</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={true} name="java" />}
                label="Java"
              />
              <FormControlLabel
                control={<Checkbox checked={false} name="html" />}
                label="HTML"
              />
              <FormControlLabel
                control={<Checkbox checked={false} name="javascript" />}
                label="JavaScript"
              />
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
          </FormControl>
        </Grid>

        <Grid item xs>
          <ViewSkills></ViewSkills>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
