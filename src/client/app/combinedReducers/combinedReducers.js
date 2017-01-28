import React from 'react'
import { combineReducers } from 'redux'
import boardReducer from '../redux/Reducer'

const reducers = combineReducers({
  boardReducer,
})

export default reducers;
