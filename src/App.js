import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentPrueba from './component'
import SliderComponent from './Slider';
import RealtimeGraph from './RealtimeGraph';
const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
        </div>
        <p className="App-intro">
          <b> Release 0.2.7 </b>
          Version: {app.getVersion()}
        </p>
        <ComponentPrueba />
        <SliderComponent />
        <RealtimeGraph />
      </div>
    );
  }
}

export default App;
