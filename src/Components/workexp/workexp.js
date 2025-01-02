import React, { Component } from 'react'
import './workexp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEllipsisH, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { DotPattern } from '../dotpattern/dotpattern'

export default class WorkExp extends Component {

  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_blue_gradient.svg)',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <DotPattern alpha="0.5" />
        <div style={{ padding: '48px 32px 32px' }}>
          <div id="workexperience"
               style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="exprow" style={{ display: 'flex' }}>
              <ul className="cbp_tmtimeline">
                <li>
                  <div className="cbp_tmicon education">
                    <FontAwesomeIcon icon={faGraduationCap} color="white" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated education"
                       style={{
                         backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
                         paddingTop: '12px',
                         paddingBottom: '24px',
                         minHeight: '0',
                       }}>
                    <div className="projectParagraph">
                      <p>In 2024, I got my <strong style={{fontWeight: 'bold'}}>Master&apos;s in Computer Engineering</strong>,
                        from ISCTE-Lisbon, Portugal, specializing in Intelligent Systems and Data Science.</p>
                    </div>
                  </div>
                </li>
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
                    <img src={process.env.PUBLIC_URL + '/quatenus_logo.png'} alt="Quatenus Logo" width="80"
                         height="80" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated"
                       style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)' }}>
                    <h3>Mobile Developer Junior</h3>
                    <h4>Quatenus International - World Wide Intelligent Location, Lisbon</h4>
                    <div className="date"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Oct 2020 - Oct
                      2021
                    </div>
                    <div className="projectParagraph">
                      <p>Worked for a IoT company in the development of applications for multiple types of Android
                        devices, including Smartphones, Tablets, TVs, and custom devices.</p>

                      <p>Some apps were developed using multi-platform frameworks to speed up development, such as Ionic
                        and Kotlin Multiplatform. We also explored real-time data streaming technologies.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cbp_tmicon education">
                    <FontAwesomeIcon icon={faGraduationCap} color="white" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated education"
                       style={{
                         backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
                         paddingTop: '12px',
                         paddingBottom: '24px',
                         minHeight: '0',
                       }}>
                    <div className="projectParagraph">
                      <p>In 2020, I got my <strong style={{fontWeight: 'bold'}}>Bachelor&apos;s in Computer Science</strong>, from the University of Algarve, in Faro,
                        Portugal.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cbp_tmicon other">
                    <FontAwesomeIcon icon={faEllipsisH} color="white" />
                  </div>
                  <div className="cbp_tmlabel wow fadeInRight animated"
                       style={{
                         backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
                         paddingTop: '12px',
                         paddingBottom: '24px',
                         minHeight: '0',
                       }}>
                    <div className="projectParagraph">
                      <p>I discovered my passion for programming when I was around 12 years old. I started by
                        programming simple flash games, and plugins for video games.</p>
                      <p>Since then, I have worked on some personal projects, contributed to some open-source projects
                        (such as the <a href="https://github.com/GitLiveApp/firebase-kotlin-sdk" target="_blank"
                                    rel="noreferrer">Firebase Kotlin SDK</a>),
                        and participated in a few Hackathons (such as <a
                          href="https://tecnico.ulisboa.pt/pt/eventos/fenixhack/" target="_blank"
                          rel="noreferrer">Fénixhack 2020</a>), Conferences (such as <a
                          href="https://blog.jetbrains.com/pt-br/kotlin/2023/04/kotlinconf-2023-participe-da-transmissao-ao-vivo-e-tenha-respostas-as-suas-duvidas/"
                          target="_blank" rel="noreferrer">Kotlin I/O 2023</a>),
                        and Coding Challenges (such as <a
                          href="https://blog.google/technology/developers/googles-hash-code-2020/" target="_blank"
                          rel="noreferrer">Google Hashcode 2020</a>).
                      </p>
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