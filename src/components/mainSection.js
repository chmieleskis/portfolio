import React, {Component} from "react";
import Delay from 'react-delay';

import Realizations from './realizations'
import Technologies from './technologies'
import Contact from './contact'

class MainSection extends Component {
    render() {
            return(
                <div className='mainSection'>
                    <div className='wave'/>
                    <h1>Michał Chmielewski</h1>
                    <Delay wait={1500}>
                        <h3>front-end developer</h3>
                    </Delay>
                    <Realizations handleClose={this.props.handleClose} realizations={this.props.realizations}/>
                    <Technologies handleClose={this.props.handleClose} technologies={this.props.technologies}/>
                    <Contact handleClose={this.props.handleClose} contact={this.props.contact}/>
                </div>
            )
        // }
    }
}

export default MainSection