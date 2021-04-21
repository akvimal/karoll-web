import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, Grid, Link, TextField, Chip } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function SkipSchedule() {
  const classes = useStyles();
  const [skipday, setskipday] = React.useState([
    { day: "Sun", check: true },
    { day: "Mon", check: false },
    { day: "Tue", check: true },
    { day: "Wed", check: true },
    { day: "Thur", check: true },
    { day: "Fri", check: true },
    { day: "Sat", check: true },
  ]);

  const [skipdate, setskipdate] = React.useState([
    { key: 0, label: "Mar 19" },
    { key: 1, label: "Mar 20" },
    { key: 2, label: "Mar 23" },
    { key: 3, label: "Apr 2" },
    { key: 4, label: "Apr 5" },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setskipdate((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <h6>Skip day</h6>
      <Grid container spacing={1}>
        {skipday.map((s) => {
          return (
            <Grid item xs={1}>
              {" "}
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={s.check}
                        onChange={handleChange}
                        name={s.day}
                      />
                    }
                    label={s.day}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          );
        })}
      </Grid>
      <h6>Skip date</h6>
      <Grid container spacing={3}>
        <Grid item sm={2}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Date"
            variant="outlined"
          />
        </Grid>
        {skipdate.map((data) => {
          return (
            <Grid item xs={1} className={classes.root}>
              <li key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default SkipSchedule;
