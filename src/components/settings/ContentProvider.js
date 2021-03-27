import React from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Chip,
  makeStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import ViewContentProvider from "./ViewContentProvider";

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: "3vh",
  },
  chip: {
    margin: "5px",
  },
}));

function ContentProvider() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Paper variant="outlined" square style={{ padding: "10px" }}>
      {" "}
      <Typography variant="h6" gutterBottom>
        Content Provider
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
            label="Name"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            className={classes.spacing}
            label="Email"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
          <TextField
            size="small"
            id="outlined-select-currency"
            type="text"
            fullWidth={true}
            className={classes.spacing}
            label="Web url"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          ></TextField>
          <Paper
            elevation={0}
            style={{ marginTop: "3vh", marginBottom: "1vh" }}
          >
            <Grid container>
              <Grid item xs={5}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label="Content"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label="Lab"
                />
              </Grid>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label="Evaluation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label="Certification"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label="Tech Writing"
                />
              </Grid>
            </Grid>
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
          <ViewContentProvider></ViewContentProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContentProvider;
