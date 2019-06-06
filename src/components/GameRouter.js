import React from 'react'

import PickColors from 'containers/PickColors'
import Turn from 'containers/Turn'

const GameRouter = ({gameStatus}) => {
  switch(gameStatus){
    case('picking-colors'):{
      return <PickColors />
    }
    case('turn'):{
      return <Turn/>
    }
    default:{
      return <div>no gameStatus</div>
    }
  }
}

export default GameRouter
