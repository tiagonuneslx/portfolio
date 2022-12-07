import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from 'Routes/home'
import Footer from 'Components/footer'

export default function App() {

  return (
    <Router basename="/portfolio">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
