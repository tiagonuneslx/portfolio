import React, { Component } from 'react'
import technologies from 'Data/technologies.json'
import $ from 'jquery'
import 'bootstrap'
import 'slick-carousel/slick/slick'
import './slider.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class Slider extends Component {
  componentDidMount() {
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
          breakpoint: 768,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    })
  }

  render() {
    return (
      <div className="container py-5">
        <h2 className="pt-0">Technologies</h2>
        <section className="customer-logos slider mt-4">
          {Object.keys(technologies).map((key) => (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{technologies[key].name}</Tooltip>}
            >
              <div className="slide">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/technologies_logos/' +
                    technologies[key].logoSrc
                  }
                  alt={technologies[key].name + ' logo'}
                  style={{ width: '56px', height: '56px' }}
                />
              </div>
            </OverlayTrigger>
          ))}
        </section>
      </div>
    )
  }
}
