import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
function CohortMonitor() {
  return (
    <div style={{ marginTop: "1vh", marginLeft: "1vh" }}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="active"
            control={<Radio color="primary" />}
            label="Least Active"
          />
          <FormControlLabel
            value="score"
            control={<Radio color="primary" />}
            label="Least Score"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default CohortMonitor;
