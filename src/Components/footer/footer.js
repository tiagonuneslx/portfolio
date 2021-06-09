import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer
      className="page-footer font-small text-center py-3"
      style={{
        backgroundColor: '#eceff1',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      2021 Tiago Nunes Portfolio |
      <a
        href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="ml-2 mr-1" />
        LinkedIn
      </a>
      ,
      <a
        href="https://github.com/tiagonuneslx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="mx-1" />
        GitHub
      </a>
    </footer>
  )
}
