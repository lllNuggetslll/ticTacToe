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
    // const n = req.params.n
    res.status(200).send(makeBoard())
  }

export function calculateBoard (req, res) {
  const game = req.body;
  const piece = rules[game.currentPlayer]

  if (gameOver(game.board)) res.status(200).send(makeBoard())

  if (
    !checkRows(game.board, piece) &&
    !checkColumns(game.board, piece) &&
    !checkDiagonalLeft(game.board, piece) &&
    !checkDiagonalRight(game.board, piece)
  ) {
    res.status(200).send(changePlayer(game))
  } else {
    game.winner = true
    res.status(200).send(game)
  }
}
