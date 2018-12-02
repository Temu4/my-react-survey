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
      questionNumber: 0,
      isShowen: true
    };
    this.checkingCorrectAnswer = this.checkingCorrectAnswer.bind(this);
    this.showFinalScope = this.showFinalScope.bind(this);
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

  showFinalScope = () => {
    if (this.state.questionNumber > 2) {
      return this.setState(prevState => ({ isShowen: !prevState.isShowen }));
    }
  };

  render() {
    return (
      <div
        onClick={() => {
          this.showFinalScope();
        }}
      >
        {this.state.isShowen ? (
          <div>
            <Questions questionNumber={this.state.questionNumber} />
            <Answers
              questionNumber={this.state.questionNumber}
              checkingCorrectAnswer={this.checkingCorrectAnswer}
            />
            <Correct counterCorrectAnswers={this.state.counterCorrectAnswers} />
            <Incorrect
              counterIncorrectAnswers={this.state.counterIncorrectAnswers}
            />
          </div>
        ) : (
          <FinalScope
            counterCorrectAnswers={this.state.counterCorrectAnswers}
            counterIncorrectAnswers={this.state.counterIncorrectAnswers}
          />
        )}
      </div>
    );
  }
}

export default Survey;
