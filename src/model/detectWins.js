const detectVerticalWins = (state, targetColor) => {
  let wins = []

  state.forEach( (column, i) => {
    const win = verticalWinInColumn(column, targetColor, i)

    if(win){
      wins.push(win)
    }
  } )

  return wins
}
export { detectVerticalWins }

const detectTraversingWins = (state, targetColor, dy) => {
  let wins = []

  state.forEach( (column, x) => {
    column.forEach( (space, y) => {
      const win = traversingWinFromSpace(
        state,
        targetColor,
        {x, y},
        {dx: 1, dy }
      )

      if(win){ wins.push(win) }
    } )
  } )

  return wins
}
export { detectTraversingWins }

const verticalWinInColumn = (column, targetColor, colIndex) => {
  let win = []

  column.forEach( (space, i) => {
    if( space === targetColor ) {
      win.push( {x:colIndex, y:i} )
    } else {
      win = []
    }
  } )

  if( win.length < 4 ) {
    return null
  } else {
    return win
  }
}

const traversingWinFromSpace = (state, targetColor, spaceCoords, slope) => {
  var win = []

  for( var i = 0; i < 4; i++ ){
    const dx = slope.dx * i
    const dy = slope.dy * i
    const targetCoords = { x: spaceCoords.x + dx, y: spaceCoords.y + dy }

    if( boardStateAt(state, targetCoords) === targetColor ){
      win.push(targetCoords)
    } else {
      return null
    }
  }

  return win
}

const boardStateAt = (state, coords) => (
  state[ coords.x ] ?
  state[ coords.x ][ coords.y ] :
  undefined
)
