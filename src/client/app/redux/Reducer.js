import {
  GET_NEW_BOARD,
  SEND_BOARD,
  PLAY_PIECE
        } from './Actions'

const INITIAL_STATE = {
  currentPlayer: null,
  board: [],
  piece: null,
  winner: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NEW_BOARD:
      return action.payload.data

    case SEND_BOARD:
      return action.payload.data

    case PLAY_PIECE:
      return {
        ...state,
        board: action.payload
      }

    default:
      return state
  }
}
