import React, {Component} from "react";
import classNames from 'classnames';
import Slider from './slider';

class Realizations extends Component {
 render() {

    const realizationsClasses = classNames({
        'realizations': true,
        'active': this.props.realizations
   });

   const contentClasses = classNames({
       'content': true,
       'visible': this.props.realizations
   });

     return (
         <div className={realizationsClasses}>
             <span className={contentClasses}>
                <i className="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Realizations</h2>
                <Slider/>
            </span>
         </div>
     )
 }
}

export default Realizations