import React from 'react'
import PropTypes from 'prop-types'

import BoardCol from './BoardCol'

const Board = ({boardState}) => {
  console.log('Board()', boardState)

  return (
    <div>
      { boardState.map( (column, i) => <BoardCol key={i} col={column} /> ) }
    </div>
  )
}

Board.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.array)
}

export default Board
