import React, { Component } from 'react';
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import Header from './Components/Header'
import Particulas from './Components/Particulas'
import Intro from './Components/Intro'
import Fade from './Components/Fade'
import Description from './Components/Description';
import Knot from './Components/Knot'
import Picas from './Components/Picas'
import Voting from './Components/Voting'
import Jaguar from './Components/Jaguar'
import Timers from './Components/Timers'
import Works from './Components/Works'


class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Particulas />
        <Intro />
        <Description />
        <Parallax y={[15, -20]}>
          <Fade />
        </Parallax>
        <Works />

        <Knot />

        <Voting />

        <Picas />

        <Jaguar />

        <Timers />

      </div>
    );
  }
}

export default App;
