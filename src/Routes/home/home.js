import AboutMe from 'Components/aboutme'
import Slider from 'Components/slider'
import Welcome from 'Components/welcome'
import Contacts from 'Components/contacts'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Welcome />
      <Slider />
      <AboutMe />
      <Contacts />
    </div>
  )
}
