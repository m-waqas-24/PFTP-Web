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
                    <BreadcrumbBox title="Message By: Spokesperson Government of Punjab" bg="Breadcrumbs/about/BreadcrumbSadiaRana.png" />

                    {/* message Details Area */}
                    <section className="message-details-area">
                        <Container>
                            <Row>
                                <Col md="4">
                                    <div className="message-img">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/DP-sadia-rana.png`} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="message-content">
                                        <h4>Sadia Sohail Rana</h4>
                                       
                                        <p><b>Sadia Sohail Rana</b> is a Pakistani politician She was elected to the Provincial Assembly of the Punjab as a candidate of Pakistan Tehreek-e-Insaf (PTI) on a reserved seat for women in 2013 Pakistani general election. She was re-elected to the Provincial Assembly of the Punjab as a candidate of PTI on a reserved seat for women in 2018 Pakistani general election is a former Member of the Provincial Assembly of the Punjab, chair-person excise taxation and narcotics and Spokesperson Government of Punjab</p>
                                        <h4>Message to Youth:-</h4>
                                        <p>Professional Freelancing Training Program (PFTP) is highly appreciated on the platform of Government of Punjab, and appeared as a ray of hope for the youth who are job searcher today. She admired us as ”This is very great point to be happy for youth as Professional Freelancing Training Program has been launched to support the Government of Pakistan and to generate revenue for the youth as our country comprise 64% of youth. We know that our country’s slogan and Quaid-e-Azam’s main focus was on youth and the vision of Prime minister of Pakistan is to provide progressive opportunities to youth and in order to bring this vision to variety, a comprehensive Professional Freelancing Training Program has been designed to support this vision. Today is the era of Information Technology and this is our responsibility to train our kids, youth and the creative minds of generation for the upcoming 5th industrial revolution. Thus considering this progress for youth and to make Pakistan Digitalize and rank it as one of the top progressive and developing country I think this is a very Great Initiative for all of us and I completely support and congratulate them for this initiative and request my youth to enroll themselves in this IT based program to brighten up their future so our country will be ranked on the top.</p>
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