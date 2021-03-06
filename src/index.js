import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from 'redux-logger';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

let feedback = {

    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}


const feedbackReducer =(state = feedback, action) => {
    if (action.type === 'SET_FEELING'){
        return {...state, feeling: action.payload
            }
    }
    else if(action.type ==='SET_UNDERSTANDING'){
        return {...state, understanding: action.payload}
    }
    else if(action.type ==='SET_SUPPORT'){
        return {...state, support: action.payload}
    }
    else if(action.type ==='SET_COMMENTS'){
        return {...state, comments: action.payload}
    }
    else if(action.type === 'RESET_SURVEY'){
        return {...state, reset: action.payload}
    }
        return state 
}

const store = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

