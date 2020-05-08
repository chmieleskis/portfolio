import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation'
import MainSection from './components/mainSection'

class App extends Component {
  state = {
    realisationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: false
  };

handleRealisations = () => {
  this.setState({
    realisationsIsOpen: !this.state.realisationsIsOpen,
    technologiesIsOpen: false,
    contactIsOpen: false
  })
  console.log(this.state)
};  

handleTechnologies = () => {
  this.setState({
    realisationsIsOpen: false,
    technologiesIsOpen: !this.state.technologiesIsOpen,
    contactIsOpen: false
  })
  console.log(this.state)
};

handleContact = () => {
  this.setState({
    realisationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: !this.state.contactIsOpen
  })
  console.log(this.state)
};

handleClose = () => {
  this.setState({
    realisationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: false
  })
  console.log(this.state)
};

  render() {
    return (
      <>
        <Navigation
            realisations={this.handleRealisations}
            technologies={this.handleTechnologies}
            contact={this.handleContact}
        />
        <MainSection 
            realisations={this.state.realisationsIsOpen} 
            technologies={this.state.technologiesIsOpen}
            contact={this.state.contactIsOpen}
            close={this.handleClose}
        />
      </>
    );
  };
};

export default App;
