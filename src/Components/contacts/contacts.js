import React from 'react'

export default function Contacts() {
  return (
    <div class="container py-5">
      <h2 class="pt-0">Contacts</h2>
      <div class="three-columns mt-4">
        <p>Address: Lisbon, Portugal</p>
        <p>Email: tiago.nunes.lx@gmail.com</p>
        <p>Phone Number: +351934271696</p>
        <p>
          Facebook:{' '}
          <a href="https://www.facebook.com/tiago.nunes.564813" target="_blank">
            Tiago Nunes
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
            target="_blank"
          >
            Tiago Nunes
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/tiagonuneslx" target="_blank">
            tiagonuneslx
          </a>
        </p>
      </div>
    </div>
  )
}
