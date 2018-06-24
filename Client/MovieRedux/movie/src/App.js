import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Middle from './components/middle';
import MainMovieBox from './components/mainmoviebox';


class App extends Component {

  render() {
    return (
      <div>
      <Middle/>

      <MainMovieBox/>
      </div>
    );
  }
}

export default App;
