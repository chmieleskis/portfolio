import React, {Component} from "react";

class Contact extends Component {

    handleCopyEmail = () => {
        navigator.clipboard.writeText('m.chmielewski@tut.by')
    };
    
    handleCopyPhone = () => {
        navigator.clipboard.writeText('+48507212938')
    };
 render() {
     return (
         <div className='contact'>
             <i class="far fa-times-circle" onClick={this.props.close}/>
             <h2>Contact</h2>
             <span>
                <div onClick={this.handleCopyPhone}>
                    <i class="fas fa-mobile-alt"/><p>+48 507 212 938</p>
                </div>
                <div onClick={this.handleCopyEmail}>
                <i class="fas fa-at"></i><p>m.chmielewski@tut.by</p>
                </div>
                <a target="_blank" href="#"><i class="fab fa-github-square"/></a>
                <a target="_blank" href="#"><i class="fab fa-linkedin"/></a>
             </span>
         </div>
     )
 }
}

export default Contact