import React from 'react'

export default function AboutMe() {
  return (
    <div>
      <div
        class="jumbotron jumbotron-fluid mb-0"
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/home_hero.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div class="container">
          <h2 class="pt-0">About me</h2>
          <div class="three-columns mt-4">
            <p>
              <h6 class="pb-2">📱 Mobile Developer @ Quatenus International</h6>
            </p>
            <p>
              <h6>Android 🤖</h6>
              - Kotlin & Java
              <br />- Coroutines, Flows, Threads, AsyncTasks
              <br />- Jetpack Compose, Jetpack Libraries, View system
              <br />- UI/UX, Animations, Transitions, Motion, Gestures
              <br />- Gradle, Maven
            </p>
            <p>
              <h6>iOS 🤳</h6>
              - Swift & Objective C
              <br />- Swift UI
              <br />- Kotlin / Objective C interoperability
              <br />- Cocoapods, Carthage, Frameworks
            </p>
            <p>
              <h6>Multiplatform 💻📱🤳</h6>
              - Kotlin Multiplatform (KMP & KMM)
              <br />- Ionic (Cordova, Capacitor)
            </p>
            <p>
              <h6>Web 🌎</h6>
              - REST, SOAP, GraphQL, gRPC, Websockets
              <br />- Django, Ktor, Spring, Express.js, Node.js, Laravel
              <br />- Vue.js, React.js
              <br />- SQL, NoSQL
              <br />- Firebase, GCP, Amplify, AWS and other Cloud Solutions
            </p>
            <p>
              Kotlin enthusiast 🎉 chatting with Google, Jetbrains, Square devs
              in Kotlin Slack.
            </p>
            <p>Active in community efforts and platforms.</p>
            <p>
              Currently working in IoT. Interested in Artificial Intelligence,
              Machine Learning, Edge Computing, Big Data, Cloud solutions,
              Realtime data streaming, sharing of code and multiplatform
              frameworks for faster app development and optimization of
              development efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
