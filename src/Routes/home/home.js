import AboutMe from 'Components/aboutme'
import Slider from 'Components/slider'
import Welcome from 'Components/welcome'
import React from 'react'
import PropTypes from 'prop-types';
import Projects from "../../Components/projects";

export default function Home() {
    return (
        <div>
            <Welcome/>
            <Projects/>
            <AboutMe/>
            <Slider/>
        </div>
    )
}

Home.propTypes = {
    onWelcomeVisibilityChanged: PropTypes.func.isRequired,
};