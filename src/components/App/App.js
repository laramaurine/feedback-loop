import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feelings from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import ThankYou from '../Review/Review.js';
import Submit from '../Submit/Submit.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feelings</h1>
          <h4><i>Talkin bout feelings</i></h4>
        </header>
        <br/>
        <Route exact path="/" component={Feelings} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/submit" component={Submit} />
        
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps) (App);
