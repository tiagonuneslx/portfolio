import AboutMe from 'Components/aboutme'
import Slider from 'Components/slider'
import Welcome from 'Components/welcome'
import React from 'react'
import PropTypes from 'prop-types'
import Projects from '../../Components/projects'
import WorkExp from '../../Components/workexp'

export default function Home() {
  return (
    <div>
      <Welcome />
      <WorkExp />
      <Projects />
      <AboutMe />
      <Slider />
    </div>
  )
}

Home.propTypes = {
  onWelcomeVisibilityChanged: PropTypes.func.isRequired,
}