import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/message.js';

class PmPaMessage extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper message-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Message By: Provincial Minister of Punjab for Agriculture" bg="Breadcrumbs/about/breadcrumbHussaingJhania.png" />

                    {/* message Details Area */}
                    <section className="message-details-area">
                        <Container>
                            <Row>
                                <Col md="4">
                                    <div className="message-img">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/dpHussain-ghanina.png`} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="message-content">
                                        <h4>Syed Hussain Jahania Gardezi </h4>
                                       
                                        <p><b>Syed Hussain Jahania Gardezi </b> s a Pakistani politician who is the current Provincial Minister of Punjab for Agriculture , in office since 13 September 2019. He was first elected as Member, Provincial Assembly of the Punjab during 1993-96 and performed the duties of Minister for Cooperatives. He was again elected as Member Punjab Assembly during 2002-07 and functioned as Minister for Food and Literacy & Non-Formal Basic Education. He was again elected as Member Punjab Assembly for the third term in general elections 2013. He has returned to Punjab Assembly for the fourth term in general elections 2018 and is functioning as Minister for Management and Professional Development.</p>
                                        <h4>Message to Youth:-</h4>
                                        <p>“I pay tribute to Profeesional Freelancing Training Program (PFTP) as they have started their skill development program and we will see that with the help of this program, Pakistan’s youth will get alot more benefit. We have to see that how we can create opportunities at Government and private sector level to enhance the employment opportunities. In the backdrop of soaring un-employment and financial challenges it has become a paramount duty of the government to steer the educated youth of the province in the right direction. In order to bring this vision to verity, a comprehensive Professional Freelancing Training Program (PFTP) has been designed to provide training to budding freelancers and enhance their professional capabilities. Through this initiative Our youth can earn sustainable income. One of the major objectives of this project is to provide training opportunities to youth for self-employment using internet based freelancing. This wise movement will expedite the freelancing skills of around 15,000 people in a year which will eventually help them to earn an honorable living. This program is not just a training program but a revolution that will help generate employment and prepare Pakistan to run in the race of future of work around the world.</p>
                                        <p>Especially the unemployment ratio will be decreased and the second important thing which I must say is that the human resource which is most important resource blessed to us by Allah amongst all other resources will be developed with the help of playing a special role by this program. From which we will see that our coming youth can become more protective by seeking better training and will be able to earn Halal food themselves.”</p>
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

export default PmPaMessage