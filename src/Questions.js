import React from "react";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsArray: [
        "What is the capital of The Great Britan?",
        "ReactJS is...?",
        "How many days is a leap year?",
        "What is the radius of the Earth?"
      ]
    };
  }
  render() {
    return (
      <div id="questions">
        <h1>{this.state.questionsArray[this.props.questionNumber]}</h1>
      </div>
    );
  }
}

export default Questions;
