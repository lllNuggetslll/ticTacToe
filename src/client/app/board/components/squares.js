import React from 'react'

const squares = (square, rowIndex, rowColumn, playPiece, piece) => (
  <button onClick={() => playPiece(rowIndex, rowColumn)}>{piece}</button>
)

export default squares
