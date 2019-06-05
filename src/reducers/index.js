import { combineReducers } from 'redux'

import gameReducer from './gameReducer'
import boardReducer from './boardReducer'

const rootReducer = combineReducers({
  game: gameReducer,
  board: boardReducer
})

export default rootReducer
