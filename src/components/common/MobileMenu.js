import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";

function MobileMenu() {
    const logout = () =>
    {
        localStorage.clear();
        window.location.href = '/';
    }
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    },[]);
   
    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i><a href='tel:+92034321118'>0303-4321118</a> <br></br><i className="las la-phone"></i> <a href='tel:+92184321118'>0323-1230488</a></p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">{global.config.Login ? <Link onClick={() => logout()}><i className="las la-sign-out-alt"></i>Log Out</Link> : <Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"></i>Log In</Link>}</li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item">
                                        {global.config.Login ?
                                        <Link to={process.env.PUBLIC_URL + "/my-account"}><i className="las la-user"></i>My Account</Link>
                                        :
                                        <Link to={process.env.PUBLIC_URL + "/registration"}>Register</Link>
                                        }
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="submit"><i className="las la-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>PFTP</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></p>
                        </button>
                       
                    </div>
                    
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>About <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/ceo-message"}>Message By: CEO | PFTP</Link></li>
                             <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/pm-edu-message"}>Message By: Provincial Minister of Punjab for Education Department</Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/pm-pa-message"}>Message By: Provincial Minister of Punjab for Agriculture</Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/sg-message"}>Message By: Spokesperson Government of Punjab</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Courses <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/online-courses"}>Online Courses</Link></li>
                             <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/onsite-courses"}>Onsite Courses</Link></li>
                           
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><Link to={process.env.PUBLIC_URL + "/courses"}>Courses</Link></p>
                        </button>
                       
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p>Opportunities <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/scholarships"}>Scholarships </Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/internships"}>Internships  </Link></li>
                            {/* <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Startups </Link></li>
                             <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Affiliate Partner </Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Info Desk  <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/complete-guideline"}>Complete Guideline </Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/how-to-apply"}>How to Apply </Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/how-to-pay"}>How to Pay </Link></li>
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/certificate-status"}>PFTP Certificate Status</Link></li>

                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/terms-and-conditions"}>Terms & Condition </Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/sops"}>SOPS </Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>FAQs</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>Join Hands <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-ambassador"}>Apply For Ambassadorship</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-instructor"}>Apply For Instructorship</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-mou-partner"}>Apply For MOU</Link></li>
                                                    {/* <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/become-investor"}>To Become Investor</Link></li> */}
                                                    {/* <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>To Become Payment Partner</Link></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p>NYF Events <i className="las la-plus"></i></p>
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                            <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/guests"}>PFTP | Guests</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Chapter2021"}>NYF  | Chapter 2021</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Chapter2022"}>NYF  | Chapter 2022</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Conferences"}>PFTP   | Conferences</Link></li>
                                                    <li><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery/Alumni"}>PFTP   | Alumni</Link></li>
                            </ul>
                        </div>
                    </div>
                   

                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu