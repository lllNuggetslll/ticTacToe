import React from 'react'

// components
import squareDispenser from './squares'

const rows = (row, rowIndex, playPiece) => (
  row.map((square, rowColumn) => (
    squareDispenser(square, rowIndex, rowColumn, playPiece, row[rowColumn])
  ))
)

export default rows
