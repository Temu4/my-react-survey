import React from "react";
import "./FinalScope.css";

class FinalScope extends React.Component {
  render() {
    return (
      <div>
        <h1 id="finalScope">Your final scope</h1>
        <h2 id="result">
          Correct answers was: {this.props.counterCorrectAnswers}
        </h2>
        <h2 id="result">
          Incorrect answers was: {this.props.counterIncorrectAnswers}
        </h2>
      </div>
    );
  }
}

export default FinalScope;
