import React from 'react';

class Incorrect extends React.Component{
  render(){
    return (
      <div id ='incorrect'>
        <p>Incorrect: {this.props.counterIncorrectAnswers}</p>
      </div>
    )
  }
}
export default Incorrect;

