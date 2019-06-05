import {
  detectVerticalWins,
  detectHorizontalWins,
  detectDiagRisingWins
} from 'model/detectWins'

class Board {
  constructor(initialState=null) {
    this.state = initialState
  }

  getState = () => {
    return this.state
  }

  getWins = (targetColor) => {
    const verticalWins = detectVerticalWins(this.state, targetColor)
    const horizontalWins = detectHorizontalWins(this.state, targetColor)
    const diagRisingWins = detectDiagRisingWins(this.state, targetColor)

    return [
      ...verticalWins,
      ...horizontalWins,
      ...diagRisingWins
    ]
  }
}

export default Board
