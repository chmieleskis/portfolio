import React, {Component} from "react";
import classNames from 'classnames'

class Navigation extends Component {
    state = {
        windowSize: ''
    }; 

    componentDidMount() {
      this.setState({
        windowSize: window.innerWidth>768 ? 'nav-label' : 'nav-label-mobile'
      });
      window.addEventListener('resize', () => {
        this.setState({
            windowSize: window.innerWidth>768 ? 'nav-label' : 'nav-label-mobile'
        });
    }, false);
    };

    render() {
        let realizationsClasses = classNames('nav-realizations', this.state.windowSize, this.props.realActive ? 'label-active' : '');
        let technologiesClasses = classNames('nav-technologies', this.state.windowSize, this.props.techActive ? 'label-active' : '');
        let contactClasses = classNames('nav-contact', this.state.windowSize, this.props.contActive ? 'label-active' : '')
        if (this.props.realizations === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className={realizationsClasses}><p>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies}>
                        <i className="fas fa-wrench icon"/>
                        <div className={technologiesClasses}><p>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact}>
                        <i className="fas fa-envelope icon"/>
                        <div className={contactClasses}><p>Contact</p></div>
                    </li>
                </ul>        
            )
        } else if (this.props.technologies === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className={realizationsClasses}><p>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-wrench icon"/>
                        <div className={technologiesClasses}><p>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact}>
                        <i className="fas fa-envelope icon"/>
                        <div className={contactClasses}><p>Contact</p></div>
                    </li>
                </ul>        
            )
        } else if (this.props.contact === true) {
            return (
                <ul className='navigation'>
                    <li onClick={this.props.handleRealizations}>
                        <i className="fas fa-laptop-code icon"/>
                        <div className={realizationsClasses}><p>Realizations</p></div>
                    </li>
                    <li onClick={this.props.handleTechnologies}>
                        <i className="fas fa-wrench icon"/>
                        <div className={technologiesClasses}><p>Technologies</p></div>
                    </li>
                    <li onClick={this.props.handleContact} style={{borderBottomRightRadius: '0', transition: '0.4s'}}>
                        <i className="fas fa-envelope icon"/>
                        <div className={contactClasses}><p>Contact</p></div>
                    </li>
                </ul>        
            )
        } else {
            return (
                    <ul className='navigation'>
                        <li onClick={this.props.handleRealizations}>
                            <i className="fas fa-laptop-code icon"/>
                            <div className={realizationsClasses}><p>Realizations</p></div>
                        </li>
                        <li onClick={this.props.handleTechnologies}>
                            <i className="fas fa-wrench icon"/>
                            <div className={technologiesClasses}><p>Technologies</p></div>
                        </li>
                        <li onClick={this.props.handleContact}>
                            <i className="fas fa-envelope icon"/>
                            <div className={contactClasses}><p>Contact</p></div>
                        </li>
                    </ul>        
            )
        }
    }
}

export default Navigation