// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentSlideIndex: 0
         }
    }
    render() { 
        return ( 
            <p>I am on slide {this.state.currentSlideIndex}</p>
         );
    }
}
