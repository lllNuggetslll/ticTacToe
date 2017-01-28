import React from 'react'

// Actions
import { sendBoard } from './Actions'

const middleware = ({store, dispatch, getState}) => next => action => {
  if (action.type === 'PLACE_PIECE') {
    const state = Object.assign({}, getState().boardReducer)
    const {row, column} = action.payload

    state.board[row][column] = state.piece

    dispatch(sendBoard(state))
  }

  next(action);
};

export default middleware;
