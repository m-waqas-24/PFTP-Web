import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";
import Swal from 'sweetalert2'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showOptions: false,
          };
        this.logout = this.logout.bind(this);
        this.apply = this.apply.bind(this);
       
    }
    apply = () => {
    Swal.fire({
        icon: "warning",
        html: '<a class="linktext" href="/registration">Apply For Online</a>',
        footer: '<a class="linktext" href="https://onsite.pftpedu.org/registration">Apply For Onsite</a>',
        showCancelButton: false,
        showConfirmButton: false
      });
    };
    handleApplyNowClick = () => {
        this.setState((prevState) => ({
          showOptions: !prevState.showOptions,
        }));
      };
    logout()
    {
        localStorage.clear();
        window.location.href = '/';
    }
    render() {
        return (
            <Styles>
                {/* Topbar */}
                <section className="top-bar">
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-map-marker"></i>General Head Office, 57400 Postal Area, Model Town, Lahore, Punjab</li>
                                        {/* <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/faq"}>Have Questions?</Link></li> */}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/professional-freelancing-training-program/mycompany/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/pftpofficial/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href=" https://www.youtube.com/c/pftpofficial" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-lang">
                                        <li className="list-inline-item">
                                            <Dropdown>
                                                <Dropdown.Toggle as="a"><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" />English</Dropdown.Toggle>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item">{global.config.Login ? <Link onClick={() => this.logout()}><i className="las la-sign-out-alt"></i>Log Out</Link> : <Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"></i>Log In</Link>}</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-user-edit"></i>Register</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area */}
                <section className="logo-area">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="logo-contact-box d-flex justify-content-end">
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Call Us Now</p>
                                            <span><a href='tel:+92034321118' className='text-success'>0303-4321118</a> | <a href='tel:+92184321118' className='text-success'>0323-1230488</a> </span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-envelope"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Enquiry Us</p>
                                            <span><a href='mailto:support@pftpedu.org' className='text-success'>support@pftpedu.org</a> </span>
                                        </div>
                                    </div>
                                    <div className="apply-btn">
                                    {global.config.Login ?
                                        <Link to={process.env.PUBLIC_URL + "/my-account"}><i className="las la-user"></i>My Account</Link>

                                        : <Button onClick={() => this.apply()}><i className="las la-clipboard-list"></i>Apply Now</Button>
                                    }
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Navbar */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
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
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/terms-and-conditions"}>Terms & Condition </Link></li>
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
                                            {/* <li className="nav-item dropdown">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Thynk Tech </Link>
                                            </li> */}
                                             <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">NYF Events <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/guests"}>PFTP | Guests</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"to={process.env.PUBLIC_URL + "/gallery/Chapter2021"}>NYF  | Chapter 2021</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Chapter2022"}>NYF  | Chapter 2022</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Conferences"}>PFTP   | Conferences</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Alumni"}>PFTP   | Alumni</Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>To Become Payment Partner</Link></li> */}
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                            <li className="nav-item search-box">
                                                <Search />
                                            </li>
                                            <li className="nav-item cart-box">
                                                <Link to={process.env.PUBLIC_URL + "/my-cart"} className="nav-link nav-cart">
                                                <i className="las la-shopping-cart"></i>
                                                </Link>
                                            </li>
                                            <li className="nav-item side-box">
                                                <Sidebar />
                                            </li>
                                        </ul>
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

export default Header
