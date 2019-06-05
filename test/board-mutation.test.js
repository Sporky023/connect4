import Board from 'model/Board'
import states from 'testSupport/boardStates'

test('A play on a full column is invalid', () => {
  let board = new Board(states.firstColumnFull.state)

  expect( board.playMove('B', 0) ).toBe(false)
})

test('A play on a non-full column is valid', () => {
  let board = new Board(states.firstColumnFull.state)

  expect( board.playMove('B', 1) ).toBe(true)
})
