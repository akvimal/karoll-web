
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import LearnList from "./LearnList";
import LearnPractice from "./LearnPractice";
import LearnQuiz from "./LearnQuiz";


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
        <Tab label="Learn" />

        <Tab label="Practice " />

        <Tab label="Quiz" />
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

export default function LearnObjectives() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Objectives 1 
      </Typography>
      <DemoTabs
        labelId="demo-a11y-tabs-manual-label"
        onChange={handleChange}
        value={value}
      />

      <TabPanel value={value} index={0}>
       <LearnList></LearnList>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <LearnPractice></LearnPractice>
      </TabPanel>

      <TabPanel value={value} index={2}>
    <LearnQuiz></LearnQuiz>
      </TabPanel>
    </div>
  );
}
