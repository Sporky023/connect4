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

const detectHorizontalWins = (state, targetColor) => {
  let wins = []

  state.forEach( (column, x) => {
    column.forEach( (space, y) => {
      const win = horizontalWinFromSpace( state, targetColor, {x, y} )

      if(win) { wins.push(win) }
    } )
  } )

  return wins
}
export { detectHorizontalWins }

const verticalWinInColumn = (column, targetColor, colIndex) => {
  let output = []

  column.forEach( (space, i) => {
    if( space === targetColor ) {
      output.push( [colIndex, i] )
    } else {
      output = []
    }
  } )

  if( output.length < 4 ) {
    return null
  } else {
    return output
  }
}

const horizontalWinFromSpace = ( state, targetColor, spaceCoords ) => {
  var output = []

  for(var dx = 0; dx < 4; dx++){
    const targetCoords = { x: spaceCoords.x + dx, y: spaceCoords.y }

    if( boardStateAt(state, targetCoords) === targetColor ){
      output.push(targetCoords)
    } else {
      return null
    }
  }

  return output
}

const boardStateAt = (state, coords) => (state[ coords.x ][ coords.y ])
