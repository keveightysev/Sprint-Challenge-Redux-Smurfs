import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h3>Add Smurf</h3>
        <AddSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);
