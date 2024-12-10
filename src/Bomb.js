// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  timer(){
    // console.log(timeRemaining);
    let currentTime = this.state.secondsLeft;
    if (currentTime === 0) {
      return <p>Boom!</p>
    }else {
      this.setState({
        secondsLeft: currentTime - 1
      })
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
  }

  timer2() {
    let initial = this.props.initialCount
    let interval;
    if (this.state.secondsLeft == initial){
    interval = setInterval(() => {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      })
    }, 1000)
  } else {
    clearInterval(interval)
  }
}
// {this.timer2()}
// {this.state.secondsLeft > 0 ? 'There are ' + this.state.secondsLeft + ' seconds left' : 'BOOM'}

  render(){
    return(
      <div>

      {this.timer()}
      </div>
    )
  }

}
