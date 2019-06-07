import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { startGame } from 'actions'
import Board from 'components/Board'

const Draw = ({boardState, startGame}) => {
  useEffect( () => {
    alert('It was a draw')
    startGame()
  } )

  return ( <Board boardState={boardState} /> )
}

const mapStateToProps = state => ({ boardState: state.board })

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch( startGame() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Draw)
