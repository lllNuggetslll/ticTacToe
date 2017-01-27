export function makeBoard (n = 3) {
  const newGame = {
    currentPlayer: 'player1',
    board: [],
    winner: null
  };

  for (var i = 0; i < n; i++) {
    let newRow = []
    newGame.board.push(newRow)

    for(var j = 0; j < n; j++) {
      newGame.board[i].push(' ')
    }
  }

  return newGame
}

export function gameOver(board) {
  const n = board.length

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (board[i][j] === ' ') {
        return false
      }
    }
  }

  return true
}

export function checkRows(board, piece) {
  const n = board.length
  let count = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (board[i][j] === piece) {
        count++
      }
    }

    count === n ? true : count = 0
  }

  return false
}

export function checkColumns(board, piece) {
  const n = board.length
  let count = 0

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (board[j][i] === piece) {
        count++
      }
    }

    count === n ? true : count = 0
  }

  return false
}

export function checkDiagonalLeft(board, piece) {
  const n = board.length
  let count = 0

  for (var i = 0; i < n; i++) {
    if (board[i][i] === piece) {
      count++
    }
  }

  return count === n ? true : false
}

export function checkDiagonalRight (board, piece) {
  const n = board.length
  let column = n - 1
  let count = 0

  for (var i = 0; i < n; i++) {
    if (board[i][column] === piece) {
      count++
    }
    column--
  }

  return count === n ? true : false
}

export function changePlayer (game) {
  if (game.currentPlayer === 'player1') {
    game.currentPlayer = 'player2'
  } else {
    game.currentPlayer = 'player1'
  }

  return game
}
