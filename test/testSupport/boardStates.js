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
  wins: [ [ {x:0,y:0}, {x:0,y:1}, {x:0,y:2}, {x:0,y:3} ] ]
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

const diagRisingWinForBlack = {
  state: [
    ['B'],
    ['R', 'B'],
    ['B', 'R', 'B'],
    ['R', 'B', 'R', 'B'],
    ['R', 'R'],
    [],
    []
  ],
  wins: [ [ {x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:3} ] ]
}

const diagDescendingWinForBlack = {
  state: [
    ['R', 'B', 'R', 'B'],
    ['B', 'R', 'B'],
    ['R', 'B'],
    ['B'],
    ['R', 'R'],
    [],
    []
  ],
  wins: [ [ {x:0,y:3}, {x:1,y:2}, {x:2,y:1}, {x:3,y:0} ] ]
}

export default {
  verticalWinForBlack,
  horizontalWinForBlack,
  diagRisingWinForBlack,
  diagDescendingWinForBlack
}
