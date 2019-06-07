import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { startGame } from 'actions'

const Win = ({currentPlayer, startGame}) => {
  useEffect( () => {
    alert(`Player ${currentPlayer} wins!`)
    startGame()
  } )

  return ( <div></div> )
}

const mapStateToProps = state => ({
  currentPlayer: state.game.currentPlayer
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch( startGame() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Win)
