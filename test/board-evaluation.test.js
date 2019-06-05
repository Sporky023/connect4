import Board from 'model/Board'
import states from 'testSupport/boardStates'

test('A vertical sequence of four is a win', () => {
  let board = new Board( states.verticalWinForBlack.state )

  expect( board.getWins('B') ).toEqual( states.verticalWinForBlack.wins )
})
