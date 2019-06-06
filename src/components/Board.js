import React from 'react'
import PropTypes from 'prop-types'

import BoardCol from './BoardCol'

const Board = ({boardState, onPlay}) => {
  return (
    <div>
      { boardState.map( (column, i) => (
        <BoardCol key={i} col={column} onPlay={ () => onPlay(i) } />
      ) ) }
    </div>
  )
}

Board.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.array),
  onPlay: PropTypes.func
}

export default Board
