import { Button, Grid, TextField, Typography, Modal } from "@material-ui/core";
import React from "react";
import AddActivity from "../AddActivity";
import CohortActivityList from "./CohortActivityList";
import SkipSchedule from "./SkipSchedule";

function CohortView() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Cohort View
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Course: Data Sciences
      </Typography>

      <Grid container spacing={3} style={{ marginTop: "1vh" }}>
        <Grid item xs={2}>
          Cohort 1
        </Grid>
        <Grid item xs={1}>
          Min : 5
        </Grid>
        <Grid item xs={1}>
          Max : 25
        </Grid>
        <Grid item xs>
          Total Participant : 22
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={1}>
        <Grid item xs={3}>
          Start Date : 30 April 2021
        </Grid>
        <Grid item xs={2}>
          Start Time : 10:20 AM
        </Grid>
        <Grid item xs>
          Max Daily Hours : 2
        </Grid>
      </Grid>

      <br />
      <Grid container spacing={2}>
        <Grid item xs={10}></Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Activity
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AddActivity></AddActivity>
          </Modal>
        </Grid>
      </Grid>

      <CohortActivityList></CohortActivityList>
    </div>
  );
}

export default CohortView;
