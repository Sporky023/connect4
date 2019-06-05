import React, { Component } from 'react'
import Board from 'components/Board'

import { connect } from 'react-redux'
import { startGame } from 'actions'

class GameContainer extends Component {
  render () {
    const { boardState } = this.props

    return (<Board boardState={boardState} />)
  }
}

const mapStateToProps = state => ({
  boardState: state.board
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame)
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
