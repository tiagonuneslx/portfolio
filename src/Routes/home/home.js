import AboutMe from 'Components/aboutme'
import Slider from 'Components/slider'
import Welcome from 'Components/welcome'
import Contacts from 'Components/contacts'
import React from 'react'
import PropTypes from 'prop-types';

export default function Home(props) {
  return (
    <div>
      <Welcome onVisibilityChanged={props.onWelcomeVisibilityChanged} />
      <Slider />
      <AboutMe />
      <Contacts />
    </div>
  )
}

Home.propTypes = {
  onWelcomeVisibilityChanged: PropTypes.node.isRequired,
};