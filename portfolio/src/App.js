import React, { Component } from 'react';
import Delay from 'react-delay';

import './App.css';

import Navigation from './components/navigation'
import MainSection from './components/mainSection'

class App extends Component {
  state = {
    realizationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: false
  };

handleRealizations = () => {
  this.setState({
    realizationsIsOpen: !this.state.realizationsIsOpen,
    technologiesIsOpen: false,
    contactIsOpen: false
  })
  console.log(this.state)
};  

handleTechnologies = () => {
  this.setState({
    realizationsIsOpen: false,
    technologiesIsOpen: !this.state.technologiesIsOpen,
    contactIsOpen: false
  })
  console.log(this.state)
};

handleContact = () => {
  this.setState({
    realizationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: !this.state.contactIsOpen
  })
  console.log(this.state)
};

handleClose = () => {
  this.setState({
    realizationsIsOpen: false,
    technologiesIsOpen: false,
    contactIsOpen: false
  })
  console.log(this.state)
};

  render() {
    return (
      <>
        <Delay wait={3000}>
          <Navigation 
              realizations={this.state.realizationsIsOpen} 
              technologies={this.state.technologiesIsOpen}
              contact={this.state.contactIsOpen}
              handleRealizations={this.handleRealizations}
              handleTechnologies={this.handleTechnologies}
              handleContact={this.handleContact}
          />
        </Delay>
        <MainSection 
            realizations={this.state.realizationsIsOpen} 
            technologies={this.state.technologiesIsOpen}
            contact={this.state.contactIsOpen}
            handleClose={this.handleClose}
        />
      </>
    );
  };
};

export default App;
