import clone from 'clone'

import BoardModel from 'model/Board'

export const startGame = () => ({ type: 'game-start' })
export const pickPlayer1Color = color => ({ type: 'pick-player1-color', color })

export const playMove = (player, colIndex) => {
  return (dispatch, getState) => {
    const { game, board } = getState()
    const color = Number(player) === 1 ? game.player1Color : game.player2Color
    const boardModel = new BoardModel(clone(board))

    if( boardModel.playMove(color, colIndex) ){
      dispatch( playMoveOfColor(color, colIndex) )
    } else {
      dispatch( invalidMove() )
    }
  }
}

const playMoveOfColor = (color, colIndex) => {
  return ({ type: 'play-move-of-color', color, colIndex })
}

const invalidMove = () => ({ type: 'invalid-move' })
