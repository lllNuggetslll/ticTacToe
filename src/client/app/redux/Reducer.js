import {
  GET_NEW_BOARD
        } from './Actions'

const INITIAL_STATE ={
  game: null
}

export default function (state = INITIAL_STATE, action) {
  console.log(10, action)
  switch (action.type) {
    case GET_NEW_BOARD:
      return {
        ...state,
        game: action.payload.data
      }
    default:
      return state
  }
}
