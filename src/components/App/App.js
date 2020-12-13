import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Route exact path="/" component={Feeling} />
        </header>
        <br/>
      </div>
      </Router>
    );
  }
}
// const mapStateToProps = (reduxState) => {
//   return {
//     reduxState
//   }
// }

export default  (App);
