import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
const Header = () => <h2>Header</h2>
const Menu = () => <h2>Menu</h2>
const Landing = () => <h2>Homepage</h2>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Route exact path="/" component={Landing}/>
      </div>
    );
  }
}

export default App;
