import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Particulas from './Components/Particulas'
import Intro from './Components/Intro'
import Fade from './Components/Fade'
import Description from './Components/Description';
import { Parallax } from 'react-scroll-parallax';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Particulas />
          <Intro />
        <Description />
        <Parallax y={[20, -20]}>
          <Fade />
        </Parallax>
      </div>
    );
  }
}

export default App;
