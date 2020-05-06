import React, {Component} from "react";

class Navigation extends Component {

    render() {
        return (
                <ul className='navigation'>
                    <li className='laptop-icon'>
                        <i class="fas fa-laptop-code icon"/>
                        <div className='nav-label nav-realisations'><p>Realizations</p></div>
                    </li>
                    <li className='wrench-icon'>
                        <i class="fas fa-wrench icon"/>
                        <div className='nav-label nav-technologies'><p>Technologies</p></div>
                    </li>
                    <li className='envelope-icon'>
                        <i class="fas fa-envelope icon"/>
                        <div className='nav-label nav-contact'><p>Contact</p></div>
                    </li>
                </ul>        
        )
    }
}

export default Navigation