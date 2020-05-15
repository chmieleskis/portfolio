import React, {Component} from "react";
import classNames from 'classnames'

class Realisations extends Component {
 render() {

    const realisationsClasses = classNames({
        'realisations': true,
        'active': this.props.realisations
   });

   const contentClasses = classNames({
       'content': true,
       'visible': this.props.realisations
   });

     return (
         <div className={realisationsClasses}>
             <span className={contentClasses}>
                <i class="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Realisations</h2>
                <span>
                    Tu będzie karuzela, jak ją już napiszę.
                </span>
            </span>
         </div>
     )
 }
}

export default Realisations