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
    const { playPiece } = this.props
    const {
      board,
      currentPlayer,
      piece,
      winner
    } = this.props.game

      console.log(this.props.game)

      if (winner) {
        return (
          <div>
            {winner}
          </div>
        )
      } else {
        return (
          <div>
            <h1>Tic Tac Toe</h1>
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
