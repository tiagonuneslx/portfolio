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
                        textAlign: "left",
                        fontWeight: "bold",
                    }}>About me</h2>
                    <div className="row mt-4">
                        <div className="col-sm">
                            <p>
                                <h6 className="pb-2">
                <span role="img" aria-label="">
                  📱
                </span>{' '}
                                    Mobile Developer @ Runtime Revolution
                                </h6>
                            </p>
                            <p>
                                Currently studying for a master&apos;s degree in Computer
                                Science at the University Institute of Lisbon – ISCTE.
                            </p>
                            <p>
                                Kotlin enthusiast{' '}
                                <span role="img" aria-label="">
                🎉
              </span>{' '}
                                chatting with Google, Jetbrains, Square devs in Kotlin Slack.
                            </p>
                            <p>Active in community efforts and platforms.</p>
                            <p>
                                Interested in Artificial Intelligence,
                                Machine Learning, Edge Computing, Big Data, Cloud solutions,
                                Realtime data streaming, sharing of code and multiplatform
                                frameworks for faster app development and optimization of
                                development efforts.
                            </p>
                        </div>
                        <div className="col-sm">
                            <p>
                                <h6>
                                    Android{' '}
                                    <span role="img" aria-label="">
                  🤖
                </span>
                                </h6>
                                - Kotlin & Java
                                <br/>- Coroutines, Flows, Threads, AsyncTasks
                                <br/>- Jetpack Compose, Jetpack Libraries, View system
                                <br/>- UI/UX, Animations, Transitions, Motion, Gestures
                                <br/>- Gradle, Maven
                            </p>
                            <p>
                                <h6>
                                    iOS{' '}
                                    <span role="img" aria-label="">
                  🤳
                </span>
                                </h6>
                                - Swift & Objective C
                                <br/>- Swift UI
                                <br/>- Kotlin / Objective C interoperability
                                <br/>- Cocoapods, Carthage, Frameworks
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
                                <br/>- Ionic (Cordova, Capacitor)
                            </p>
                            <p>
                                <h6>
                                    Web{' '}
                                    <span role="img" aria-label="">
                  🌎
                </span>
                                </h6>
                                - REST, SOAP, GraphQL, gRPC, Websockets
                                <br/>- Django, Ktor, Spring, Express.js, Node.js, Laravel
                                <br/>- Vue.js, React.js
                                <br/>- SQL, NoSQL
                                <br/>- Firebase, GCP, Amplify, AWS and other Cloud Solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
