import React, { Component } from 'react';

class ArrowLeft extends Component {
  render() {
    return(
      <div className='arrow-left' onClick={this.props.goToPrevSlide}>
        <i className="fas fa-chevron-circle-left" aria-hidden='true'></i>
      </div>
    )
  }
}
export default ArrowLeft;