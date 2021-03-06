import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
//import axios from 'axios';
import '../App/App.css'



class Submit extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'RESET', payload: {} })
        //resets reducers
        this.props.history.push('/')
        //back to the beginning infinite loops
    }

    render() {
        return (
            <div className="Submit">
                <h1>Thank You!</h1>
                <button onClick={this.handleClick}>Submit New Feedback</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapReduxStateToProps)(Submit));