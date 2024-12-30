import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './welcome.css'
import {Button} from "react-bootstrap";

export default function Welcome() {

    return (
        <div
            id="welcome-section"
            style={{
                backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
            }}
        >
            <div id="welcome-content">
                <h1 className="display-4" style={{marginBottom: '16px'}}>Hi there, and welcome!</h1>
                <p className="lead">
                    My name is <span style={{
                    fontWeight: 'bold'
                }}>Tiago Nunes</span> and I&apos;m an Android developer
                </p>
                <div
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        margin: '20px 0',
                    }}/>
                <p>
                    Here, you can get to know about some of my projects and interests.
                </p>
                <p
                    className="lead"
                    style={{
                        marginTop: '24px'
                    }}>
                    <Button
                        className="btn btn-primary btn-lg rounded-pill"
                        style={{
                            height: '48px',
                            lineHeight: '47px',
                            textAlign: 'center',
                            padding: '0 20px',
                            fontSize: '17px',
                            fontWeight: 'bold',
                        }}
                        onClick={() => {document.querySelector("#projects-container").scrollIntoView({ behavior: 'smooth', block: 'start'})}}
                    >
                        Check out Projects
                    </Button>
                    <span id="welcome-contacts">
            <a
                className="btn btn-light btn-lg rounded-circle"
                href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            >
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a
                className="btn btn-light btn-lg ml-2 rounded-circle"
                href="https://github.com/tiagonuneslx"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a
                className="btn btn-light btn-lg ml-2 rounded-circle"
                href="https://stackoverflow.com/users/15160482/tiago-nunes"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            >
              <FontAwesomeIcon icon={faStackOverflow}/>
            </a>
            <a
                className="btn btn-light btn-lg ml-2 rounded-circle"
                href="mailto:tiago.nunes.lx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            >
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
          </span>
                </p>
            </div>
            <img id="welcome-image" src={
                process.env.PUBLIC_URL +
                '/programming_cover.jpeg'
            }/>
        </div>
    )
}
