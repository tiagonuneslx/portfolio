import React, { Component } from 'react'
import './workexp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { DotPattern } from '../dotpattern/dotpattern'

export default class WorkExp extends Component {

  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/orange_gradient.svg)',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <DotPattern />
        <div style={{ padding: '48px 32px 32px' }}>
          <div id="workexperience"
               style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="exprow" style={{ display: 'flex' }}>
              <ul className="cbp_tmtimeline">
                <li>
                  <div className="cbp_tmicon">
                    <img src={process.env.PUBLIC_URL + '/bryj_logo.png'} alt="Bryj Logo" width="80"
                         height="80" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated"
                       style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)' }}>
                    <h3>Android Developer</h3>
                    <div className="date">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Oct 2021 - May 2024
                    </div>
                    <h4>Bryj Technologies, Inc., Lisbon</h4>
                    <div className="projectParagraph">
                      <p>Working for a US-based company on the development of over twenty different apps for customers
                        from various
                        industries, such as eCommerce, insurance, banking, real estate, some of them are large
                        enterprises.</p>

                      <p>Communicating daily with colleagues from Canada, France, and other countries,
                        following Agile processes and good practices such as peer code reviews.</p>

                      <p>After about two years of working here, I was assigned the Android Lead Developer role, working
                        on the internal SDKs and conducting technical interviews for new hires.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cbp_tmicon">
                    <img src={process.env.PUBLIC_URL + '/quatenus_logo.png'}  alt="Quatenus Logo" width="80" height="80" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated"
                       style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)' }}>
                    <h3>Mobile Developer Junior</h3>
                    <h4>Quatenus International - World Wide Intelligent Location, Lisbon</h4>
                    <div className="date"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Oct 2020 - Oct
                      2021
                    </div>
                    <div className="projectParagraph">
                      <p>Worked for a IoT company in the development of applications for multiple types of Android devices, including Smartphones, Tablets, TVs, and custom devices.</p>

                      <p>Some apps were developed using multi-platform frameworks to speed up development, such as Ionic and Kotlin Multiplatform. We also explored real-time data streaming technologies.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}