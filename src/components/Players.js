import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BoardCircle from 'components/BoardCircle'

const Player = ({name, color, isMyTurn}) => (
  <div className='text-center'>
    <h2> {name} </h2>
    <div className='text-center'>
      { isMyTurn && <BoardCircle color={color} inline={true} big={true} /> }
    </div>
  </div>
)

const Players = ({player1Color, player2Color, currentPlayer}) => (
  <Row>
    <Col xs='6'>
      <Player
        name='Player 1'
        color={player1Color}
        isMyTurn={ currentPlayer === 1}
      />
    </Col>

    <Col xs='6'>
      <Player
        name='Player 2'
        color={player2Color}
        isMyTurn={ currentPlayer === 2}
      />
    </Col>
  </Row>
)

export default Players
