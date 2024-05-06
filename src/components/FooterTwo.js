import React, { useEffect } from 'react';
import Datas from '../data/footer/footer2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";
import axios from 'axios';
function FooterTwo() {
    useEffect(() => {
         // Validation
         var isName=false;
         var isEm=false;
        const form = document.getElementById("form4");
        const name = document.getElementById("name4");
        const email = document.getElementById("email4");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const emailValue = email.value.trim();
            const nameValue = name.value.trim();
           
            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                isName = true;
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                isEm = true;
                setSuccess(email);
            }

            if(isName && isEm)
            {
               subscribe();
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg4");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }

        const subscribe = async () =>{
            const res = await axios.post(global.config.URL.api.public + 'subscribe/',{
               name: name.value.trim(),
               email: email.value.trim(),
             
             });
             if(res && res.data.success)
             {
                name.value = '';
                email.value = '';
              alert(res.data.success)
             }else{
              const message = res.data.message;
              if(message.name)
              {
               setError(name,  message.name);
              }
              if(message.email)
              {
               setError(email,  message.email);
              }
             
            }    
        }
    });

    return (
        <Styles>
            {/* Footer Two */}
            <footer className="footer2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
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
                                        <li ><Link to={process.env.PUBLIC_URL + "/contact"}><i className="las la-angle-right"></i>Contact Us </Link></li>
                                    </ul>
                                   
                                </div>
                        </Col>
                       
                        <Col md="4">
                            <div className="f-newsletter">
                                <h5>Newsletter</h5>
                                <p>Get The Latest News & Updates On Your Box</p>

                                <form id="form4" className="form">
                                <p className="form-control">
                                        <input type="text" placeholder="Enter Name here" id="name4" />
                                        <span className="input-msg4"></span>
                                    </p>
                                    <p className="form-control">
                                        <input type="email" placeholder="Enter email here" id="email4" />
                                        <span className="input-msg4"></span>
                                    </p>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="copytext-area text-center">
                                    <p>Copyright &copy; 2020 | Developed by <a href={process.env.PUBLIC_URL + "/"} className="text-light">PFTP</a></p>
                                    <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/professional-freelancing-training-program/mycompany/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/pftpedu" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/pftpofficial/" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href=" https://www.youtube.com/c/pftpofficial" target={'_blank'} rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo
