import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
// import Pagination from '../../components/Pagination';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/guest.js';
import axios from 'axios';

class Guest extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            guests: []
        }

        this.getGuests = this.getGuests.bind(this);
      
    }
    componentDidMount() {
        this.getGuests();
    }

    async getGuests  () {
      
        const guests = await axios.get(global.config.URL.api.public + 'guests');
        if(guests.data.success)
        {
            this.setState({guests: guests.data.guests},function(){
              
            });  
        }
    }
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper guest-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="PFTP | Guests " bg="Breadcrumbs/nyfevents/Guest.png" />

                    {/* guest Area */}
                    <section className="guest-area">
                        <Container>
                            <Row>
                                {
                                    this.state.guests.map((data, i) => (
                                        <Col lg="3" md="4" sm="6" key={i}>
                                            <div className="guest-item">
                                                <Link to={"#!"}><img src={global.config.URL.img.public + data.avatar} alt="" className="img-fluid" /></Link>
                                                <div className="img-content text-center">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.designation}</p>
                                                    <p>{data.other_designation}</p>
                                                   
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }

                                {/* <Col md="12" className="text-center">
                                    <Pagination />
                                </Col> */}
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

export default Guest