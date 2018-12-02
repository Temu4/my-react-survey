import React from "react";

class Correct extends React.Component {
  render() {
    return (
      <div id="correct">
        <p>Correct: {this.props.counterCorrectAnswers}</p>
      </div>
    );
  }
}

export default Correct;
