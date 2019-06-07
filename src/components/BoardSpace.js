import React from 'react'

import BoardCircle from 'components/BoardCircle'

// import colors from 'colors'

const squareStyle = {
  width: '40px',
  height: '40px',
  paddingTop: '5px',
  paddingLeft: '5px',
  backgroundColor: '#eee'
}

const BoardSpace = ({color, hasWinningTile}) => (
  <div style={squareStyle}>
    <BoardCircle color={color} hasWinningTile={hasWinningTile} />
  </div>
)

export default BoardSpace
