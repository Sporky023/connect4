const verticalWinForBlack = {
  state: [
    ['B', 'B', 'B', 'B'],
    ['R', 'R', 'R'],
    ['R'],
    [],
    [],
    [],
    []
  ],
  wins: [
    [ [0, 0], [0, 1], [0, 2], [0, 3] ]
  ]
}

const horizontalWinForBlack = {
  state: [
    ['R', 'B'],
    ['R', 'B'],
    ['R', 'B'],
    ['B', 'B'],
    ['R', 'R'],
    [],
    []
  ],
  wins: [ [ {x:0,y:1}, {x:1,y:1}, {x:2,y:1}, {x:3,y:1} ] ]
}

export default {
  verticalWinForBlack,
  horizontalWinForBlack
}
