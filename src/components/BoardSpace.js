import React from 'react'

import colors from 'colors'

const squareStyle = {
  width: '40px',
  height: '40px',
  paddingTop: '5px',
  paddingLeft: '5px',
  backgroundColor: '#eee'
}

const circleStyle = color => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: { 'B': 'black', 'R': 'red', 'X': 'white' }[color]
})

const BoardSpace = ({color}) => (
  <div style={squareStyle}>
    <div style={ circleStyle(color) }></div>
  </div>
)

export default BoardSpace
