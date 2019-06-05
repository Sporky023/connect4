class Board {
  constructor(initialState=null) {
    this.state = initialState
  }

  getState = () => {
    return this.state
  }
}

export default Board
