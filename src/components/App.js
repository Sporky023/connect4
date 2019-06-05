import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import GameContainer from 'containers/GameContainer'

const App = () => (
  <Container>
    <Row>
      <Col xs={{ offset: 1, width: 10 }}>
        <GameContainer />
      </Col>
    </Row>
  </Container>
)

export default App
