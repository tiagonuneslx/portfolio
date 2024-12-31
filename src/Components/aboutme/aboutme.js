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
              <div style={{fontSize: '1.2rem'}}>
                <p>
                  I&apos;m 26 years old. I have 4 years of work experience as an Android Developer, and a Masters in
                  Computer Engineering from ISCTE-Lisbon, specializing in Intelligent Systems and Data Science.
                </p>
                <p>
                  Currently, I&apos;m looking for work in <img src={process.env.PUBLIC_URL + '/swiss_flag.png'} alt="Swiss Flag" width="24" height="24" />Switzerland, preferably around Geneva or Lausanne, in
                  Android
                  or Web Development.
                </p>
                <p>
                  In my spare time, I like to play the electric guitar, play video games and travel.
                </p>
              </div>
            </div>
            <div className="col-sm">
              <img src={
                process.env.PUBLIC_URL +
                '/Tiago_Nunes_Photo_Orange_BG.png'
              } alt="Tiago Nunes Photo" width="280" height="280" style={{
                border: '3px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                padding: '4px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
