import React, {Component} from "react";
import classNames from 'classnames'

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
                <i class="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Realizations</h2>
                <span>Tu będzie karuzela<br/>...<br/>...<br/>z madonnami</span>
            </span>
         </div>
     )
 }
}

export default Realizations