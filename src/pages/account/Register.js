import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import axios from 'axios';
import { RegisterBreadcrumb } from '../../components/common/RegisterBreadcrumb';
import swal from 'sweetalert'
import { InfinitySpin } from 'react-loader-spinner';
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2';

function Register() {
    const [loading,setLoading] = useState(false);
    const [show,setShow] = useState(false);
    useEffect(() => {
        Swal.fire({
                imageUrl: process.env.PUBLIC_URL + `/assets/images/PFTPRegisteration.png`,
                imageWidth: 400,
                imageHeight: 600,
                imageAlt: "Custom image"
          });
        const form = document.getElementById("form_registration");
        const name = document.getElementById("registration_name");
        const mob = document.getElementById("registration_mob");
        const email = document.getElementById("registration_email");
        
        const password = document.getElementById("registration_password");
        const cpassword = document.getElementById("registration_cpassword");

        // Validation
        var isName=false;
        var isEm=false;
        var isMob=false;
        var isPass=false;

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const mobValue = mob.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const cpasswordValue = cpassword.value.trim();
           
            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else if(nameValue.length > 150)
            {
                setError(name, "Enter Valid Name");
            } else {
                isName = true;
                setSuccess(name);
            }
            if (mobValue === "") {
                setError(mob, "Mobile Number can't be blank");
            }else if (!isMobile(mobValue) || mobValue.length !==11) {
                console.log(mobValue.length ,'mobValue.length ')
                setError(mob, "Mobile Number must be 11 digits");
            } else {
                isMob = true;
                setSuccess(mob);
            }
            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue) || emailValue.length > 150) {
                setError(email, "Not a valid email");
            } else {
                isEm = true;
                setSuccess(email);
            }
            if (passwordValue === "") {
                setError(password, "Password can't be blank");
            } else if (passwordValue.length < 8) {
                setError(password, "Password must be at least 8 characters in length");
            }else if (passwordValue.length > 150) {
                setError(password, "Password must be less than least 150 or greater than 8 characters in length");
            } 
            else {
                isPass = true;
                setSuccess(password);
            }

            if (cpasswordValue === "" || passwordValue !== cpasswordValue) {
                setError(cpassword, "Password doesn't match");
            } else {
                setSuccess(cpassword);
            }
           
            if(isName && isEm && isMob && isPass)
            {
               register();
            }
           
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".registration_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
           
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }

        function isMobile(mobile) {
            return mobile.match('[0-9]{11}');
        }

        const register = async () =>{
            setLoading(true);
            const res = await axios.post(global.config.URL.api.user + 'register',{
               name: name.value.trim(),
               email: email.value.trim(),
               mob: mob.value.trim(),
               password: password.value.trim(),
             });
             if(res && res.data.success)
             {  
               
               localStorage.setItem("authUser", JSON.stringify(res.data));
               swal({
                title: "Registered!",
                text: "Your account has been successfully registered!",
                icon: "success",
                button: "OK!",
              }).then(() => {
                    window.location.href = 'create-profile';
                });
              
             }else{
              setLoading(false)
              const message = res.data.message;
              if(message.name)
              {
               setError(name,  message.name);
              }
              if(message.email)
              {
               setError(email,  message.email);
              }
              if(message.mob)
              {
               setError(mob,  message.mob);
              }
              if(message.password)
              {
               setError(password,  message.password);
              }
              
        }
       }   
    },[]);

    return (
        
        <Styles>
                   <Helmet>
              <script>
  {` 
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '960063198243678');
fbq('track', 'PageView');
 `}
    </script>
    <noscript>{`<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=960063198243678&ev=PageView&noscript=1"
/>`}</noscript>
            </Helmet>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Registration" bg="Breadcrumbs/extra/Account-Registration.png" />
                <RegisterBreadcrumb/>
                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                        <Col md="12">
                           
                            </Col>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Registration</h3>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_name">Name</label>
                                            <input type="text" placeholder="Enter name" id="registration_name" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">Email Address</label>
                                            <input type="email" placeholder="Email address" id="registration_email" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_mob">Mobile</label>
                                            <input type="text" placeholder="Enter Mobile" id="registration_mob" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_password">Password</label>
                                            <input type={show ? 'text' : 'password'} placeholder="*******" id="registration_password" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_cpassword">Confirm Password</label>
                                            <input type={show ? 'text' : 'password'} placeholder="Confirm password" id="registration_cpassword" />
                                            <span className="registration_input-msg"></span>
                                           {show === true ? <i class="fa fa-eye float-end" aria-hidden="true" onClick={() => setShow(false)}></i> : <i class="fa fa-eye-slash float-end" onClick={() => setShow(true)} aria-hidden="true"></i> } 

                                        </p>
                                        {
                                            loading ? <button disabled className="text-center"><InfinitySpin  width='100' color="#ffb200" /></button> :  <button>Register Now</button>
                                        }
                                       
                                    </form>
                                    <div className="have_account-btn text-center">
                                        <p>Already have an account? <Link to="/login">Login Here</Link></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Register