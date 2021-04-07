import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Attachments from "./Attachments/Attachments";
import FormCreateProject from "./FormCreateProject";
function CreateProject() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Project & Features
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <FormCreateProject></FormCreateProject>
        </Grid>
        <Grid item xs>
          <Attachments></Attachments>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateProject;
