import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer
      className="page-footer font-small text-center py-3"
      style={{
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
        backgroundSize: 'cover',
      }}
    >
      Last updated in December 2024 · Tiago Nunes Portfolio |
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
