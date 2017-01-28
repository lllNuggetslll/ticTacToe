import React,{ Component } from 'react'
import { connect } from 'react-redux'

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
    if (this.props.game) {
      const {
        board,
        currentPlayer,
        piece,
        winner
      } = this.props.game

      console.log(board)

    }
    return (
      <h1>Here!</h1>
    )
  }
}

function mapStateToProps (state) {
  return {
    game: state.boardReducer.game
  }
}

export default connect(mapStateToProps, {
  getNewBoard,
  playPiece
})(Board)
