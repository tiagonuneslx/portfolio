import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Welcome() {
  return (
    <div
      className="jumbotron jumbotron-fluid mb-0"
      style={{
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/home_hero.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <h1 className="display-4">Hi there, and welcome!</h1>
        <p className="lead">
          My name is Tiago Nunes and I'm a mobile developer
        </p>
        <hr className="my-4" />
        <p>
          Here, you can get to know about some of my projects and interests.
        </p>
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg"
            to="/projects"
            role="button"
          >
            Check out Projects
          </NavLink>
          <a
            className="btn btn-light btn-lg ml-3"
            href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            LinkedIn
          </a>
          <a
            className="btn btn-light btn-lg ml-2"
            href="https://github.com/tiagonuneslx"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
