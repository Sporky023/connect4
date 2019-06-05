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
