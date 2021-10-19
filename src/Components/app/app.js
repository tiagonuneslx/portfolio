import React, { useEffect, useState } from 'react'
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

  const [isWelcomeVisible, setWelcomeVisible] = useState(true)

  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const mediaQuery = window.matchMedia("(max-width: 576px)")
  const listener = (e) => {
    setIsSmallDevice(e.matches)
  }
  useEffect(() => {
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    }
  })

  return (
    <Router basename="/portfolio">
      <Navbar style={{
        backgroundColor: `rgb(255,255,255,${isWelcomeVisible ? 0.0 : 0.9})`,
        transition: 'background-color 0.5s ease',
      }} variant="light" fixed="top" expand="sm">
        <Navbar.Brand as={Link} exact to="/" className="ml-md-3"
          style={{
            fontSize: '26px',
            letterSpacing: '1.8px',
            fontWeight: '300',
            opacity: isWelcomeVisible ? 0.0 : 1.0,
            transition: 'opacity 0.5s ease',
          }}>
          {isSmallDevice ? "Portfolio" : "Tiago Nunes' Portfolio"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact to="/" style={{
              marginLeft: '30px',
              fontSize: '16px',
              letterSpacing: '1.2px',
              fontWeight: '400'
            }}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects"
              style={{
                marginLeft: '30px',
                marginRight: '30px',
                fontSize: '16px',
                letterSpacing: '1.2px',
                fontWeight: '400'
              }}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home onWelcomeVisibilityChanged={setWelcomeVisible} />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
