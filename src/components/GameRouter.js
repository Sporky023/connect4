import React from 'react'

import PickColors from 'containers/PickColors'
import Turn from 'containers/Turn'
import Win from 'containers/Win'
import Draw from 'containers/Draw'

const GameRouter = ({gameStatus}) => {
  switch(gameStatus){
    case('picking-colors'):{ return <PickColors /> }
    case('turn'):{ return <Turn /> }
    case('win'):{ return <Win /> }
    case('draw'):{ return <Draw /> }
    default:{ return <div>no gameStatus</div> }
  }
}

export default GameRouter
