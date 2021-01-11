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
                <i class="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Technologies</h2>
                <span>
                    <i class="fab fa-html5"/>
                    <i class="fab fa-css3-alt"/>
                    <i class="fab fa-js-square"/>
                    <i class="fab fa-react"/>
                    <i class="fab fa-sass"/>
                    <i class="fab fa-gulp"/>
                    <i class="fab fa-git"/>
                </span>
             </span>
         </div>
     )
 }
}

export default Technologies