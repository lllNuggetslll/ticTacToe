import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/'

export const GET_NEW_BOARD = 'GET_NEW_BOARD'
export const SEND_BOARD = 'SEND_BOARD'
export const PLACE_PIECE = 'PLACE_PIECE'

export function getNewBoard() {
  const request = axios.get(`${ROOT_URL}api/getboard`)

  return {
    type: GET_NEW_BOARD,
    payload: request
  }
}

export function sendBoard(board) {
  const request = axios.post(`${ROOT_URL}api/getboard`, board)

  return {
    type: SEND_BOARD,
    payload: request
  }
}

export function playPiece(row, column) {
  return {
    type: PLACE_PIECE,
    payload: {row, column}
  }
}
