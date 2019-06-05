import { detectVerticalWins, detectHorizontalWins } from 'model/detectWins'

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

    return [
      ...verticalWins,
      ...horizontalWins
    ]
  }
}

export default Board
