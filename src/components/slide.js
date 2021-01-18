import React, { Component } from 'react';
import landingData from './landingData'
class Slide extends Component {
    state = {landing: landingData};
    
    render() {
        return(
            <section>
                {this.state.landing.map((s, index) =>
                    <div className={index === this.props.activeIndex ? 'exposed' : 'hidden'}
                        key={index}>
                            <img src={s.img} alt={s.alt}/>
                            <div className='link link-page'>
                                <a className='links' target='_blank' rel="noopener noreferrer" href={s.website}>
                                    <i className="link-icon fas fa-globe"/>
                                </a>
                            </div>
                            <div className='link link-github'>
                                <a className='links' target='_blank' rel="noopener noreferrer" href={s.git}>
                                    <i className="link-icon fab fa-github"/>
                                </a>
                            </div>
                    </div>)}
            </section>
            )
        }
    }
  export default Slide;