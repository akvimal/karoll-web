import React from "react";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

export default function StackTag(props) {
  const data = useSelector((state) => state.stack.stackData);

  return (
    <React.Fragment>
      <Autocomplete
        // value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
          } else if (newValue && newValue.inputValue) {
          } else if (newValue !== null) {
            props.addStackHandler(newValue);
          } else {
          }
        }}
        id="Stack"
        options={data}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.stack;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.stack}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Stack" variant="outlined" />
        )}
      />
    </React.Fragment>
  );
}
