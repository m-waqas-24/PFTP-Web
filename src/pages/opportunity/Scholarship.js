import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/opportunity.js';
import axios from 'axios';
import swal from 'sweetalert';
class Scholarship extends Component {

    constructor(props){
        super(props);
        this.state = {
            rollno:null  
        }


        this.applyScholarships = this.applyScholarships.bind(this);

        
    
}
async applyScholarships  (e) {
    e.preventDefault();
    const input = document.getElementById("roll_no");
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector(".registration_input-msg");
    if(!global.config.Token){
        this.props.history.push('/login');
    }
    if(this.state.rollno == null)
    {
        input.focus();
        formControl.className = "form-control text-left error";
        errorMsg.innerText = "Please Enter Your Roll Number";
    }else
    {
        formControl.className = "form-control success";
        axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${global.config.Token}`;        
    const res = await axios.post(global.config.URL.api.apply + 'scholarship',{
        data : this.state
      },);
      if(res && res.data.success)
      {
        swal({
            title: "Submitted!",
            text: res.data.message,
            icon: "success",
            button: "OK!",
          })
      }else{
        input.focus();
        formControl.className = "form-control text-left error";
        errorMsg.innerText = res.data.message;
      }
    }
    
}
    render() {
    
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper message-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="PFTP | Scholarships" bg="Breadcrumbs/opportunity/scholarship.png" />

                    {/* message Details Area */}
                    <section className="message-area">
                        <Container>
                            <Row>
                            <Col md="12" className='text-center mb-5 upper'>
                            <img src={process.env.PUBLIC_URL + "/assets/images/pftp-dark-logo.png"} className='logo' alt=""/>

                                    <h2>SCHOLARSHIP PROGRAMS</h2>
                                    <div className="hr-theme-slash-2">
                                    <div className="hr-line"></div>
                                    <div className="hr-icon"><i className="fas fa-user-graduate fa-2x"></i></div>
                                    <div className="hr-line"></div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="message-content">
                                          <p>The Ministry of Information Technology & Telecommunication (MoITT) has a vision to provide Freelancing Training to empower youth of the nation. In order to bring this revolution (PFTP) Scholarship Program {new Date().getFullYear()} has been designed which provides opportunities to aspiring youth across all provinces of Pakistan.</p>
                                         <p>The priority of Government of Pakistan is to work on such programs which give drive to provide access to financially deserving and also encourages gender equity. Following this aim of Government,   PFTP Scholarship Program {new Date().getFullYear()} strategy is to create opportunities for a sizeable segment of youth to bring them under the net of higher education and create equal education opportunities for all and for this our   Scholarships comprises.</p>
                                            <p><ul>
                                                <li><b>Cash Prizes, Laptops, Tablets, etc.</b></li>
                                                
                                                <li><b>Every PFTP enrolled student will get this opportunity Once he/she completes his/her 3 months based freelancing and IT courses</b></li>
                                                </ul>
                                                 So if you want to avail this opportunity, follow the instructions and steps given below to reserve your seat for this Scholarship Program {new Date().getFullYear()} as Professional Freelancing Training Program (PFTP) has limited seats
                                                </p>                                        
                                                <div className="note-section">
                                            <h3>NOTE: Only PFTP enrolled students would be eligible for this Scholarship Program.</h3>
                                            </div>
                                        <Row>
                                        <Col md="12">
                                         <div className="step-avail">
                                             <h1 className="">STEPS TO AVAIL YOUR SCHOLARSHIPS</h1>
                                             </div>
                                            </Col>
                                        <Col md="7">
                                   
                                            <ul>
                                                <li>First of All Register Yourself With Professional Freelancing Training Program (PFTP) To Become Eligible For Our Scholarship Program.</li>
                                                <li>Now Fill Our Scholarship Form And Enter By Giving Your Registration Number Provided By Professional Freelancing Training Program.</li>
                                                <li>After Providing Your Preferences Press The Submit Button And Wait For The Response "Congratulations You Are Now Considered As The Part of Our Scholarship Program."</li>
                                                <li>Final Step Will Be Your competition / assessment Step Where You'll be short-listed for our Internationally fully / semi funded scholarship, Cash Prizes, Laptops, Tablets And Much More.</li>
                                            </ul>
                                            </Col> 
                                          <Col md="5">
                                          <img src={process.env.PUBLIC_URL + "/assets/images/map.png"} className="img-fluid" alt=""/>
                                          </Col>
                                          <Col md="12">
                                          <div className="registration-box">
                                    
                                    <div className="registration-title text-center">
                                        <h3>APPLY FOR SCHOLARSHIP</h3>
                                    </div>
                                    <form onSubmit={this.applyScholarships} className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_cnic">Roll Number</label>
                                            <input type="text" placeholder="Enter Roll Number" value={this.state.rollno} onChange={(e) =>   this.setState({rollno:e.target.value})} id="roll_no" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <button>APPLY FOR SCHOLARSHIP PROGRAM {new Date().getFullYear()}</button>
                                      </form>
                                    
                                    </div>
                                            </Col> 
                                        </Row> 
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
}

export default Scholarship