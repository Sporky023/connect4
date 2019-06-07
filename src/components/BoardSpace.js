import React from 'react'

import colors from 'colors'

const squareStyle = {
  width: '40px',
  height: '40px',
  paddingTop: '5px',
  paddingLeft: '5px',
  backgroundColor: '#eee'
}

const circleStyle = (color, hasWinningTile) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: { 'B': 'black', 'R': 'red', 'X': 'white' }[color],
  borderWidth: hasWinningTile ? '5px' : '0px',
  borderColor: '#69bdee',
  borderStyle: 'solid'
})

const BoardSpace = ({color, hasWinningTile}) => (
  <div style={squareStyle}>
    <div style={ circleStyle(color, hasWinningTile) }></div>
  </div>
)

export default BoardSpace
