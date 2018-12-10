import React from "react";
import Questions from "./Questions";
import Answers from "./Answers";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import FinalScope from "./FinalScope";
import "./Survey.css";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterCorrectAnswers: 0,
      counterIncorrectAnswers: 0,
      questionNumber: 0
    };
    this.checkingCorrectAnswer = this.checkingCorrectAnswer.bind(this);
  }

  //check user's answer and list next questions and answers
  checkingCorrectAnswer = (value, correct) => {
    value === correct
      ? this.setState(prevState => ({
          counterCorrectAnswers: prevState.counterCorrectAnswers + 1,
          questionNumber: prevState.questionNumber + 1
        }))
      : this.setState(prevState => ({
          counterIncorrectAnswers: prevState.counterIncorrectAnswers + 1,
          questionNumber: prevState.questionNumber + 1
        }));
  };

  render() {
    //after 5th questions shows FinalScope
    if (this.state.questionNumber < 5) {
      return (
        <div className="container">
          <div className="row">
            <Questions questionNumber={this.state.questionNumber} />
          </div>
          <div className="row">
            <div className="col-9">
              <Answers
                questionNumber={this.state.questionNumber}
                checkingCorrectAnswer={this.checkingCorrectAnswer}
              />
            </div>
            <div lassName="col-3">
              <Correct
                counterCorrectAnswers={this.state.counterCorrectAnswers}
              />
              <Incorrect
                counterIncorrectAnswers={this.state.counterIncorrectAnswers}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <FinalScope
          counterCorrectAnswers={this.state.counterCorrectAnswers}
          counterIncorrectAnswers={this.state.counterIncorrectAnswers}
        />
      );
    }
  }
}

export default Survey;
