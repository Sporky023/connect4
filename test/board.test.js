import Board from 'model/Board'

test('Allows you to set the state manually', () => {
  const manualState = [
    [], [], [], [], [], [], []
  ]

  let board = new Board(manualState)

  const returnedState = board.getState()

  expect(returnedState).toEqual(manualState)
})
