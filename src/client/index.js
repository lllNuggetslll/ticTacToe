import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// Styles
import './app/styles/bootstrap/dist/css/bootstrap.min.css'
import './app/styles/font-awesome/css/font-awesome.min.css'
import './app/styles/rdash-ui/dist/css/rdash.min.css'

// Containers


import reducers from './app/combinedReducers/combinedReducers'

import customMiddleware from './app/redux/customMiddleware'

const store = createStore(reducers, applyMiddleware(
  customMiddleware,
  thunk,
  promise,
))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <Route path="/" component={Dash}/>
      <Route path="/user" component={User}/>
      <Route path="/widget" component={Widget}/> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
