import Board from 'model/Board'
import states from 'testSupport/boardStates'

test('A vertical sequence of four is a win', () => {
  let board = new Board( states.verticalWinForBlack.state )

  expect( board.getWins('B') ).toEqual( states.verticalWinForBlack.wins )
})

test('A horizontal sequence of four is a win', () => {
  let board = new Board( states.horizontalWinForBlack.state )

  expect( board.getWins('B') ).toEqual( states.horizontalWinForBlack.wins )
})

test('A rising diagonal sequence of four is a win', () => {
  let board = new Board( states.diagRisingWinForBlack.state )

  expect( board.getWins('B') ).toEqual( states.diagRisingWinForBlack.wins )
})

test('A descending diagonal sequence of four is a win', () => {
  let board = new Board( states.diagDescendingWinForBlack.state )

  expect( board.getWins('B') ).toEqual( states.diagDescendingWinForBlack.wins )
})
