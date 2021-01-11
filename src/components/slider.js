import React, { Component } from 'react';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import Slide from './slide';
import landingData from './landingData'

class Slider extends Component {
    
    state = {
        activeIndex: 0,
        length: landingData.length
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
    if(index < 1) {
          index = length - 1;
        }
        else {
          index--;
        }
    this.setState({
          activeIndex: index
        });
      }

    goToNextSlide() {
          let index = this.state.activeIndex;
          let length = this.state.length;
    if(index === length - 1) {
            index = 0
          }
          else {
            index++;
          }
    this.setState({
            activeIndex: index
          });
      }

render() {
    return (
        <div className='slider'>
            <ArrowLeft goToPrevSlide={() => this.goToPrevSlide()}/>
            <Slide activeIndex={this.state.activeIndex} onKeyDown={this.handleKeyDown}/>
            <ArrowRight goToNextSlide={() => this.goToNextSlide()}/>
        </div>
        );
      }
}

export default Slider