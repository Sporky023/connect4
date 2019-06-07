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
      let outcome = 'cont'
      const wins = boardModel.getWins(color)

      if( wins.length > 0 ){ outcome = 'win' }
      if( boardModel.isDraw() ){ outcome = 'draw' }

      dispatch( playMoveOfColor(color, colIndex, outcome, wins[0]) )
    } else {
      dispatch( invalidMove() )
    }
  }
}

const playMoveOfColor = (color, colIndex, outcome, win) => {
  return ({ type: 'play-move-of-color', color, colIndex, outcome, win })
}

const invalidMove = () => ({ type: 'invalid-move' })
