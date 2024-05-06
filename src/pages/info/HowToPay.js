import React, { Component } from 'react';
// import Datas from '../data/team/team-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/teamSlider.js";
import ModalVideo from 'react-modal-video';
import  "../../helper/helper";
import axios from 'axios';
import HeaderTwo from '../../components/HeaderTwo';

import FooterTwo from '../../components/FooterTwo';
class TeamSlider extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            id:'',
            pays : [],
        }
        this.openModal = this.openModal.bind(this);
        this.getData = this.getData.bind(this);
    }

        openModal(id) {
            this.setState({ 
                isOpen: true,
                id:id
                      })
        }

        getData = async () =>{
            const pays = await axios.get(global.config.URL.api.public + 'how-to-pay');
            this.setState({
                pays:pays.data? pays.data.pays : []
        });
        }
        componentDidMount()
        {
            this.getData();
        }
    render() {
      

        return (
            <Styles>
                {/* Team Slider */}
                <HeaderTwo />
                <section className="team-member-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    {/* <h4>{Datas.secTitle}</h4> */}
                                </div>
                            </Col>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.id} onClose={() => this.setState({ isOpen: false })} />
                            <Col md="4"  className="team-slider"> 
                            <div className="team-item">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/howtopay.jpg"} alt="" className="img-fluid" />
                                                <button onClick={() => this.openModal('KVCGc8-9itw')} className="play-button"><i className="las la-play"></i></button>
                                                <div className="img-content text-center">
                                                    <h5>How to Pay</h5>
                                                </div>
                                            </div>
                                </Col>
                            <Col md="8" className="team-slider">
                                <Row>
                               {  this.state.pays.length > 0
                                ?     
                                        this.state.pays.map((data, i) => (
                                            <Col lg="3" md="3" sm="6" key={i}>
                                            <div className="team-item" key={i}>
                                                <img src={global.config.URL.img.public  + data.icon} alt="" className="img-fluid" />
                                                <button onClick={() => this.openModal(data.yt_id)} className="play-button"><i className="las la-play"></i></button>
                                                <div className="img-content text-center">
                                                    <h5>{data.name}</h5>
                                                </div>
                                            </div>
                                            </Col>
                                        ))
                                    
                             
   :'' }
   </Row>
                           </Col>
                        </Row>
                    </Container>
                </section>
                <FooterTwo />
            </Styles>
        )
    }
}

export default TeamSlider
