import React, {Component} from "react";
import classNames from 'classnames';

// const classNames = require('classnames');

class Contact extends Component {
    handleCopyEmail = () => {
        navigator.clipboard.writeText('m.chmielewski@tut.by')
    };
    
    handleCopyPhone = () => {
        navigator.clipboard.writeText('+48507212938')
    };

 render() {
    const contactClasses = classNames({
         'contact': true,
         'active': this.props.contact
    });

    const contentClasses = classNames({
        'content': true,
        'visible': this.props.contact
    });

     return (
         <div className={contactClasses}>
             <span className={contentClasses}>
                <i className="far fa-times-circle" onClick={this.props.handleClose}/>
                <h2>Contact</h2>
                <span>
                    <div onClick={this.handleCopyPhone}>
                        <i className="fas fa-mobile-alt"/><p>+48 507 212 938</p>
                    </div>
                    <div onClick={this.handleCopyEmail}>
                    <i className="fas fa-at"></i><p>m.chmielewski@tut.by</p>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chmieleskis/"><i className="fab fa-github-square"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/michał-chmielewski-31019b201"><i className="fab fa-linkedin"/></a>
                </span>
             </span>
         </div>
     )
 }
}

export default Contact