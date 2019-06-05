import Board from 'model/Board'
import states from 'testSupport/boardStates'

test('A vertical sequence of four is a win', () => {
  let board = new Board(states.withVerticalWinForBlack)

  expect( board.getWins('B') ).toEqual( [
    [ [0, 0], [0, 1], [0, 2], [0, 3] ]
  ] )
})
