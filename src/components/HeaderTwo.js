import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";

class HeaderTwo extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar 2 */}
                <section className="top-bar2">
                    <Container>
                        <Row>
                            <Col lg="9" md="9">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-phone"></i> <span><a href='tel:+92034321118'>0303-4321118</a> | <a href='tel:+92184321118'>0323-1230488</a> </span></li>
                                        <li className="list-inline-item"><i className="las la-envelope"></i><span><a href='mailto:support@pftpedu.org'>support@pftpedu.org</a> </span></li>
                                        <li className="list-inline-item"><i className="las la-map-marker"></i>General Head Office, Model Town, Lahore, Punjab
                                    </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="3" md="3">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/professional-freelancing-training-program/mycompany/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/pftpofficial/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href=" https://www.youtube.com/c/pftpofficial" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                    </ul>

                                    <ul className="list-unstyled list-inline sidebar-button">
                                        <li className="list-inline-item nav-item side-box">
                                            <Sidebar />
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area 2 */}
                <section className="logo-area2">
                    <Container>
                        <Row>
                            <Col md="2">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="10">
                                <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/"} >Home</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/about"} data-toggle="dropdown">About  <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/ceo-message"}>Message By: CEO | PFTP</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/pm-edu-message"}>Message By: Provincial Minister of Punjab for Education Department</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/pm-pa-message"}>Message By: Provincial Minister of Punjab for Agriculture</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/sg-message"}>Message By: Spokesperson Government of Punjab</Link></li>
                                                 </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">Courses  <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/online-courses"}>Online Courses </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/onsite-courses"}>Onsite Courses </Link></li>
                                                    
                                                 </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">Opportunities   <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/scholarships"}>Scholarships </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/internships"}>Internships  </Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Startups </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Affiliate Partner </Link></li> */}
                                                 </ul>
                                            </li>
                                           
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">Info Desk <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                  <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/complete-guideline"}>Complete Guidline </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/how-to-apply"}>How to Apply </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/how-to-pay"}>How to Pay </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/certificate-status"}>PFTP Certificate Status</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/terms-and-conditions"}>Terms & Condition </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/sops"}>SOPS </Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>FAQs</Link></li> */}
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">Join Hands <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-ambassador"}>Apply For Ambassadorship</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-instructor"}>Apply For Instructorshipr</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-mou-partner"}>Apply For MOU</Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-investor"}>To Become Investor</Link></li> */}
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>To Become Payment Partner</Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">NYF Events <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/guests"}>PFTP | Guests</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Chapter2021"}>NYF  | Chapter 2021</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Chapter2022"}>NYF  | Chapter 2022</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Conferences"}>PFTP   | Conferences</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Alumni"}>PFTP   | Alumni</Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>To Become Payment Partner</Link></li> */}
                                                </ul>
                                            </li>
                                        </ul>
                                  
                                    <div className="apply-btn">
                                    {global.config.Login ?
                                        <Link to={process.env.PUBLIC_URL + "/my-account"}><i className="las la-user"></i>My Account</Link>

                                       : <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                    }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default HeaderTwo
