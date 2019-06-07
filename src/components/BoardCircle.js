import React from 'react'

const circleStyle = (color, hasWinningTile, inline, big) => ({
  width: big ? '40px' : '30px',
  height: big ? '40px' : '30px',
  borderRadius: '50%',
  backgroundColor: { 'B': 'black', 'R': 'red', 'X': 'white' }[color],
  borderWidth: hasWinningTile ? '5px' : '0px',
  borderColor: '#69bdee',
  borderStyle: 'solid',
  display: inline && 'inline-block'
})

const BoardCircle = ({color, hasWinningTile, inline, big}) => (
  <div style={ circleStyle(color, hasWinningTile) }></div>
)

export default BoardCircle
