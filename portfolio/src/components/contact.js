import React, {Component} from "react";

class Contact extends Component {
 render() {
     return (
         <div className='contact'>
             <i class="far fa-times-circle"></i>
             <h2>Contact</h2>
             <span>
                <div>
                    <i class="fas fa-mobile-alt"/><p>+48 507 212 938</p>
                </div>
                <div>
                <i class="fas fa-at"></i><p>m.chmielewski@tut.by</p>
                </div>
                <i class="fab fa-github-square"/>
                <i class="fab fa-linkedin"/>
             </span>
         </div>
     )
 }
}

export default Contact