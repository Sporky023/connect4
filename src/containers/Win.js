import React from 'react'
import { connect } from 'react-redux'

const Win = ({currentPlayer}) => (
  <div>
    Player {currentPlayer} wins (this should be an alert)
  </div>
)

const mapStateToProps = state => ({
  currentPlayer: state.game.currentPlayer
})

export default connect(mapStateToProps)(Win)
