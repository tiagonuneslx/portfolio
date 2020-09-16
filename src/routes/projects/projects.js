import React from 'react'
import projects from '../../Data/projects.json'

export default function Projects() {
  return <div>
    {projects.map(project =>
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-sm-4">
            <img src={process.env.PUBLIC_URL + "projects_thumbnails/" + project.thumbnailSrc} class="card-img" alt="..." />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">Online Portfolio</h5>
              <p class="card-text">A project I built in my spare time to show off my projects and experience and practice React and Bootstrap.</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
}
