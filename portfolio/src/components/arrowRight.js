import React, { Component } from 'react';

class ArrowRight extends Component {
  render() {
    return(
      <div className='arrow-right' onClick={this.props.goToNextSlide}>
        <i className="fas fa-chevron-circle-right" aria-hidden='true'></i>
      </div>
    )
  }
}
export default ArrowRight;