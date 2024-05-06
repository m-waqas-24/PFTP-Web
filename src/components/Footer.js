import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";

class Footer extends Component {
    render() {
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" className="img-fluid" />
                                    <p>Professional Freelancing Training Program (𝐏𝐅𝐓𝐏) is an initiative that is highly appreciated by the Government of Pakistan to train the youth in different skill sets. </p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>H.O.57400 Postal Area, Model Town, Lahore, Punjab</li>
                                        <li><i className="las la-envelope"></i><a href='mailto:support@pftpedu.org'>support@pftpedu.org</a></li>
                                        <li><i className="las la-phone"></i><a href="tel:+923034321118">0303-4321118</a> | <a href="tel:+923231230488">0323-1230488 </a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-links">
                                    <h5>Useful Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/complete-guideline"}><i className="las la-angle-right"></i>Complete Guide</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/how-to-apply"}><i className="las la-angle-right"></i>How to Apply</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/how-to-pay"}><i className="las la-angle-right"></i>How to Pay</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/terms-and-conditions"}><i className="las la-angle-right"></i>Terms & Condition </Link></li>
                                        <li ><Link to={process.env.PUBLIC_URL + "/privacy-policy"}><i className="las la-angle-right"></i>Privacy Policy</Link></li>
                                        <li ><Link to={process.env.PUBLIC_URL + "/sops"}><i className="las la-angle-right"></i>SOPS </Link></li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/scholarships"}><i className="las la-angle-right"></i>Scholarships</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/internships"}><i className="las la-angle-right"></i>Internships</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Payment Partner</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/contact"}><i className="las la-angle-right"></i>Contact Us</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>FAQs</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo-white.png"} className='logo' alt=""/>
                                
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; {new Date().getFullYear()} | Developed by <a href={process.env.PUBLIC_URL + "/"}  className='text-light'>PFTP</a></p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                <li className="list-inline-item"><a href="https://www.facebook.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/professional-freelancing-training-program/mycompany/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/pftpofficial/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href=" https://www.youtube.com/c/pftpofficial" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    }
}

export default Footer
