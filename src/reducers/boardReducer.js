import clone from 'clone'

import BoardModel from 'model/Board'

const emptyBoard = [ [], [], [], [], [], [], [] ]

const boardReducer = (state=emptyBoard, action) => {
  let newState = clone(state)

  switch(action.type){
    case('game-start'): {
      newState = clone(emptyBoard)
      break
    }
    case('play-move-of-color'): {
      const boardModel = new BoardModel( clone(newState) )
      boardModel.playMove(action.color, action.colIndex)
      newState = boardModel.getState()
      break
    }
  }

  return newState
}

export default boardReducer
