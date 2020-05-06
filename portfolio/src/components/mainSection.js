import React, {Component} from "react";
import Technologies from './technologies'
import Contact from './contact'
class MainSection extends Component {

    render() {
        return(
            <div className='mainSection'>
                <h1>Michał Chmielewski</h1>
                <h3>front-end developer</h3>
                {/* <Technologies/> */}
                <Contact/>
            </div>
        )
    }
}

export default MainSection