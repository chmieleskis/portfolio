import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation'
import MainSection from './components/mainSection'

class App extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <MainSection/>
      </>
    );
  };
};

export default App;
