import React from 'react'

// Compoonents
import rowDispenser from './rows'

const table = (board, playPiece) => (
  <table className='table'>
    {board.map((row, rowIndex) => (
      <tr>
        {rowDispenser(row, rowIndex, playPiece)}
      </tr>
    ))}
  </table>
  )

export default table
