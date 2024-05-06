import React, { Component } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUs.js";

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="about-image">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`} className="main-img" alt="" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/pattern.png"} className="pattern-img" alt="" />
                                    <div className="video-player" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`}}>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='x0hgPULZqMk' onClose={() => this.setState({ isOpen: false })} />
                                        <button onClick={this.openModal} className="play-button"><i className="las la-play"></i></button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content">
                                    <h4 className="about-title p-0 mb-0">{Datas.title}</h4>
                                    <h5 className="about-title p-0 mb-0">{Datas.ceo}</h5>
                                    <p className="about-para">{Datas.desc1}<span>{Datas.desc2}</span></p>
                                    <Row>
                                        <Col sm="3">
                                            <div className="counter-box text-success text-center">
                                                <h3><CountUp end={30} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Courses </p>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="counter-box text-warning text-center">
                                                <h3><CountUp end={15000} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>PFTP Alumni </p>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="counter-box text-success text-center">
                                                <h3><CountUp end={1500} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Scholarships </p>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="counter-box text-warning text-center">
                                                <h3><CountUp end={10} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Startups </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/about"}>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUs
