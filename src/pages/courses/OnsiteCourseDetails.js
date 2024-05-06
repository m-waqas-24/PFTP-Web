import React, { useState,useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import OnistePopularCourse from './components/OnistePopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import  "../../helper/helper";
import axios from 'axios';
import { decode } from "html-entities";
import { useParams ,useHistory } from "react-router-dom";
import swal from 'sweetalert';
function CourseDetails() {
    let history = useHistory();
    const { slug } = useParams();
    useEffect(() => {
            const getData = async () =>{
                const course = await axios.get(global.config.URL.onsite_api.public + 'course-details/' + slug);
                setCourse(course.data.courseDetails);
            }
        getData(); 
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
      
    },[slug]);

   
    async function enroll () {
        if(!global.config.Token){
            history.push('/login');
        }
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const enrolled = await axios.get(global.config.URL.api.apply + 'add-to-cart/' + course.id);

        if(enrolled.data.success)
        {
            
        swal({
            title: "Success!",
            text: `${enrolled.data.message}`,
            icon: "success",
            buttons: {cancel:"OK",text:"GO TO CART"},
          })
          .then((yes) => {
            if (yes) {
                history.push('/my-cart');
            } else {
              
            }
          });
           
        }else{
          
            swal({
                title: "Warning!",
                text: `${enrolled.data.message}`,
                icon: "warning",
                buttons: {cancel:"OK",text:"GO TO CART"},
              })
              .then((yes) => {
                if (yes) {
                    history.push('/my-cart');
                } else {
                  
                }
              });
        }
    }
    const [course, setCourse]= useState([]);
  
    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < HeaderTwo />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Course Details" bg="Breadcrumbs/courses/courseDetails.png" />

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>Learn {course.name}</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                            <div className="author">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/logo1.png`} alt="" />
                                                <div className="author-name">
                                                    <h6>Instructor</h6>
                                                    <p>PFTP | Instructor</p>
                                                </div>
                                            </div>
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>{course.domain ? course.domain.name : ''}</p>
                                            </div>
                                            <div className="rating">
                                                <h6>Rating</h6>
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                    </li>
                                                    <li className="list-inline-item">(4.5)</li>
                                                </ul>
                                            </div>
                                            <div className="price">
                                                <h6>Registration Fee</h6>
                                                <p>{course.fee}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                        <img src={course.detail ? global.config.URL.onsite_img.public + course.detail.img : ''} alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-tab-list">
                                      
                                                
                                                <div
                                                dangerouslySetInnerHTML={{
                                                    __html: course.detail
                                                    ? decode(course.detail.detail)
                                                    : ""
                                                }}
                                                />

                                                    
                                                
                                            
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    {/* <li><i className="las la-calendar"></i> Start Date: <span>Aug 21, 2020</span></li> */}
                                                    <li><i className="las la-clock"></i> Duration: <span>{course.detail ? course.detail.duration : ''}</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>{course.detail ? course.detail.language : ''}</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>{course.detail ? course.detail.skill_level : ''}</span></li>
                                                    <li><i className="las la-graduation-cap"></i> Subject: <span>{course.domain ? course.domain.name : ''}</span></li>
                                                    {/* <li><i className="las la-book"></i> Batch: <span>51</span></li> */}
                                                   
                                                    <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li>
                                                </ul>
                                                <a href="https://onsite.pftpedu.org/registration" rel="noopener noreferrer"  target={"_blank"}><button type="button"  className="enroll-btn">Enroll Course</button></a>

                                            </div>
                                        </Col>
                                        <Col md="12">
                                            {course.siblings ? <OnistePopularCourse courses={course.siblings} />:''}                                           
                                        </Col>
                                        <Col md="12">
                                            <CourseTag />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo />

        </div >
    )
}

export default CourseDetails