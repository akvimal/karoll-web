import {
  Typography,
  Tab,
  Tabs,
  AppBar,
  Box,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import OpsOverview from "../../components/settings/OpsOverview";
import OpsCohort from "../../components/settings/OpsCohort";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "1vh",
  },
}));
function OpsCourses() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Courses 1
      </Typography>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Cohort" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <OpsOverview></OpsOverview>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OpsCohort></OpsCohort>
        </TabPanel>
      </div>
    </div>
  );
}

export default OpsCourses;
