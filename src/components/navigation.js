import React, {Component} from "react";

class Navigation extends Component {
    render() {
        if (this.props.realizations === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className='nav-label nav-realisations' style={{visibility: 'visible', width: "17vw", transitionDelay: '0.4s', transitionDuration: '0.6s'}}><p style={{opacity: '1', transitionDelay: '0.5s'}}>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies}>
                        <i className="fas fa-wrench icon"/>
                        <div className='nav-label nav-technologies'><p>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact}>
                        <i className="fas fa-envelope icon"/>
                        <div className='nav-label nav-contact'><p>Contact</p></div>
                    </li>
                </ul>        
            )
        } else if (this.props.technologies === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className='nav-label nav-realisations'><p>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-wrench icon"/>
                        <div className='nav-label nav-technologies' style={{visibility: 'visible', width: "17vw", transitionDelay: '0.4s', transitionDuration: '0.6s'}}><p style={{opacity: '1', transitionDelay: '0.5s'}}>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact}>
                        <i className="fas fa-envelope icon"/>
                        <div className='nav-label nav-contact'><p>Contact</p></div>
                    </li>
                </ul>        
            )
        } else if (this.props.contact === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className='nav-label nav-realisations'><p>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies}>
                        <i className="fas fa-wrench icon"/>
                        <div className='nav-label nav-technologies'><p>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-envelope icon"/>
                        <div className='nav-label nav-contact' style={{visibility: 'visible', width: "17vw", transitionDelay: '0.4s', transitionDuration: '0.6s'}}><p style={{opacity: '1', transitionDelay: '0.5s'}}>Contact</p></div>
                    </li>
                </ul>        
            )
        } else {
            return (
                    <ul className='navigation'>
                        <li onClick={this.props.handleRealizations}>
                            <i className="fas fa-laptop-code icon"/>
                            <div className='nav-label nav-realisations'><p>Realizations</p></div>
                        </li>
                        <li onClick={this.props.handleTechnologies}>
                            <i className="fas fa-wrench icon"/>
                            <div className='nav-label nav-technologies'><p>Technologies</p></div>
                        </li>
                        <li onClick={this.props.handleContact}>
                            <i className="fas fa-envelope icon"/>
                            <div className='nav-label nav-contact'><p>Contact</p></div>
                        </li>
                    </ul>        
            )
        }
    }
}

export default Navigation