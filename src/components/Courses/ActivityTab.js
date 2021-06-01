import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LearnActivity from "./activity/LearnActivity";
import ExerciseActivity from "./activity/ExerciseActivity";
import QuizActivity from "./activity/QuizActivity";
import { authenticationService } from "../../services/authentication.service";
import QuizLearnerActivity from "./learnerActivity/QuizLearnerActivity";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuizActivity,
  getAttemptQuizScoreActivity,
} from "../../redux/activity/activityAction";
import { Button } from "@material-ui/core";
import "./activity/quizActivity.css";
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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function ActivityTab(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [start, setstart] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const quizscoreData = useSelector((state) => state.activity.QuizScore);
  const [user, setuser] = useState(authenticationService.currentUserValue);
  const [score, setScore] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchQuizActivity(props.activityId));
    dispatch(getAttemptQuizScoreActivity(user.id));
  }, []);

  return (
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
          <Tab label="Learn" {...a11yProps(0)} />
          <Tab label="Exercise" {...a11yProps(1)} />
          <Tab label="Quiz" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LearnActivity activity={props.activityId}></LearnActivity>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExerciseActivity activity={props.activityId}></ExerciseActivity>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {user.roles[0] != "Learner" ? (
          <QuizActivity activity={props.activityId}></QuizActivity>
        ) : (
          <>
            {start ? (
              " "
            ) : quizscoreData !== "" ? (
              <div className="score-section">
                You scored{" "}
                {quizscoreData.QuizScores == undefined
                  ? ""
                  : quizscoreData.QuizScores[0].score}{" "}
                out of{" "}
                {quizscoreData.QuizScores == undefined
                  ? ""
                  : quizscoreData.QuizScores[0].total}
              </div>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setstart(true)}
              >
                start Quiz
              </Button>
            )}

            {start ? (
              <QuizLearnerActivity
                score={score}
                setScore={setScore}
                activity={props.activityId}
                showScore={showScore}
                setShowScore={setShowScore}
              ></QuizLearnerActivity>
            ) : (
              ""
            )}
          </>
        )}
      </TabPanel>
    </div>
  );
}
