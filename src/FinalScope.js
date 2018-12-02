import React from "react";
import "./FinalScope.css";

class FinalScope extends React.Component {
  render() {
    return (
      <div>
        <h2 id="finalScope">Your final scope</h2>
        <h3 id="result">
          Correct answers was: {this.props.counterCorrectAnswers}
        </h3>
        <h3 id="result">
          Incorrect answers was: {this.props.counterIncorrectAnswers}
        </h3>
      </div>
    );
  }
}

export default FinalScope;
