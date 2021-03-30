import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Grid,
  TextareaAutosize,
  Select,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import ViewObjectives from "../../components/ViewObjectives";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Objectives() {
  const classes = useStyles();

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Objectives
      </Typography>

      <Paper variant="outlined" square className="objectives">
        <Typography variant="subtitle2" gutterBottom>
          Add Objective
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              fullWidth={true}
              label="Stack Type"
              // value={currency}
              // onChange={handleChange}
              // helperText="Please select stack type"
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </Grid>
          <Grid item xs={5}>
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
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </Grid>
          <Grid item xs>
            <TextField
              label="Topic"
              id="outlined-size-small"
              // defaultValue="Topics"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs>
            <TextField
              size="small"
              id="outlined-select-currency"
              select
              fullWidth={true}
              label="Version"
              // value={currency}
              // onChange={handleChange}
              // helperText="Please select your currency"
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </Grid>
        </Grid>
        <TextareaAutosize
          rowsMin={3}
          style={{
            width: "100%",
            height: "50%",
            marginTop: "2vh",
            borderColor: "darkgray",
            borderRadius: "4px",
            marginBottom: "1vh",
          }}
        ></TextareaAutosize>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Paper>
      <br />
      <ViewObjectives></ViewObjectives>
    </div>
  );
}

export default Objectives;
