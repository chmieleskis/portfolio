import React, { Component } from 'react';
import ArrowLefr from './arrowLeft';
import ArrowRight from './arrowRight';
import Slide from './slide';

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
            <div className='slider-items'>
                <ArrowLeft goToPrevSlide={() => this.goToPrevSlide()}/>
            <div className='slider-text'>
              <Slide activeIndex={this.state.activeIndex} />
            </div>
              <ArrowRight goToNextSlide={() => this.goToNextSlide()} />
            </div>
        </div>
        );
      }
}

export default Slider