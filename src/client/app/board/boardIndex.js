import React,{ Component } from 'react'
import { connect } from 'react-redux'

// Components
import table from './components/table'

// Action Creators
import {
  getNewBoard,
  playPiece
} from '../redux/Actions'

class Board extends Component {
  componentDidMount() {
    this.props.getNewBoard()
  }

  render () {
    const { playPiece, getNewBoard } = this.props
    const {
      board,
      currentPlayer,
      piece,
      winner
    } = this.props.game

      if (winner) {
        return (
          <div>
            <h1>{currentPlayer} wins!</h1>
            <button onClick={getNewBoard}>Play again?</button>
          </div>
        )
      } else {
        return (
          <div>
            <h1>Tic Tac Toe</h1>
            <h2>{currentPlayer}'s Turn => {piece}</h2>
            {table(board, playPiece)}
          </div>
        )
      }
  }
}

function mapStateToProps (state) {
  return {
    game: state.boardReducer
  }
}

export default connect(mapStateToProps, {
  getNewBoard,
  playPiece
})(Board)
