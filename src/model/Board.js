import {
  detectVerticalWins,
  detectTraversingWins
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
    const horizontalWins = detectTraversingWins(this.state, targetColor, 0)
    const diagRisingWins = detectTraversingWins(this.state, targetColor, 1)

    return [
      ...verticalWins,
      ...horizontalWins,
      ...diagRisingWins
    ]
  }
}

export default Board
