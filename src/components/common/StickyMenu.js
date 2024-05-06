import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";

function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                 stickyMenu.classList.remove("sticky")
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
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
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/terms-and-conditions"}>Terms & Condition </Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/sops"}>SOPS </Link></li>
                                                    {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>FAQs</Link></li> */}
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Contact Us</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"onClick={ (event) => event.preventDefault() }   to={'#!'} data-toggle="dropdown">Join Hands <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-ambassador"}>Apply For Ambassadorship</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-instructor"}>Apply For Instructorship</Link></li>
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
        </Styles>
    )
}

export default StickyMenu