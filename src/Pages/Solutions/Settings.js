import React from "react";
import {
  Typography,
  Tab,
  Tabs,
  AppBar,
  Box,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Stack from "../../components/settings/Stack";
import VersionAndTopics from "../../components/settings/VersionAndTopics";
import StackFamily from "../../components/settings/StackFamily";
import ContentProvider from "../../components/settings/ContentProvider";

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
  },
}));
function Settings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Settings
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
            <Tab label="Stack" {...a11yProps(0)} />
            <Tab label="Version & Topics" {...a11yProps(1)} />
            <Tab label="Stack Family" {...a11yProps(2)} />

            <Tab label="Content Provider" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Stack></Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VersionAndTopics></VersionAndTopics>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StackFamily></StackFamily>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <ContentProvider></ContentProvider>
        </TabPanel>
      </div>
    </div>
  );
}

export default Settings;
