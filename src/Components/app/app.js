import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from 'Routes/home'
import Projects from 'Routes/projects'
import Footer from 'Components/footer'

export default function App() {
  return (
    <Router basename="/portfolio">
      <Navbar bg="white" variant="light">
        <Navbar.Brand as={Link} exact to="/">
          Portfolio
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
