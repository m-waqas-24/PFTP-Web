import React, { useEffect,useState } from 'react';
import Datas from '../data/faq-event/faq-event.json';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faqEvent.js";
import axios from 'axios';
import moment from 'moment/moment';
function FaqEvent() {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        getEvents();
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    },[]);
    const getEvents = async () =>{

        const res = await axios.get(`https://graph.facebook.com/v15.0/pftpedu/events?fields=name,start_time,end_time,description,cover,place,is_online,category&access_token=${global.config.FBToken}&time_filter=upcoming&order=chronological`);
          if(res.data)
          {
            setEvents(res.data.data)
    
          }
       
    }
    return (
        <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area">
                <Container>
                    <Row>
                        <Col md="8">
                            <div className="event-area">
                                <Row>
                                    <Col md="12">
                                        <div className="sec-title">
                                            <h4>Upcoming <span>Events</span></h4>
                                        </div>
                                    </Col>
                                    <Col md="12" className='height'>
                                        {
                                             events.length > 0 ?
                                            events.map((eventData, i) => (
                                            //   moment(eventData.start_time).format()  >   moment(new Date()).format() ?
                                               <div className="event-box" key={i}>
                                                <Row>
                                                    <Col xl="3" lg="4" md="0">
                                                        <div className="event-img">
                                                            <a href="https://www.facebook.com/pftpedu/events" target={'_blank'} rel="noopener noreferrer"><img src={eventData.cover ? eventData.cover.source : ''} alt="" className="img-fluid" /></a>
                                                        </div>
                                                    </Col>
                                                    <Col xl="9" lg="8" md="12">
                                                        <div className="event-content">
                                                            <div className="content-box">
                                                                <Row>
                                                                    <Col md="9">
                                                                        <div className="event-title">
                                                                            <h6><a href="https://www.facebook.com/pftpedu/events" target={'_blank'} rel="noopener noreferrer">{eventData.name.substring(0, 40)}</a></h6>
                                                                        </div>
                                                                        <div className="event-time-location">
                                                                            <ul className="list-unstyled list-inline">
                                                                                <li className="list-inline-item"><i className="las la-clock"></i> {moment(eventData.start_time).format('LLLL')}</li>
                                                                                <li className="list-inline-item"><i className="las la-map-marker"></i> {eventData.place ? eventData.place.name : 'Online'}</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="event-desc">
                                                                            <p>{eventData.description ? eventData.description.substring(0, 100) : ""}</p>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="3" className="text-center">
                                                                        <div className="event-date">
                                                                            <p>{moment(eventData.start_time).format('LL')}</p>
                                                                        </div>
                                                                        <div className="join-btn">
                                                                            <a href="https://www.facebook.com/pftpedu/events" target={'_blank'} rel="noopener noreferrer">Join Now</a>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            
                                            )) : ''
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Frequently Ask <span>Question</span></h4>
                                </div>
                                <div className="faq-box">
                                    {
                                        Datas.faqDataList.map((data, i) => (
                                            <div className="faq-item" key={i}>
                                                <button className="accordion-button active">
                                                    <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                    <p>{data.faqTitle}</p>
                                                </button>
                                                <div className="accordion-content show">
                                                    <p>{data.faqDesc}</p>
                                                </div>
                                            </div>
                                        ))
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

export default FaqEvent
