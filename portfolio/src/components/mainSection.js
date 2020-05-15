import React, {Component} from "react";
import Realisations from './realisations'
import Technologies from './technologies'
import Contact from './contact'

class MainSection extends Component {

    render() {
        // if 
        // (this.props.realisations === true) {
        //     return(
        //         <div className='mainSection'>
        //             <Realisations handleClose={this.props.handleClose}/>
        //             <div className='wave'/>
        //         </div>
        //     )
        // } else if (this.props.technologies === true) {
        //     return(
        //         <div className='mainSection'>
        //             <Technologies handleClose={this.props.handleClose}/>
        //             <div className='wave'/>
        //         </div>
        //     )
        // } else if (this.props.contact === true) {
        //     return(
        //         <div className='mainSection'>
        //             <Contact handleClose={this.props.handleClose}/>
        //             <div className='wave'/>
        //         </div>
        //     )
        // } else {
            return(
                <div className='mainSection'>
                    <div className='wave'/>
                    <h1>Michał Chmielewski</h1>
                    <h3>front-end developer</h3>
                    <Realisations handleClose={this.props.handleClose} realisations={this.props.realisations}/>
                    <Technologies andleClose={this.props.handleClose} technologies={this.props.technologies}/>
                    <Contact handleClose={this.props.handleClose} contact={this.props.contact}/>
                </div>
            )
        // }
    }
}

export default MainSection