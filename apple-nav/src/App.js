import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
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
        <NavWrapper navData={this.state.navData} />
        <Route path="/:category" render={(props) => <SubNav {...props} navData={this.state.navData} />} />
      </div>
    );
  }
}

export default App;
