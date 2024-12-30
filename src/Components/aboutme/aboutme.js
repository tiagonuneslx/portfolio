import React from 'react'

export default function AboutMe() {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid mb-0"
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/dark_gray_gradient.svg)',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <h2 className="p-0 pb-4" style={{
            textAlign: 'start',
            fontWeight: 'bold',
          }}>More about me…</h2>
          <div className="row mt-4">
            <div className="col-sm">
              <p>
                I&apos;m 26 years old. I have 4 years of work experience as an Android Developer, and a Masters in
                Computer Engineering from ISCTE-Lisbon, specializing in Intelligent Systems and Data Science.
              </p>
              <p>
                Currently, I&apos;m looking for work in 🇨🇭Switzerland, preferably around Geneva or Lausanne, in Android
                or Web Development.
              </p>
              <p>
                In my spare time, I like to play the electric guitar, play video games and travel.
              </p>
            </div>
            <div className="col-sm">
              <p>
                In my career, I have worked with the following technologies:
              </p>
              <p>
                <h6>
                  Android{' '}
                  <span role="img" aria-label="">
                  🤖
                </span>
                </h6>
                - Kotlin & Java
                <br />- Coroutines, Flows, Threads, AsyncTasks
                <br />- Jetpack Compose, Jetpack Libraries, View system
                <br />- UI/UX, Animations, Transitions, Motion, Gestures
                <br />- Gradle, Maven
              </p>
            </div>
            <div className="col-sm">
              <p>
                <h6>
                  Multiplatform{' '}
                  <span role="img" aria-label="">
                  💻
                </span>
                  <span role="img" aria-label="">
                  📱
                </span>
                  <span role="img" aria-label="">
                  🤳
                </span>
                </h6>
                - Kotlin Multiplatform (KMP & KMM)
                <br />- Ionic (Cordova, Capacitor)
              </p>
              <p>
                <h6>
                  Web{' '}
                  <span role="img" aria-label="">
                  🌎
                </span>
                </h6>
                - REST, SOAP, GraphQL, gRPC, Websockets
                <br />- Django, Ktor, Spring, Express.js, Node.js, Laravel
                <br />- Vue.js, React.js
                <br />- SQL, NoSQL
                <br />- Firebase, GCP, Amplify, AWS and other Cloud Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
