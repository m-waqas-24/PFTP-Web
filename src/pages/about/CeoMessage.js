import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/message.js';

class CeoMessage extends Component {
    render() {
    
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper message-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Message By: CEO Professional Freelancing Training Program" bg="Breadcrumbs/about/CEO-Breadcrumbs.png" />

                    {/* message Details Area */}
                    <section className="message-details-area">
                        <Container>
                            <Row>
                                <Col md="4">
                                    <div className="message-img">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/ceo.jpg`} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="message-content">
                                        <h4>Hafiz Dr.Muhammad Waqas</h4>
                                        <span>Chairman of the board of directors and CEO</span>
                                        <p><b>Dr. Hafiz Muhammad Waqas</b> is the founder, chairman of the board of directors and CEO of PFTP and NIAIS. In the early years of the company, Mr. Hafiz Waqas was responsible for restructuring NIAIS's business model into that of an IT company. Additionally, he was instrumental in the completion of the PFTP Pvt Limited. initial public offering in 2021, as well as listing the company's major Pakistan-based IT Training Platform. Prior to launching PFTP in the Pakistan's market. - Board Member of the Al Falah Foundation - Member of Pakistan federation of Columnists - Member of international journalist council - Vice president of information and technology at insaf sports and culture wing - Founder of PFTP Sahara Foundation - Member of Youth Club.</p>
                                        <h4>Message to Youth:-</h4>
                                        <p>Patriotism is a thing difficult to put into words. It is neither precisely an emotion nor an opinion, nor a mandate, but a state of mind reflection of our own personal sense of worth, and respect for our roots. Love of country plays a part, but it's not merely love. Neither is it pride, although pride too is one of the ingredients Patriotism is a commitment to what is best inside us all. And it ls a recognition of that wondrous common essence in our greater surroundings our school, team, city, state, our immediate society often ultimately delineated by our ethnic roots and borders... but not always. Indeed, these border lines are so fluid... And we do not pay allegiance as much as we resonate with a shared spirit. We all feel an undeniable bond with the land where we were born. And yet, if we leave it for another, we grow to feel a similar bond, often of a more complex nature. Both are forms of patriotism the first, involuntary, by birth, the second by choice. Neither is less worthy than the other.</p>
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

export default CeoMessage