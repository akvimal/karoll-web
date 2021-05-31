import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attemptQuizActivity,
  fetchQuizActivity,
} from "../../../redux/activity/activityAction";
import "../activity/quizActivity.css";
import { authenticationService } from "../../../services/authentication.service";

export default function QuizLearnerActivity(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const load = useSelector((state) => state.activity.quizLoading);
  const questions = useSelector((state) => state.activity.QuizActivityData);
  useEffect(() => {
    dispatch(fetchQuizActivity(props.activity));
  }, [load]);
  const [user, setuser] = useState(authenticationService.currentUserValue);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [seconds, setSeconds] = React.useState(300);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
    }
  });
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      props.setScore(props.score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const data = {
        total: questions.length,
        score: props.score,
        ActivityId: props.activity,
        UserId: user.id,
      };
      console.log(data);
      dispatch(attemptQuizActivity(data, user.id));
      props.setShowScore(true);
    }
  };
  return (
    <div className="app">
      {props.showScore || seconds === "BOOOOM!" ? (
        <div className="score-section">
          You scored {props.score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <Grid container>
                <Grid item xs={10}>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </Grid>
                <Grid item xs>
                  {`${Math.floor((seconds % 3600) / 60)}:${Math.floor(
                    seconds % 60
                  )} `}
                </Grid>
              </Grid>
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].Options.map((answerOption) => (
              <button
                className="button"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
