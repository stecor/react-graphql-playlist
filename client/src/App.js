import React, { Component } from 'react';
import './App.css';
import Booklist from './components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ninja Reading</h1>
        <Booklist />
      </div>
    );
  }
}

export default App;
