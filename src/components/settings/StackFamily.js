import React from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Chip,
  makeStyles,
} from "@material-ui/core";
import ViewStackFamily from "./ViewStackFamily";

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: "3vh",
  },
  chip: {
    margin: "5px",
  },
}));

function StackFamily() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Paper variant="outlined" square style={{ padding: "10px" }}>
      {" "}
      <Typography variant="h6" gutterBottom>
        Stack Family
      </Typography>
      <Grid container spacing={3}>
        <Grid
          item
          xs={3}
          style={{
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderRightColor: "darkgray",
          }}
        >
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            className={classes.spacing}
            label="Family Name"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Stack"
            className={classes.spacing}
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
          <Paper
            elevation={0}
            style={{ marginTop: "3vh", marginBottom: "1vh" }}
          >
            <Chip
              className={classes.chip}
              label="HTML"
              onDelete={handleDelete}
            />
            <Chip
              className={classes.chip}
              label="CSS"
              onDelete={handleDelete}
            />{" "}
            <Chip
              className={classes.chip}
              label="CSS"
              onDelete={handleDelete}
            />
          </Paper>
          <Button
            variant="contained"
            className={classes.spacing}
            color="primary"
          >
            Add
          </Button>
        </Grid>
        <Grid items xs>
          <ViewStackFamily></ViewStackFamily>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default StackFamily;
