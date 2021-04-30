import {
  Button,
  Grid,
  Link,
  TextareaAutosize,
  TextField,
  Chip,
  makeStyles,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
}));
function MoreActivityDetails(props) {
  const classes = useStyles();

  const handleDelete = (data) => {
    console.log("deleted");
  };
  return (
    <div>
      <TextField
        style={{ marginTop: "2vh" }}
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        fullWidth={true}
        variant="outlined"
      />

      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Grid item xs={3}>
          <TextField
            size="small"
            id="outlined-select-currency"
            fullWidth={true}
            label="Stack"
            variant="outlined"
            onKeyPress = {(e)=>props.handleStackAdd(e)}
          />
        </Grid>
        <Grid item className={classes.root}>
          
              {/* <li key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li> */}
            
          
        </Grid>
      </Grid>
    </div>
  );
}

export default MoreActivityDetails;
