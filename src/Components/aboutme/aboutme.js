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
          <div className="row mt-5 pt-5 mb-5 pb-5">
            <div className="col-lg-8">
              <h2 className="p-0 pb-4 mb-3" style={{
                textAlign: 'start',
                fontWeight: 'bold',
              }}>More about me…</h2>
              <div style={{ fontSize: '1.2rem' }}>
                <p>
                  I&apos;m 27 years old.
                  I work as a Senior Android Engineer at Signicat, the leading provider of digital identity solutions in Europe.
                </p>
                <p>I have 5 years of work experience as an Android Developer, and a Masters in
                Computer Engineering from ISCTE-Lisbon, specializing in Intelligent Systems and Data Science.
                </p>
              </div>
            </div>
            <div className="col-sm">
              <img src={
                process.env.PUBLIC_URL +
                '/Tiago_Nunes_Photo.jpeg'
              } alt="Tiago Nunes Photo" width="260" height="260" style={{
                border: '3px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                padding: '4px',
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
