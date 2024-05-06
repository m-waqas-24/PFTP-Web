import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/sidebar.js";

function Sidebar() {
    useEffect(() => {
        const sidebarBtn = document.getElementById("sidebar-btn");

        if (sidebarBtn) {
            const sidebarOverlay = document.getElementById("sidebar-overlay");
            const sidebarBody = document.getElementById("sidebar-body");
            const sidebarExit = document.getElementById("close-sidebar");

            sidebarBtn.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.add("visible");
                sidebarBody.classList.add("opened");
            });

            sidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });

            sidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });
        }
    });

    return (
        <Styles>
            {/* Sidebar */}
            <a href={process.env.PUBLIC_URL + "/"} className="nav-link nav-sidebar" id="sidebar-btn">
                <i className="las la-bars"></i>
            </a>

            <div className="sidebar" id="sidebar-body">
                <div className="side-logo d-flex justify-content-between">
                    <div><Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="side-content">
                    <h5>Our Mission</h5>
                    <p className="text-justify">PFTP’s mission is to train the youth of Pakistan in the world of Information technology skill sets to shape the technical workforce for emerging technologies that will contribute to Pakistan’s economy, National Infrastructure security, and a dream of a digital and, prosperous Pakistan that is why this institute has also been endorsed by different Government Personnel.</p>
                </div>
                
                <div className="side-contact">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><i className="las la-map-marker"></i>General Head Office, 57400 Postal Area, Model Town, Lahore, Punjab</li>
                        <li><i className="las la-phone"></i><span><a href='tel:+92034321118' className='text-success'>0303-4321118</a> | <a href='tel:+92184321118' className='text-success'>0323-1230488</a> </span> </li>
                        <li><i className="las la-envelope"></i><span><a href='mailto:support@pftpedu.org' className='text-success'>support@pftpedu.org</a> </span></li>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a href="https://www.facebook.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/professional-freelancing-training-program/mycompany/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/pftpofficial/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href=" https://www.youtube.com/c/pftpofficial" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
        </Styles>
    )
}

export default Sidebar
