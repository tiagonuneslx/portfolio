import React from 'react'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Button>YO</Button>
        </header>
      </div>
    </Router>
  )
}
