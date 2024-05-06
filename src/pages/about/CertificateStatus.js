import React, { Component } from 'react';
import { Container, Row, Col,Table,Alert } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/message.js';
import axios from 'axios';
import swal from 'sweetalert';
import { InfinitySpin } from 'react-loader-spinner'

class CertificateStatus extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            serialno:null,
            certificate:null,
            loading:false
        }


        this.certificateStatus = this.certificateStatus.bind(this);

        
    
}
async certificateStatus  (e) {
    e.preventDefault();
    const input = document.getElementById("serialno");
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector(".registration_input-msg");
   
    if(this.state.serialno == null)
    {
        input.focus();
        formControl.className = "form-control text-left error";
        errorMsg.innerText = "Please Enter Your Serial Number";
    }else
    {
        this.setState({loading:true})
       
        formControl.className = "form-control success";
        axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${global.config.Token}`;        
    const res = await axios.post(global.config.URL.api.public + 'certificate-status',{
        serialno : this.state.serialno
      },);
      if(res && res.data.success)
      {
        this.setState({certificate:res.data.certificate},function(){

        })
       
      }else{
        input.focus();
        formControl.className = "form-control text-left error";
        errorMsg.innerText = res.data.message;
        this.setState({loading:false})
      }
    }
    
}
    render() {
        
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper message-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="PFTP Certificate Status" bg="Breadcrumbs/infoDesk/Terms-and-Conditions.png" />

                    {/* message Details Area */}
                    <section className="message-details-area">
                        <Container>
                            <Row>
                            <Col md="12">
                                {
                                    this.state.certificate ? 
                                    <>
                                    <Alert variant="success" className='mb-0'>PFTP | Verified Certificate <i class="las la-check"></i></Alert>
                                    <Table striped bordered hover responsive>
                                        
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <td>{this.state.certificate.student_course.invoice.user.name} </td>
                                      </tr>
                                        <tr>
                                        <th>Serial Number</th>
    
                                        <td>{this.state.certificate.serial} </td>

                                      </tr>
                                      <tr>
                                        <th>Batch</th>
                                        <td>{this.state.certificate.student_course.invoice.batch.number} </td>

                                      </tr>
                                        <tr>
                                        <th>Course</th>
                                        <td>{this.state.certificate.student_course.course.name} </td>

                                      </tr>
                                     
                                      <tr>
                                        <th>Status</th>
                                        <td>Active  <i class="las la-check"></i></td>
                                      </tr>
                                      {/* <tr>
                                        <th>Issue Date</th>
                                        <td>Invoice </td>
                                      </tr> */}
                                    </thead>
                                    <tbody>
                                    
                                      
                                    </tbody>
                                  </Table>   
                                  </> 
                                    :
                               
                                          <div className="registration-box">
                                    
                                    <div className="registration-title text-center">
                                        <h3>Check Certificate Status</h3>
                                    </div>
                                    <form onSubmit={this.certificateStatus} className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_cnic">Serial Number</label>
                                            <input type="text" placeholder="Enter Serial Number" value={this.state.serialno} onChange={(e) =>   this.setState({serialno:e.target.value})} id="serialno" />
                                            <span className="registration_input-msg"></span>
                                           
                                        </p>
                                        {
                                            this.state.loading ? <button disabled className="text-center"><InfinitySpin  width='100' color="#ffb200" />Checking </button> :  <button>Check Status</button>
                                        }
                                      </form>
                                    
                                    </div>
                                     }
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

export default CertificateStatus