const otherColor = (color) => (color === 'R' && 'B' || 'R')

const gameReducer = (state={}, action) => {
  let newState = Object.assign({}, state)
  newState.message = null

  switch(action.type){
    case('game-start'): {
      newState.status = 'picking-colors'
      break
    }
    case('pick-player1-color'): {
      newState.player1Color = action.color
      newState.player2Color = otherColor(action.color)
      newState.currentPlayer = 1
      newState.status = 'turn'
      break
    }
    case('play-move-of-color'): {
      switch(action.outcome){
        case('win'):{ newState.status = 'win'; break }
        case('draw'):{ newState.status = 'draw'; break }
        case('cont'):{ newState.currentPlayer = 3 - newState.currentPlayer }
      }
      break
    }
    case('invalid-move'): {
      newState.message = 'Invalid move'
      break
    }
  }

  return newState
}

export default gameReducer
