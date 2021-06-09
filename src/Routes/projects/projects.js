import React from 'react'
import projects from 'Data/projects.json'
import technologies from 'Data/technologies.json'
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
  function hoverProject(e) {
    e.currentTarget.getElementsByTagName('img')[0].style.opacity = 0.4
    e.currentTarget.getElementsByClassName('urls-buttons')[0].style.opacity = 1
  }

  function resetHoverProject(e) {
    e.currentTarget.getElementsByTagName('img')[0].style.opacity = 1
    e.currentTarget.getElementsByClassName('urls-buttons')[0].style.opacity = 0
  }

  return (
    <Container className="mt-4 mb-5">
      {projects.map((project, index) => (
        <div
          className="card mb-3"
          onMouseOver={hoverProject}
          onMouseLeave={resetHoverProject}
        >
          <div className="row no-gutters">
            <div
              className="col-lg-5 image-container"
              style={{
                minHeight: '200px',
              }}
            >
              <div className="row h-100 center-vertically urls-buttons">
                <div className="col-sm center-vertically text-center">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary mr-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGlobeAmericas}
                        className="mr-1"
                      />
                      Visit Website
                    </a>
                  ) : (
                    <span />
                  )}
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light ml-1"
                      style={{ border: '1px solid lightgray' }}
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-1" />
                      View Source Code
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/projects_thumbnails/' +
                  project.thumbnailSrc
                }
                alt={project.name + ' thumbnail'}
              />
            </div>
            <div className="col-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                {project.technologies.map((technology) =>
                  technologies[technology] ? (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>{technologies[technology].name}</Tooltip>
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/technologies_logos/' +
                          technologies[technology].logoSrc
                        }
                        alt={technologies[technology].name + ' logo'}
                        style={{ width: '56px', height: '56px' }}
                      />
                    </OverlayTrigger>
                  ) : (
                    <span />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  )
}
