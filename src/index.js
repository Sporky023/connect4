import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Row, Col } from 'reactstrap'

const HelloWorld = () => (
  <div>Hello World. This will become Connect 4</div>
)

ReactDOM.render(
  <Container>
    <Row>
      <Col xs={{ offset: 4, width: 4 }}>
        <HelloWorld />
      </Col>
    </Row>
  </Container>,

  document.getElementById('mountpoint')
)
