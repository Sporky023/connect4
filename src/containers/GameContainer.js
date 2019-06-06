import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame } from 'actions'
import GameRouter from 'components/GameRouter'

class GameContainer extends Component {
  componentDidMount() {
    this.props.startGame()
  }

  render () {
    const { gameStatus } = this.props

    return (<GameRouter gameStatus={gameStatus} />)
  }
}

const mapStateToProps = state => ({
  gameStatus: state.game.status
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
