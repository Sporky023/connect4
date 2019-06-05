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

const detectDiagRisingWins = (state, targetColor) => {
  let wins = []

  state.forEach( (column, x) => {
    column.forEach( (space, y) => {
      const win = diagRisingWinFromSpace( state, targetColor, {x, y} )

      if(win) { wins.push(win) }
    } )
  } )

  return wins
}
export { detectDiagRisingWins }

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

const horizontalWinFromSpace = ( state, targetColor, spaceCoords ) => {
  var win = []

  for(var dx = 0; dx < 4; dx++){
    const targetCoords = { x: spaceCoords.x + dx, y: spaceCoords.y }

    if( boardStateAt(state, targetCoords) === targetColor ){
      win.push(targetCoords)
    } else {
      return null
    }
  }

  return win
}

const diagRisingWinFromSpace = ( state, targetColor, spaceCoords ) => {
  var win = []

  for( var dx = 0; dx < 4; dx++){
    const dy = dx
    const targetCoords = { x: spaceCoords.x + dx, y: spaceCoords.y = dy }

    if( boardStateAt(state, targetCoords) === targetColor ){
      win.push(targetCoords)
    } else {
      return null
    }
  }

  return win
}

const boardStateAt = (state, coords) => (state[ coords.x ][ coords.y ])
