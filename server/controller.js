import rules from './rules'
import {
  makeBoard,
  gameOver,
  checkRows,
  checkColumns,
  checkDiagonalLeft,
  checkDiagonalRight
} from './utils'

export function giveNewBoard (req, res) {
    res.status(200).send(makeBoard())
  }

export function calculateBoard (req, res) {
  let win = false

  const game = {
    currentPlayer: 'player1',
    board: [['x', 'x', 'x'],['x', 'x', 'o'],['x', 'x', 'x']],
    winner: null
  };

  const piece = rules[game.currentPlayer]

  //if (gameOver(game.board)) res.status(200).send(makeBoard())

  console.log(checkDiagonalRight(game.board, piece))
}
