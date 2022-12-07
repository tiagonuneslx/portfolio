import React from 'react'

export default function Contacts() {
    return (
        <div
            style={{
                backgroundImage: 'url(' + process.env.PUBLIC_URL + '/orange_gradient.svg)',
                backgroundSize: 'cover',
            }}>
            <div className="container py-5">
                <div className="three-columns mt-4">
                    <p>Address: Lisbon, Portugal</p>
                    <p>Email: tiago.nunes.lx@gmail.com</p>
                    <p>Phone Number: +351934271696</p>
                    <p>
                        Facebook:{' '}
                        <a
                            href="https://www.facebook.com/tiago.nunes.564813"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tiago Nunes
                        </a>
                    </p>
                    <p>
                        LinkedIn:{' '}
                        <a
                            href="https://www.linkedin.com/in/tiago-nunes-8430401b7/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tiago Nunes
                        </a>
                    </p>
                    <p>
                        GitHub:{' '}
                        <a
                            href="https://github.com/tiagonuneslx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tiagonuneslx
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
