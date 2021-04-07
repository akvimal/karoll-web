import React, { useState } from "react";
import { Grid, Link, TextField } from "@material-ui/core";
function ListCourseSkill() {
  const [skill, setskill] = useState([
    { title: "Skill 1" },
    { title: "Skill 2" },
  ]);
  return (
    <div style={{ marginTop: "2vh" }}>
      {" "}
      {skill.map((s) => {
        return (
          <Grid
            container
            style={{
              paddingBottom: "6px",

              marginTop: "2vh",
            }}
          >
            <Grid item xs={10}>
              {s.title}{" "}
            </Grid>
            <Grid item xs>
              <Link style={{ textDecoration: "underline", color: "blue" }}>
                {" "}
                x
              </Link>
            </Grid>
          </Grid>
        );
      })}
      <Grid item xs={3} style={{ marginTop: "2vh", marginBottom: "1vh" }}>
        <TextField
          size="small"
          id="outlined-select-currency"
          select
          label="Content Provider"
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
    </div>
  );
}

export default ListCourseSkill;
