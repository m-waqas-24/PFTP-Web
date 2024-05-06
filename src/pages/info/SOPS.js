import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/info.js';

class SOPS extends Component {
    render() {
    
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper info-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="PFTP | Whatsapp SOPs" bg="Breadcrumbs/infoDesk/whatsApp-SOPS.png" />

                    {/* info Details Area */}
                    <section className="info-details-area">
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="info-content">
                                        <h4>This WhatsApp group is only for the Course's support and it is not allowed to text any irrelevant messages in it. </h4>
                                        <p><ul>
                                            <li><i className="fa fa-check"></i>You are allowed to do discussion via texts with the management and the trainers of your respective courses only. </li>
                                            <li><i className="fa fa-check"></i>It is not allowed to do any personal chat.</li>
                                            <li><i className="fa fa-check"></i>Personal chat with female members is strictly prohibited and if we get complain then management has the right to take legal action and your enrolment will be canceled.</li>
                                            <li><i className="fa fa-check"></i>If you face any issue such as delay for the answer of your query, you can directly approach the admin of the group. It is not allowed in the group to text again and again to disturb all members.</li>
                                            <li><i className="fa fa-check"></i>Admin is only responsible to reply in official timings and the trainer will respond you within 2 to 4 working days because of his/her busy schedule.</li>
                                            <li><i className="fa fa-check"></i>It is not allowed to text directly on trainer's contact number. In case this happens, management has the right to take strict action and may remove you from the course and the group.</li>
                                            <li><i className="fa fa-check"></i>You can only do discussions regarding your course in your relevant group during your course duration.</li>
                                            <li><i className="fa fa-check"></i>You can ask any query related to LMS, Quiz, assignment and Project regarding your certificate but you are not allowed to answer in the group (only authorize persons can answer.</li>
                                            <li><i className="fa fa-check"></i>Management has the right to add/modify any policy, terms and condition at any stage of your course and you are bound to agree with them.</li>
                                            <li><i className="fa fa-check"></i>Usage of unethical language is not allowed and if anyone uses then management has the right to take legal action without any prior warning.</li>
                                            <li><i className="fa fa-check"></i>Student has no right to use PFTP lectures anywhere</li>
                                            <li><i className="fa fa-check"></i>If any student found guilty of doing any unlawful activity then PFTP has right to charge him/her fine of at least Rs. 0.1 million </li>
                                            <li><i className="fa fa-check"></i>If you are not following any instructions or break any rule, management has the right to charge you with fine.</li>
                                            <li><i className="fa fa-check"></i>Only those students, who will be agreed with all these term and conditions, will be added in relevant group.</li>
                                            </ul></p>
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

export default SOPS