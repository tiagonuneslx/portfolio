import React, {Component} from 'react'
import technologies from 'Data/technologies.json'
import $ from 'jquery'
import 'bootstrap'
import 'slick-carousel/slick/slick'
import './slider.css'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

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
    }

    render() {
        return (
            <div
                style={{
                    backgroundImage: 'url(' + process.env.PUBLIC_URL + '/orange_gradient.svg)',
                    backgroundSize: 'cover',
                }}
            >
                <div className="py-5">
                    <section className="customer-logos slider mt-4">
                        {Object.keys(technologies).map((key) => (
                            <OverlayTrigger
                                placement="top"
                                key={key}
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
                                        style={{width: '80px', height: '80px'}}
                                    />
                                </div>
                            </OverlayTrigger>
                        ))}
                    </section>
                </div>
            </div>
        )
    }
}
