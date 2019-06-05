import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = () => (
  <div>Hello World. This will become Connect 4</div>
)

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('mountpoint')
)
