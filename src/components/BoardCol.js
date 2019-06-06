import React from 'react'
import clone from 'clone'
import { Button } from 'reactstrap'

import BoardSpace from './BoardSpace'

const paddedCol = col => (
  [ ...( new Array( 6 - col.length ).fill('X') ), ...( clone(col).reverse() ) ]
)

const BoardCol = ({col, onPlay}) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Button onClick={onPlay}> V </Button>

      { paddedCol(col).map( (color, i) => (
        <BoardSpace key={i} color={color} />
      ) ) }
    </div>
  )
}

export default BoardCol
