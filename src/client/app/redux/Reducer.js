import {
  GET_NEW_BOARD,
  SEND_BOARD
        } from './Actions'

const INITIAL_STATE ={
  currentPlayer: null,
  board: [],
  piece: null,
  winner: false
}

export default function (state = INITIAL_STATE, action) {
  console.log(10, action)
  switch (action.type) {
    case GET_NEW_BOARD:
      return action.payload.data

    case SEND_BOARD:
      return action.payload.data
      
    default:
      return state
  }
}
