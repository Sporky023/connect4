import {
  detectVerticalWins,
  detectTraversingWins
} from 'model/detectWins'

const defaultBoardState = [
  [], [], [], [], [], [], []
]

class Board {
  constructor(initialState=defaultBoardState) {
    this.state = [...initialState]
  }

  getState = () => {
    return this.state
  }

  playMove = (color, columnIndex) => {
    if( this.state[columnIndex].length >= 6 ){
      return false
    } else {
      this.state[columnIndex].push(color)
      return true
    }
  }

  getWins = (targetColor) => {
    const verticalWins = detectVerticalWins(this.state, targetColor)
    const horizontalWins = detectTraversingWins(this.state, targetColor, 0)
    const diagRisingWins = detectTraversingWins(this.state, targetColor, 1)
    const diagDescendingWins = detectTraversingWins(this.state, targetColor, -1)

    return [
      ...verticalWins,
      ...horizontalWins,
      ...diagRisingWins,
      ...diagDescendingWins
    ]
  }
}

export default Board
