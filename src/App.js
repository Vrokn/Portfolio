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
import Contact from './Components/Contact'

import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Particulas />
          <Intro />
          <Parallax y={[15, -20]}>
            <Fade />
          </Parallax>
          <Description />
          <Works />
          <Knot />
          <Voting />
          <Picas />
          <Jaguar />
          <Timers />
          <Contact />

        </div>
      </Router>
    );
  }
}

export default App;
