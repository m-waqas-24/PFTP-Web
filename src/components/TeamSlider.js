import React, { Component } from 'react';
import Datas from '../data/team/team-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/teamSlider.js";
import ModalVideo from 'react-modal-video';
import  "../helper/helper";
import axios from 'axios';

class TeamSlider extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            id:'',
            reviews : [],
        }
        this.openModal = this.openModal.bind(this);
        this.getData = this.getData.bind(this);
    }

        openModal(id) {
            this.setState({ 
                isOpen: true,
                id:id
                      })
        }

        getData = async () =>{
            const domains = await axios.get(global.config.URL.api.public + 'students-reviews');
            this.setState({
                reviews:domains.data? domains.data.studentsReviews : []
        });
        }
        componentDidMount()
        {
            this.getData();
        }
    render() {
        const settings = {
            slidesPerView: 4,
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
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }
        };

        return (
            <Styles>
                {/* Team Slider */}
                <section className="team-member-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.id} onClose={() => this.setState({ isOpen: false })} />
                            <Col md="12" className="team-slider">
                               {
                               this.state.reviews.length > 0 ? 
                                <Swiper {...settings}>
                                    {
                                        this.state.reviews.map((data, i) => (
                                            <div className="team-item" key={i}>
                                                <img src={global.config.URL.img.public  + data.thumbnail} alt="" className="img-fluid" />
                                                <button onClick={() => this.openModal(data.yt_id)} className="play-button"><i className="las la-play"></i></button>
                                                <div className="img-content text-center">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.prize}</p>
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

export default TeamSlider
