import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Row from '@material-ui/core/Row';
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import ListAttendance from "../Solutions/ListAttendance";
import CohortMonitor from "./CohortMonitor";
import CohortPlan from "./CohortPlan";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function DemoTabs(props) {
  const { labelId, onChange, selectionFollowsFocus, value } = props;

  return (
    <AppBar
      position="static"
      style={{
        borderTopRightRadius: "2vh",
        borderTopLeftRadius: "2vh",
        backgroundColor: "white",
        marginTop: "5vh",
      }}
    >
      <Tabs style={{ color: "black" }} onChange={onChange} value={value}>
        <Tab label="Participants" />

        <Tab label="Plan " />

        <Tab label="Monitor" />
      </Tabs>
    </AppBar>
  );
}

DemoTabs.propTypes = {
  labelId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectionFollowsFocus: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
});

export default function CohortView() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Course 1 - Apr 01
      </Typography>
      <h6> 04 Apr 2021</h6>
      <DemoTabs
        labelId="demo-a11y-tabs-manual-label"
        onChange={handleChange}
        value={value}
      />

      <TabPanel value={value} index={0}>
        <ListAttendance></ListAttendance>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CohortPlan></CohortPlan>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <CohortMonitor></CohortMonitor>
      </TabPanel>
    </div>
  );
}
// git add .
// git checkout -b 'name'
// git add .
// git commit -m "msg"
// git push
