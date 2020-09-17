import React from 'react'
import projects from 'Data/projects.json'
import technologies from 'Data/technologies.json'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-lg-5">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/projects_thumbnails/' +
                  project.thumbnailSrc
                }
                class="card-img"
                alt={project.name + ' thumbnail'}
              />
            </div>
            <div class="col-sm">
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">{project.description}</p>
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
    </div>
  )
}
