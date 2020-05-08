import React, {Component} from "react";
import Technologies from './technologies'
import Contact from './contact'
class MainSection extends Component {

    render() {
        if (this.props.technologies === true) {
            return(
                <div className='mainSection'>
                    <Technologies close={this.props.close}/>
                </div>
            )
        } else if (this.props.contact === true) {
            return(
                <div className='mainSection'>
                    <Contact close={this.props.close}/>
                </div>
            )
        } else {
            return(
                <div className='mainSection'>
                    <h1>Michał Chmielewski</h1>
                    <h3>front-end developer</h3>
                </div>
            )
        }
    }
}

export default MainSection