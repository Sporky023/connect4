import React from 'react'

import BoardSpace from './BoardSpace'

const paddedCol = col => (
  [ ...( new Array( 6 - col.length ).fill('X') ), ...( col.reverse() ) ]
)

const BoardCol = ({col}) => {
  return (
    <div style={{ display: 'inline-block' }}>
      { paddedCol(col).map( (color, i) => (
        <BoardSpace key={i} color={color} />
      ) ) }
    </div>
  )
}

export default BoardCol
