import React, {Component} from "react";

class Navigation extends Component {

    render() {
        return (
                <ul className='navigation'>
                    <li className='laptop-icon' onClick={this.props.realisations}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className='nav-label nav-realisations'><p>Realizations</p></div>
                    </li>
                    <li className='wrench-icon' onClick={this.props.technologies}>
                        <i className="fas fa-wrench icon"/>
                        <div className='nav-label nav-technologies'><p>Technologies</p></div>
                    </li>
                    <li className='envelope-icon' onClick={this.props.contact}>
                        <i className="fas fa-envelope icon"/>
                        <div className='nav-label nav-contact'><p>Contact</p></div>
                    </li>
                </ul>        
        )
    }
}

export default Navigation