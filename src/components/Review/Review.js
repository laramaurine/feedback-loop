import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App/App.css'
import { withRouter } from 'react-router-dom';




class Review extends Component {

    

    submitFeedback = (value) => {
        if(value === "feeling"){
            this.props.history.push('/')
        }
        else if (value === "understanding") {
            this.props.history.push('/understanding')
        }
        else if (value === "support") {
            this.props.history.push('/support')
        }
        else if (value === "comments") {
            this.props.history.push('/comments')
        }else {
            this.props.dispatch({
                type: 'RESET_SURVEY',
                payload: this.state
            })
            this.props.history.push('/submit')
    }
}

    render() {
        return (
            <div>
                <h2>It's the Final Feedback</h2>
                <div className="Review-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feeling</td>
                            <td>{this.props.feedbackReducer.feeling}</td>
                           
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>{this.props.feedbackReducer.understanding}</td>
                            
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>{this.props.feedbackReducer.support}</td>
                            
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>{this.props.feedbackReducer.comments}</td>
                            
                        </tr>
                    </tbody>
                </table>
                </div>

                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps)(Review));