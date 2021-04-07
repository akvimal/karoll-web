import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import ListAttachments from "./ListAttachments";

function Attachments() {
  const [data, setdata] = useState([
    { file: "screenshot.doc" },
    { file: "system-architecture.ppt" },
    { file: "standards.doc" },
  ]);
  return (
    <div style={{ padding: "10px" }}>
      {" "}
      Attachments
      <Grid container style={{ marginTop: "1vh" }}>
        {" "}
        <Grid item xs={9}>
          <TextField
            size="small"
            // id="outlined-select-currency"
            // fullWidth={true}
            // label="Title"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            // variant="outlined"
            type="file"
          ></TextField>
        </Grid>
        <Grid item xs style={{ marginLeft: "1vh" }}>
          {" "}
          <Button size="small" variant="contained" color="primary">
            Upload
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <ListAttachments data={data}></ListAttachments>
      </Grid>
    </div>
  );
}

export default Attachments;
