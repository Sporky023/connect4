import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { startGame } from 'actions'

const Draw = ({startGame}) => {
  useEffect( () => {
    alert('It was a draw')
    startGame()
  } )

  return ( <div></div> )
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch( startGame() )
})

export default connect(() => ({}), mapDispatchToProps)(Draw)
