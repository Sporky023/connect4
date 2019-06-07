import React from 'react'
import PropTypes from 'prop-types'

import BoardCol from './BoardCol'

const winningTileYValues = (x, win) => (
  win &&
  win.filter( coords => coords.x === x ).map( coords => coords.y )
)

const Board = ({boardState, onPlay, win}) => (
  <div style={{display: 'inline-block'}}>
    {
      boardState.map( (column, x) => {
        return (
          <BoardCol
            key={x}
            col={column}
            winningTileYValues={ winningTileYValues(x, win) }
            onPlay={ () => onPlay(x) }
          />
        )
      } )
    }
  </div>
)

Board.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.array),
  onPlay: PropTypes.func
}

export default Board
