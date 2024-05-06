import React, { Component } from 'react';
import { Container, Row, Col,Tab,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/campusTour.js";
import  "../helper/helper";
import axios from 'axios';

class CampusTour extends Component {

    constructor() {
        super()
        this.state = {
           
            guests : [],
            chap2021: [],
            chap2022: [],
            confrences: [],
            alumins: [],
        }
      
        this.getData = this.getData.bind(this);
    }

    getData = async () =>{
        const data = await axios.get(global.config.URL.api.public + 'gallery-section');
        this.setState({
            guests:data.data? data.data.pftpGuests : [],
            chap2021:data.data? data.data.chap2021 : [],
            chap2022:data.data? data.data.chap2022 : [],
            confrences:data.data? data.data.confrences : [],
            alumins:data.data? data.data.alumins : [],   
    });
    }
    componentDidMount()
    {
        this.getData();
    }

    render() {
        return (
            <Styles>
                {/* Campus Tour */}
                <section className="campus-tour">
                    <Container>
                        <div className="nyf-tab-list">
                        <Row>
                        <Tab.Container defaultActiveKey="Guests">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Guests">Our Guests</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Chapter2021">NYF Chapter 2021</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Chapter2022">NYF Chapter 2022</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Conference">Conference</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="ALUMNIS">ALUMNI'S</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Guests" className="overview-tab">
                                                    <Row>
                                                        { this.state.guests.length > 0 ? 
                                                        this.state.guests.map((guest,i)=>(
                                                            <Col lg="3" md="6" sm="6" key={i}>
                                                            <div className="card">
                                                                <img className="card-img-top" src={global.config.URL.img.public  + guest.avatar} alt="Cardimg"/>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{guest.name}</h5>
                                                                    <p className="card-text">{guest.designation}</p>
                                                                    <p className="card-text">{guest.other_designation}</p>
                                                                    
                                                                </div>
                                                                </div>
                                                            </Col>
                                                        ))
                                                       
                                                           :''  }
                                                           <Col lg="3" md="6">
                               <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/guests"}>See More</Link>
                               </Col>
                                                    </Row>
                                                
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Chapter2021" className="curriculum-tab">
                                                <Row>
                               {
                                this.state.chap2021.length > 0 ?
                                this.state.chap2021.map((gallery,i)=>(
                                    <Col lg="3" md="6"  key={i}>
                                    <div className="tour-box">
                                        <ModalImage small={global.config.URL.img.public  + gallery.img} large={global.config.URL.img.public  + gallery.img} alt="" />
                                    </div>
                                    </Col>
                                ))
                              
                                :''}
                               
                               <Col lg="3" md="6">
                               <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery/Chapter2021"}>See More</Link>
                               </Col>
                                                 </Row>           
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Chapter2022" className="instructor-tab">
                                                <Row>
                               
                                                {
                                this.state.chap2022.length > 0 ?
                                this.state.chap2022.map((gallery,i)=>(
                                    <Col lg="3" md="6" key={i}>
                                    <div className="tour-box">
                                        <ModalImage small={global.config.URL.img.public  + gallery.img} large={global.config.URL.img.public  + gallery.img} alt="" />
                                    </div>
                                    </Col>
                                ))
                              
                                :''}
                               <Col lg="3" md="6">
                               <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery/Chapter2022"}>See More</Link>
                               </Col>
                                </Row> 
                                                  
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="Conference" className="instructor-tab">
                                                <Row>
                                                {
                                this.state.confrences.length > 0 ?
                                this.state.confrences.map((gallery,i)=>(
                                    <Col lg="3" md="6"  key={i}>
                                    <div className="tour-box">
                                        <ModalImage small={global.config.URL.img.public  + gallery.img} large={global.config.URL.img.public  + gallery.img} alt="" />
                                    </div>
                                    </Col>
                                ))
                              
                                :''}
                               
                               <Col lg="3" md="6">
                               <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery/Confrences"}>See More</Link>
                               </Col>
                                </Row> 
                                                  
                                             </Tab.Pane>
                                              <Tab.Pane eventKey="ALUMNIS" className="review-tab">
                                 <Row>
                                 {
                                this.state.alumins.length > 0 ?
                                this.state.alumins.map((gallery,i)=>(
                                    <Col lg="3" md="6"  key={i}>
                                    <div className="tour-box">
                                        <ModalImage small={global.config.URL.img.public  + gallery.img} large={global.config.URL.img.public  + gallery.img} alt="" />
                                    </div>
                                    </Col>
                                ))
                              
                                :''}
                               <Col lg="3" md="6">
                               <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery/Alumni"}>See More</Link>
                               </Col>
                                </Row> 
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>   
                                          
                            
                                                     
                        </Row>
                        </div>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default CampusTour
