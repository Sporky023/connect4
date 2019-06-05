import { detectVerticalWins } from 'model/detectWins'

class Board {
  constructor(initialState=null) {
    this.state = initialState
  }

  getState = () => {
    return this.state
  }

  getWins = (targetColor) => {
    const verticalWins = detectVerticalWins(this.state, targetColor)

    return [
      ...verticalWins
    ]
  }
}

export default Board
