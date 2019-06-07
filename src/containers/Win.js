import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { startGame } from 'actions'
import Board from 'components/Board'

const Win = ({boardState, win, currentPlayer, startGame}) => {
  useEffect( () => {
    alert(`Player ${currentPlayer} wins!`)
    startGame()
  } )

  return ( <Board boardState={boardState} win={win} /> )
}

const mapStateToProps = state => ({
  boardState: state.board,
  win: state.game.win,
  currentPlayer: state.game.currentPlayer
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch( startGame() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Win)
