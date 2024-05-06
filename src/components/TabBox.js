import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i> Why PFTP</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> Our Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Our Vision</Nav.Link>
                                        </Nav.Item>
                                       
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Why PFTP</h4>
                                            <p className="tab-desc">PFTP is Pakistan’s largest training initiative launched with the aim of providing skill development training All around Pakistan. This initiative is not just a training program but a revolution that will help generate employment and prepare Pakistan to run in the race for the future of work around the world. PFTP offers more than 30+ Technical and non-technical emerging technological-based courses within 6 different domains and served clients with the services of ERP systems, POS systems, Amazon, Daraz & eBay, Web Development, Digital Marketing, and many more in the Islamic Republic of Pakistan.</p>
                                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Our Mission</h4>
                                            <p className="tab-desc">Our mission at PFTP is to empower learners worldwide through cutting-edge educational technology. We offer a diverse range of 30+ domain-specific courses, harnessing the latest advancements in technology. By providing accessible and innovative learning experiences, we strive to equip individuals with the knowledge and skills necessary to thrive in an ever-evolving professional landscape. Our commitment to excellence and lifelong learning drives us to continuously enhance our courses and deliver transformative educational opportunities for all.</p>
                                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Our Vision</h4>
                                        
                                            <p className="tab-desc">PFTP believes in the accessibility of education in the spectrum of ICT so that youth could
                                                play a prominent role in the 21st century. We tend to train our students to adapt and perform
                                                in challenging conditions with a focus on the amalgamation of creativity 
                                                through effective communication along with the line-up of an up-to-date teaching
                                                methodology and curriculum in synchronization with the developed world. Our classrooms
                                                promoting diversity, inclusivity, and intellectual stimulation would lead them to develop a
                                                sense of curiosity and logical planning utilizing their potential and skills.
                                                </p>
                                            
                                        </Tab.Pane>
                                        
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
