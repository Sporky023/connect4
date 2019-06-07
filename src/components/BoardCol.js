import React from 'react'
import clone from 'clone'
import { Button } from 'reactstrap'

import BoardSpace from './BoardSpace'

const paddedCol = col => (
  [ ...( new Array( 6 - col.length ).fill('X') ), ...( clone(col).reverse() ) ]
)

const hasWinningTile = (reversedY, winningYValues) => (
  winningYValues &&
  winningYValues.indexOf( 5 - reversedY ) > -1
)

const BoardCol = ({col, winningTileYValues, onPlay}) => (
  <div style={{ display: 'inline-block' }}>
    <Button onClick={onPlay}> V </Button>

    { paddedCol(col).map( (color, reversedY) => (
      <BoardSpace
        key={reversedY}
        color={color}
        hasWinningTile={ hasWinningTile(reversedY, winningTileYValues) } />
    ) ) }
  </div>
)

export default BoardCol
