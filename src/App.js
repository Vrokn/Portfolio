import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Particulas from './Components/Particulas'
import Intro from './Components/Intro'
import Fade from './Components/Fade'
import Description from './Components/Description';

class App extends Component {

  render() {

    return (
      <div className="App">

        <Particulas />
        <Header />
        <Fade />
        <Intro />
        <Description />


      </div>
    );
  }
}

export default App;
