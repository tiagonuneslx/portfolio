import React, { Component } from 'react'
import technologies from 'Data/technologies.json'
import 'bootstrap'
// import 'slick-carousel/slick/slick'
import './slider.css'
import { DotPattern } from '../dotpattern/dotpattern'

export default class Slider extends Component {
  /*componentDidMount() {
    $('.customer-logos').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 9,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 250,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }*/

  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/orange_gradient.svg)',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <DotPattern alpha="0.1" pid="technologies-dotpattern"  />
        <div style={{ padding: '80px 32px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '56px',
          }}>
            <h2 style={{
              marginBottom: '8px',
              fontWeight: 'bold',
            }}>Technologies I&apos;ve worked with</h2>
            <div style={{
              width: '160px',
              height: '2px',
              background: 'linear-gradient(to right, #FFFFFF70, #FFFFFFA0, #FFFFFF70)',
              display: 'flex',
            }}></div>
          </div>
          <section className="customer-logos slider mt-4" style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {Object.keys(technologies).map((key) => (
              <div className="slide" key={key}
                   style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10
                }}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/technologies_logos/' +
                      technologies[key].logoSrc
                    }
                    alt={technologies[key].name + ' logo'}
                    style={{ width: '64px', height: '64px', display: 'flex' }}
                  />
                </div>
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  marginTop: '16px',
                }}>{technologies[key].name}</h3>
              </div>
            ))}
          </section>
        </div>
      </div>
    )
  }
}
