export default {
  makeBoard: (req, res) => {
    const n = 3
    const newGame = {
      currentPlayer: 'player1',
      board: []
    };

    for (var i = 0; i < n; i++) {
      let newRow = []
      newGame.board.push(newRow)

      for(var j = 0; j < n; j++) {
        newGame.board[i].push(' ')
      }
    }

    res.status(200).send(newGame)
  },

  calculateBoard: (req, res) => {
    const currentPlayer = 'player1'
    const board = [['x', 'x', 'x'],['o', 'o', 'o'],['o', 'o', 'o']]

    







  }
}
