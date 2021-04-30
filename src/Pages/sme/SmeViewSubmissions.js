import React, { useState } from "react";
import {
  Button,
 
  Grid,
  Link,
  TextField,
  TextareaAutosize,
  Slider,
} from "@material-ui/core";

function SmeViewSubmissions() {
  const [Learn, setStack] = useState([
    { stack: "learner 2" },
    { stack: "learner 3" },
  ]);
  return (
    <div
      style={{
        borderBottomWidth: "1px",
        paddingBottom: "1vh",
        marginTop: "3vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Learner"
            fullWidth={true}
            // style={{ marginTop: "4vh" }}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Skill"
            fullWidth={true}
            // style={{ marginTop: "4vh" }}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
          </TextField>
        </Grid>
      </Grid>

      <Grid
        item
        xs
        style={{
          fontSize: "large",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          marginTop: "3vh",
        }}
      >
        Skill 1 - Objective 1
      </Grid>
      <Grid
        item
        xs
        style={{
          borderBottomStyle: "dotted",
          borderBottomWidth: "2px",
          paddingBottom: "6px",
          borderBottomColor: "darkgray",
          marginTop: "2vh",
        }}
      >
        Learner 1
      </Grid>

      <Grid
        container
        spacing={2}
        style={{
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          marginTop: "3vh",
        }}
      >
        <Grid item xs={0.5}>
          1st April:
        </Grid>
        <Grid item xs={3}>
          <Link style={{ textDecoration: "underline", color: "blue" }}>
            {" "}
            Exercise 1
          </Link>

          <Grid> Learner... Comments...</Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          marginTop: "3vh",
        }}
      >
        <Grid item xs={0.5}>
          3rd April:
        </Grid>
        <Grid item xs={3}>
          Change Required
          <Grid> SME... Comments...</Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          marginTop: "3vh",
        }}
      >
        <Grid item xs={0.5}>
          5th April:
        </Grid>
        <Grid item xs={3}>
          <Link style={{ textDecoration: "underline", color: "blue" }}>
            {" "}
            Exercise 1
          </Link>
          <Grid> Learner... Comments...</Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs
        style={{
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          marginTop: "3vh",
        }}
      ></Grid>
      <TextareaAutosize
        rowsMin={3}
        style={{
          width: "100%",
          height: "50%",
          marginTop: "2vh",
          borderColor: "darkgray",
          borderRadius: "4px",
          marginBottom: "1vh",
          marginTop: "2vh",
        }}
      ></TextareaAutosize>
      <Grid
        container
        spacing={3}
        style={{
          borderBottomWidth: "1px",
          paddingBottom: "1vh",
          // marginTop: "1vh",
        }}
      >
        <Grid item xs={4}>
          <Slider
            defaultValue={20}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        xs
        style={{
          borderBottomStyle: "dotted",
          borderBottomWidth: "2px",
          paddingBottom: "6px",
          borderBottomColor: "darkgray",
          marginTop: "2vh",
        }}
      ></Grid>
      {Learn.map((l) => {
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
              {l.stack}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default SmeViewSubmissions;
