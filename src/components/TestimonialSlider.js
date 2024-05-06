import React, { Component } from 'react';
import Datas from '../data/testimonial/testimonial-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/testimonialSlider.js";
import  "../helper/helper";
import axios from 'axios';
class TestimonialSlider extends Component {

    constructor() {
        super()
        this.state = {
            govtAppreciations : [],
        }
       
        this.getData = this.getData.bind(this);
    }

    getData = async () =>{
        const data = await axios.get(global.config.URL.api.public + 'govt-appreciations');
        this.setState({
            govtAppreciations:data.data? data.data.govtAppreciations : []
    });
    }
    componentDidMount()
    {
        this.getData();
    }
    render() {
        const settings = {
            slidesPerView: 2,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 2
                }
            }
        };

        return (
            <Styles>
                {/* Testimonial Slider */}
                <section className="testimonial-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="testimonial-slider">
                            {
                               this.state.govtAppreciations.length > 0 ? 
                                <Swiper {...settings}>
                                    {
                                        this.state.govtAppreciations.map((data, i) => (
                                            <div className="slider-item" key={i}>
                                                <div className="desc">
                                                    <h5>{data.title}</h5>
                                                    <p>{data.testimony}</p>
                                                </div>
                                                <div className="writer">
                                                    <img src={global.config.URL.img.public  + data.thumbnail} className="slider-image" alt={'GOVT. Appreciations'} />
                                                    <h6>{data.name}</h6>
                                                    <p>{data.designation}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Swiper>
                            :'' }                                
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TestimonialSlider
