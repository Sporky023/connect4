import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'

import { pickPlayer1Color } from 'actions'

const PickColors = ({pickPlayer1Color}) => (
  <Fragment>
    <h1>Welcome to Connect 4!</h1>

    <h2>Player 1, please choose your color</h2>

    <Row>
      <Col xs={{ offset: 3, width: 3}}>
        <Button color='danger' onClick={() => pickPlayer1Color('R') }>
          Gimme Red!
        </Button>
      </Col>

      <Col xs={{ offset: 3, width: 3}}>
        <Button color='secondary' onClick={() => pickPlayer1Color('B') }>
          Gimme Black!
        </Button>
      </Col>
    </Row>
  </Fragment>
)

const mapDispatchToProps = dispatch => ({
  pickPlayer1Color: color => dispatch( pickPlayer1Color(color) )
})

export default connect( () => ({}), mapDispatchToProps)(PickColors)
