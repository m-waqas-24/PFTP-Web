import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/opportunity.js';
import axios from 'axios';
import swal from 'sweetalert';
class Internship extends Component {
    constructor(props){
        super(props);
        this.state = {
            rollno:null  
        }


        this.applyInternship = this.applyInternship.bind(this);

        
    
}
async applyInternship  (e) {
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
    const res = await axios.post(global.config.URL.api.apply + 'internship',{
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
                    <BreadcrumbBox title="Internships" bg="Breadcrumbs/opportunity/internship.png" />

                    {/* message Details Area */}
                    <section className="message-area">
                        <Container>
                            <Row>
                            <Col md="12" className='text-center mb-5 upper'>
                            <img src={process.env.PUBLIC_URL + "/assets/images/pftp-dark-logo.png"} className='logo' alt=""/>

                                <h2>VIRTUAL AND PHYSICAL INTERNSHIP</h2>
                                <div className="hr-theme-slash-2">
                                    <div className="hr-line"></div>
                                    <div className="hr-icon">Work From Home Opportunity</div>
                                    <div className="hr-line"></div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="message-content">
                                      <p>PFTP program has a vision to create job opportunities at Government level and at private sector level to enhance the employment ratio. Our Certified Students will be offered Paid/Unpaid Internship in their respective fields. After the completion of courses, qualified students will be offered internship on priority basis. Selection of candidate will remain the discretion of companies</p>
                                        <p>A stipend will be offered to the selected candidates and we are sure that our qualified students will get internship in Top Organizations, which may result in Permanent Job Offerings. Application is finally open for the PFTP Internship Program {new Date().getFullYear()}. Candidates Male/Female from All over the country are eligible to apply for the PFTP Internship {new Date().getFullYear()}</p>
                                         <p>The best thing about PFTP Internship is it’s virtual as well as physical so if you’re not willing to go to the office to attend the internship you can attend it virtually as per your convenience . PFTP has decided to offer internships to help them to earn an honorable living. This is the best chance for the students to get experience from the experts.</p>   
                                        <p>Candidates belonging to any part of the country can apply for this internship program. Students pursuing their Bachelors, Masters, or Ph.D. degree program can also apply for this Paid/Unpaid Internship. For further more details about the PFTP, Virtual & Physical Internship read the details mentioned below and apply.</p>
                                        <div className="note-section">
                                            <h3>NOTE: Only PFTP enrolled students would be eligible for this Scholarship Program.</h3>
                                            </div>
                                        <Row>
                                        <Col md="12">
                                         <div className="step-avail">
                                             <h1 className="">STEPS TO RESERVE YOUR INTERNSHIP</h1>
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
                                          <img src={process.env.PUBLIC_URL + "/assets/images/map-1.png"} className="img-fluid" alt=""/>

                                            </Col>
                                          <Col md="12">
                                          <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>APPLY FOR INTERNSHIP</h3>
                                    </div>
                                    <form onSubmit={this.applyInternship} className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_cnic">Roll Number</label>
                                            <input type="text" placeholder="Enter Roll Number" value={this.state.rollno} onChange={(e) =>   this.setState({rollno:e.target.value})} id="roll_no" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <button>APPLY FOR INTERNSHIP PROGRAM {new Date().getFullYear()}</button>
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

export default Internship