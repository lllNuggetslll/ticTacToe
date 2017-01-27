import rules from './rules'
import {
  makeBoard,
  gameOver,
  checkRows,
  checkColumns,
  checkDiagonalLeft,
  checkDiagonalRight,
  changePlayer
} from './utils'

export function giveNewBoard (req, res) {
    res.status(200).send(makeBoard())
  }

export function calculateBoard (req, res) {
  const piece = rules[game.currentPlayer]
  const game = {
    currentPlayer: 'player1',
    board: [['x', 'x', 'x'],['d', ' ', 'o'],['x', 'x', 'x']],
    winner: null
  };

  let win = false

  if (gameOver(game.board)) res.status(200).send(makeBoard())

  if (
    !checkRows(game.board, piece) ||
    !checkColumns(game.board, piece) ||
    !checkDiagonalLeft(game.board, piece) ||
    !checkDiagonalRight(game.board, piece)
  ) {
    
    res.status(200).send(changePlayer(game))
  } else {
    game.winner = game.currentPlayer
    res.status(200).send(game)
  }
}
