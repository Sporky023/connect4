const emptyBoard = [ [], [], [], [], [], [], [] ]

const boardReducer = (state=emptyBoard, action) => {
  let newState = [...state]

  switch(action.type){
    case('game-start'): {
      newState = [...emptyBoard]
      break
    }
  }

  return newState
}

export default boardReducer
