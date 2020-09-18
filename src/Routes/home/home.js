import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'Components/slider'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/home_hero.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div class="container">
          <h1 class="display-4">Hi there, and welcome!</h1>
          <p class="lead">
            My name is Tiago Nunes, and this is my online portfolio.
          </p>
          <hr class="my-4" />
          <p>
            Here, you can get to know about some of my projects and interests.
          </p>
          <p class="lead">
            <NavLink
              class="btn btn-primary btn-lg"
              to="/projects"
              role="button"
            >
              Check out Projects
            </NavLink>
            <a
              class="btn btn-light btn-lg ml-3"
              href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
            <a
              class="btn btn-light btn-lg ml-2"
              href="https://github.com/tiagonuneslx"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
          </p>
        </div>
      </div>
      <Slider />
    </div>
  )
}
