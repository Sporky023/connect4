import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import Board from 'components/Board'
import { playMove } from 'actions'

const Turn = ({message, boardState, currentPlayer, playMove}) => {
  return (
  <Fragment>
    <h2> Your turn, player { currentPlayer } </h2>

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
  message: state.game.message,
  boardState: state.board,
  currentPlayer: state.game.currentPlayer
})

const mapDispatchToProps = dispatch => ({
  playMove: (player, colIndex) => dispatch( playMove(player, colIndex) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Turn)
