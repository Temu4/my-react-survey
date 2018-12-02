import React from "react";

class Answers extends React.Component {
  //set of answers for {questionsArray[i]}
  constructor(props) {
    super(props);
    this.state = {
      answer1: [
        "Paris",
        "Useful JS framework",
        "364 days",
        "about 6 300 km",
        "6,5"
      ],
      answer2: [
        "Berlin",
        "JS library for building user interfaces",
        "365 days",
        "5 000 km",
        "10"
      ],
      answer3: [
        "London",
        "A DataBase for storing personal data",
        "366 days",
        "about 10 000 km",
        "8"
      ],
      answer4: [
        "Kyiv",
        "Name of modern weapon",
        "367 days",
        "can't imagine",
        "12"
      ],
      correctAnswer: [
        "London",
        "JS library for building user interfaces",
        "366 days",
        "about 6 300 km",
        "8"
      ]
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.checkingCorrectAnswer(
              this.state.answer1[this.props.questionNumber],
              this.state.correctAnswer[this.props.questionNumber]
            );
          }}
        >
          {this.state.answer1[this.props.questionNumber]}
        </button>
        <button
          onClick={() => {
            this.props.checkingCorrectAnswer(
              this.state.answer2[this.props.questionNumber],
              this.state.correctAnswer[this.props.questionNumber]
            );
          }}
        >
          {this.state.answer2[this.props.questionNumber]}
        </button>
        <button
          onClick={() => {
            this.props.checkingCorrectAnswer(
              this.state.answer3[this.props.questionNumber],
              this.state.correctAnswer[this.props.questionNumber]
            );
          }}
        >
          {this.state.answer3[this.props.questionNumber]}
        </button>
        <button
          onClick={() => {
            this.props.checkingCorrectAnswer(
              this.state.answer4[this.props.questionNumber],
              this.state.correctAnswer[this.props.questionNumber]
            );
          }}
        >
          {this.state.answer4[this.props.questionNumber]}
        </button>
      </div>
    );
  }
}

export default Answers;
