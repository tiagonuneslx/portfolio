import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from '../../routes/home'
import Projects from '../../routes/projects'
import Interests from '../../routes/interests'

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/interests">
            Interests
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
