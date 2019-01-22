import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import SubNavPage from './components/SubNavPage';
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
        <Route exact path="/:id" render={(props) => <SubNav {...props} navData={this.state.navData} />} />
        <Route path="/:id/:subId" component={SubNavPage} />
 
      </div>
    );
  }
}

export default App;
