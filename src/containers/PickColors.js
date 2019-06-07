import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'

import { pickPlayer1Color } from 'actions'

const PickColors = ({pickPlayer1Color}) => (
  <Fragment>
    <div className='text-center'>
      <h1>Welcome!</h1>

      <h2 className='mt-4'>Player 1, please choose your color</h2>
    </div>

    <Row className='mt-5'>
      <Col xs={{ offset: 3, size: 3}} className='text-right'>
        <Button color='danger' onClick={() => pickPlayer1Color('R') }>
          Gimme Red!
        </Button>
      </Col>

      <Col xs='3'>
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
