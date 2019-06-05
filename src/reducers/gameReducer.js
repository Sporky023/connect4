const gameReducer = (state={}, action) => {
  let newState = Object.assign({}, state)

  switch(action.type){
    case('game-start'): {
      newState.status = 'picking-colors'
      break
    }
  }

  return newState
}

export default gameReducer
