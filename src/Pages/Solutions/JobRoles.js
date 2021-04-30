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
} from "@material-ui/core";
import {Link } from "react-router-dom";
import ViewJobRoles from "../../components/ViewJobRoles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function JobRoles() {
  const classes = useStyles();

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Job Roles
          </Typography>
        </Grid>
        <Grid item xs>
          <Link to="createjobroles">
            {" "}
            <Button variant="contained" color="primary">
              create job role
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
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Pre-requisire role</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={true} name="java" />}
                label="Java Developer"
              />
              <FormControlLabel
                control={<Checkbox checked={false} name="html" />}
                label="DevOps Engineer"
              />
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
          </FormControl>
        </Grid>

        <Grid item xs>
          <ViewJobRoles></ViewJobRoles>
        </Grid>
      </Grid>
    </div>
  );
}

export default JobRoles;
