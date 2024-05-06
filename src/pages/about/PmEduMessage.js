import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/message.js';

class PmEduMessage extends Component {
    render() {
        
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper message-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Message By: Provincial Minister of Punjab for Education Department" bg="Breadcrumbs/about/murabrass.png" />

                    {/* message Details Area */}
                    <section className="message-details-area">
                        <Container>
                            <Row>
                                <Col md="4">
                                    <div className="message-img">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/drmuradrass.jpg`} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="message-content">
                                        <h4>Dr. Murad Raas</h4>
                                       
                                        <p><b>Dr. Murad Raas</b> is a Pakistani politician who is the current Provincial Minister of Punjab for School Education, since 27 August 2018. He has been a member of the Provincial Assembly of the Punjab since August 2018. He was awarded an Honorary Ph.D. degree in 2010 in Business Administration by American Heritage Univeristy of Southern California, USA. He has been elected as Member, Provincial Assembly of the Punjab in general elections 2018 for the second consecutive term and is serving as Minister for School Education.</p>
                                        <h4>Message to Youth:-</h4>
                                        <p>He Honored and advised the students as Professional Freelancing Training Program (PFTP) is a very good initiative where if anyone enroll himself/herself in their 3 months IT program will get the opportunity to reserve seats in job market and can also secure a seat for scholarship program and the most important part of their training is those who get there In-degree program certifications can also get the opportunity to do virtual internships so if you’re not willing to go to the office to attend the internship you can attend it from the comfort of the home. PFTP has decided to offer internships to support Government of Pakistan to remove unemployment and increase revenue. This is the best chance for the students to get experience from the experts to support their family and government of Pakistan. Candidates Male/Female from All over the country are also eligible to apply for the PFTP Internship 2021. A national workforce equipped with world-class, future-proof skills and attitudes will underpin the delivery of greater economic and social value for generations to come. It is a matter of great privilege and pride that Professional Freelancing Training Program (PFTP) has accepted the responsibility to equip our youth with latest skills in the cutting edge technologies to grab their place at leading positions in the digitized world so this is my keen Request to all of you to Register yourself with them to get the Opportunity to rank yourself in the field of IT to generate revenue & to create financial benefits for your family.</p>
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

export default PmEduMessage