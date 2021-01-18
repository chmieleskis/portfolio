import React, {Component} from "react";
import classNames from 'classnames'

class Technologies extends Component {
 render() {
    const technologiesClasses = classNames({
        'technologies': true,
        'active': this.props.technologies
   });

   const contentClasses = classNames({
       'content': true,
       'visible': this.props.technologies
   });

     return (
         <div className={technologiesClasses}>
             <span className={contentClasses}>
                <i className="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Technologies</h2>
                <span>
                    <i className="fab fa-html5"/>
                    <i className="fab fa-css3-alt"/>
                    <i className="fab fa-js-square"/>
                    <i className="fab fa-react"/>
                    <i className="fab fa-sass"/>
                    <i className="fab fa-gulp"/>
                    <i className="fab fa-git"/>
                </span>
             </span>
         </div>
     )
 }
}

export default Technologies