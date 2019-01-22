import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import navData from './navdata';

import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      navData: []
    }
  }

  componentDidMount() {
    this.setState({
      navData: navData
    })
  }

  render() {
    return (
      <div className="App">
        <NavWrapper />
        <Route path="/:category" component={SubNav} />
      </div>
    );
  }
}

export default App;
