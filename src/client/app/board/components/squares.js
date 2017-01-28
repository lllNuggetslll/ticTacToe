import React from 'react'

const squares = (square, rowIndex, rowColumn, playPiece, row) => {
  if (row[rowColumn] === '?') {
     return <button key={rowIndex + rowColumn} onClick={() => playPiece(rowIndex, rowColumn)}>{row[rowColumn]}</button>
  } else {
    return <button key={rowIndex + rowColumn}>{row[rowColumn]}</button>
  }
}

export default squares
