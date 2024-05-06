import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
// import Pagination from './../../components/Pagination';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/gallery.js';
import axios from 'axios';
// import { LazyLoadImage } from "react-lazy-load-image-component";

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            gallery: [],
            title:'Gallery',
            event: this.props.match.params.event,
        }

        this.getGallery = this.getGallery.bind(this);
     
        
    }
    
    componentWillReceiveProps(nextProps) {
       
        if (this.props.match.params.event !== nextProps.match.params.event) {
         this.setState({event: nextProps.match.params.event},function(){
            this.getGallery();
         })         
            
        }
       }
    componentDidMount() {
        this.getGallery();
    }

    async getGallery  () {
   
       
        const gallery = await axios.get(global.config.URL.api.public + 'gallery/'+ this.state.event);
        if(gallery.data.gallery)
        {
            this.setState({gallery: gallery.data.gallery,title:gallery.data.event},function(){
            
            });  
        }
    }

    render() {

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper gallery-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title={this.state.title} bg="Breadcrumbs/extra/Gallery-Breadcrumbs.png" />

                    {/* Gallery Area */}
                    <section className="gallery-page-area">
                        <Container>
                            <Row>
                                {
                                    this.state.gallery.map((img, i) => (
                                        <Col lg="3" sm="6" key={i}>
                                            <div className="gallery-box">
                                                <ModalImage small={global.config.URL.img.public + img.img} large={global.config.URL.img.public + img.img} alt="" />
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

export default Gallery