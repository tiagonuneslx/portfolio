import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import useElementOnScreen from 'Hooks/useElementOnScreen'
import PropTypes from 'prop-types';
import './welcome.css'

export default function Welcome(props) {

  const containerRef = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }, props.onVisibilityChanged)

  return (
    <div
      id="welcome-section"
      style={{
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/gray_gradient.png)',
      }}
    >
      <div id="welcome-content">
        <h1 className="display-4" style={{ marginBottom: '16px' }}>Hi there, and welcome!</h1>
        <p className="lead">
          My name is <span style={{
            fontWeight: '400'
          }}>Tiago Nunes</span> and I&apos;m a mobile developer
        </p>
        <div
          ref={containerRef}
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            margin: '20px 0',
          }} />
        <p>
          Here, you can get to know about some of my projects and interests.
        </p>
        <p
          className="lead"
          style={{
            marginTop: '24px'
          }}>
          <NavLink
            className="btn btn-primary btn-lg rounded-pill"
            to="/projects"
            role="button"
            style={{
              height: '48px',
              lineHeight: '47px',
              textAlign: 'center',
              padding: '0 20px',
              fontSize: '15px',
              fontWeight: '700',
            }}
          >
            Check out Projects
          </NavLink>
          <span id="welcome-contacts">
            <a
              className="btn btn-light btn-lg rounded-circle"
              href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="btn btn-light btn-lg ml-2 rounded-circle"
              href="https://github.com/tiagonuneslx"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="btn btn-light btn-lg ml-2 rounded-circle"
              href="https://stackoverflow.com/users/15160482/tiago-nunes"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a
              className="btn btn-light btn-lg ml-2 rounded-circle"
              href="mailto:tiago.nunes.lx@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </span>
        </p>
      </div>
      <img id="welcome-image" src={
        process.env.PUBLIC_URL +
        '/programming_cover.jpeg'
      } />
    </div>
  )
}

Welcome.propTypes = {
  onVisibilityChanged: PropTypes.node.isRequired,
};
