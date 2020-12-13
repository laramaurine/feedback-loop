import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

  

  render() {
      return (
      <h1>hello from feelings</h1>
      )
}
}


const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default withRouter(connect(mapStateToProps)(Feeling));
