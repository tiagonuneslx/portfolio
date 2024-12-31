import React from 'react'
import projects from '../../Data/projects.json'
import technologies from '../../Data/technologies.json'
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GridPattern } from '../gridpattern/gridpattern'

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
    <div style={{ position: 'relative', backgroundColor: 'rgba(65,96,255,0.06)' }}>
      <GridPattern />
      <Container id="projects-container" className="pb-5 pt-5">
        <div style={{ backgroundImage: 'radial-gradient(ellipse, #EFEFEF, transparent 70%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '56px', }}>
          <h2 style={{
            marginBottom: '-7px',
            fontWeight: 'bold',
          }}>Personal Projects</h2>
          <div style={{width: '160px', height: '2px', background: 'linear-gradient(to right, #101F2E55, #101F2E, #101F2E55)', display: 'flex'}}></div>
        </div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card mb-3"
            onMouseOver={hoverProject}
            onMouseLeave={resetHoverProject}
            style={{
              background: 'linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)), url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
              backgroundSize: 'cover',
              color: 'white',
            }}
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
                    {project.appUrl ? (
                      <a
                        href={project.appUrl}
                        className="btn btn-primary mr-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="mr-1"
                        />
                        Download App
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
                        key={technologies[technology].name}
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
                      <span key={technologies[technology].name} />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}