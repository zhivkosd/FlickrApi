import React, { Component } from 'react';
import logo from './flickr-logo.png';
import './App.css';
import FlickrPhotosContainer from './components/FlickrPhotosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Photos Gallery</h1>
        </header>
        <FlickrPhotosContainer />
      </div>
    );
  }
}

export default App;
