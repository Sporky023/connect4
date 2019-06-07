import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import Players from 'components/Players'
import Board from 'components/Board'
import { playMove } from 'actions'

const Turn = ({
  message,
  player1Color,
  player2Color,
  currentPlayer,
  boardState,
  playMove
}) => {
  return (
  <Fragment>
    <Players
      player1Color={player1Color}
      player2Color={player2Color}
      currentPlayer={currentPlayer}
    />

    <Board
      boardState={boardState}
      onPlay={ colIndex => playMove(currentPlayer, colIndex) }
    />

    { message && <Alert color='warning'>{message}</Alert> }
  </Fragment>
)
}

const mapStateToProps = state => ({
  key: JSON.stringify(state.board),
  player1Color: state.game.player1Color,
  player2Color: state.game.player2Color,
  currentPlayer: state.game.currentPlayer,
  message: state.game.message,
  boardState: state.board,
})

const mapDispatchToProps = dispatch => ({
  playMove: (player, colIndex) => dispatch( playMove(player, colIndex) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Turn)
