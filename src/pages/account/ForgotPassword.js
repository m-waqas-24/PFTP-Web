import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import axios from 'axios';
const ForgotPassword = props => {
    const [otp, setOtp] = useState(false);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [mob, setMob] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
      };
      const handleChangeMob = (e) => {
        setMob(e.target.value);
      };
      
      
    
            const formSubmitOtp = (e) => {
                e.preventDefault();
                const user = document.getElementById("login_user");
                const userValue = user.value.trim();
              
                if (userValue === "") {
                    setError(user, "Code can't be blank");
                } else {
                    setSuccess(user,'');
                }
    
                if(user.value.trim() )
                {
                    
                    verifyOTP(user)
                }
    
            }

            const formSubmit = (e) => {
                e.preventDefault();
                const user = document.getElementById("login_user");
                const mobIn = document.getElementById("login_mob");
               
             
                if (email  === "" && mob  !== "") {
                    setError(user, "Email can't be blank");
                }else if(mob === ""  && email !== ""){
                    setError(mobIn, "Mobile can't be blank");
                } else if(email  === "" && mob === ""){
                    setError(mobIn, "Mobile can't be blank");
                    setError(user, "Email can't be blank");

                } 
                
                
                else {
                    sendCode(user,mobIn)
                    setSuccess(user,'');
                    setSuccess(mobIn,'');
                }
    
                
    
            }
    

    function setError(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector("#error");
        formControl.className = "form-control text-left error";
        errorMsg.className ="login_input-msg";
        errorMsg.innerText = message;
    }

    function setSuccess(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
        const errorMsg = formControl.querySelector("#error");
        formControl.className = "form-control text-left succ";
        errorMsg.className ="span";
        errorMsg.innerText = message;
    }
    async function sendCode(user,mobIn) {
        setLoading(true) 
        const res = await axios.post(global.config.URL.api.user + 'forgot-password',{
            email: email,
             mob: mob
        });
      
            if (res.data.success) {
              setMsg(res.data.message)
              setSuccess(user, res.data.message)
              setLoading(false)
            } else {
              setError(user, res.data.message)
              setError(mobIn, res.data.message)
             setLoading(false)
        
            }
        }
    async function verifyOTP(user) {
        setLoading(true)
        
        const res = await axios.post(global.config.URL.api.user + 'verify-otp', {
          email: email,
          otp: user.value
        });
    
        if (res.data.success) {
            setLoading(false)
          setSuccess(user, res.data.message)
        } else {
            setLoading(false)
          setError(user, res.data.message)
    
        }
    }
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper login-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="forgot-password" bg="Breadcrumbs/extra/Account-Registration.png" />

                {/* Login Area */}
                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                               
                                    <div className="login-box">
                                    <div className="login-title text-center">
                                        <h3>forgot-password</h3>
                                        <small className='text-success'>{msg}</small>
                                    </div>
                                    { otp ?
                                    <div>
                                <form onSubmit={(e) => formSubmitOtp(e)} className="form">
                                <p className="form-control">
                                    <label htmlFor="login_user">Code</label>
                                    <input type="Number" placeholder="Enter Code " id="login_user" />
                                    <span id="error"></span>
                                </p>
                                
                                {loading ? <button type='button'>verifying ...</button>  : 
                                <button type='submit'>Verify</button>  }
                               
                               
                            </form>
                             <div className="have_account-btn text-center">
                             <p> Reset Done ? <Link to="/login">Login Here</Link></p>
                         </div>
                         </div>
                              :
                                    <form onSubmit={(e) => formSubmit(e)} className='form'>
                                        <p className="form-control">
                                            <label htmlFor="login_user">Email</label>
                                            <input type="text" placeholder="Email" id="login_user" value={email}
                                                onChange={handleChange}/>
                                            <span id="error"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="login_user">Mobile</label>
                                            <input type="text" placeholder="Enter Registered Mobile Number" id="login_mob" value={mob}
                                                onChange={handleChangeMob}/>
                                            <span id="error"></span>
                                        </p>
                                        
                                        {loading ? <button type='button'>sending ...</button>  : 
                                        <button type='submit'>Reset</button>  }
                                       
                                       
                                    </form>
                                    
                                    }
                                     <div className="have_account-btn text-center">
                                     <p> Reset Done ? <Link to="/login">Login Here</Link></p>
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

export default ForgotPassword