// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            secondsLeft: props.initialCount
         }
    }
    render() { 
        const boom = this.state.secondsLeft == 0
        return ( 
            <div>{ boom ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}</div>
         );
    }
}
 
