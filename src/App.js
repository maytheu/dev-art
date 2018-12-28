import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './component/header/Header'
const Menu = () => <h2>Menu</h2>
const Landing = () => <h2>Homepage</h2>
const Account = () => <h2>Register or Sign in</h2>
const Gallery = () => <h2>Latest Updates</h2>
const Language = () => <h2>Select your language</h2>
const About = () => <h2>About Us</h2>
const Rules = () => <h2>What you should know about the Competition</h2>
const Profiles = () => <h2>Young Creator Profile</h2>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Route exact path="/" component={Landing}/>
        <Route path="/signin" component={Account}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/language" component={Language}/>
        <Route path="/about" component={About}/>
        <Route path="/rules" component={Rules}/>
        <Route path="/creators" component={Profiles}/> 
      </div>
    );
  }
}

export default App;
