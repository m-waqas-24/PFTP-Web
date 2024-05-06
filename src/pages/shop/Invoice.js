import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/invoice.js';
import { jsPDF } from "jspdf";
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { InfinitySpin } from 'react-loader-spinner'
class Invoice extends Component {

    constructor(props){
        super(props);
        this.state = {
            invoices: [],
            batch: null,
            loading:true,
            prop: this.props
        }
        this.createPDF = this.createPDF.bind(this);
        this.myInvoices = this.myInvoices.bind(this);
        this.calculateDiscount = this.calculateDiscount.bind(this);
        this.removeInvoice = this.removeInvoice.bind(this);
    }
    componentDidMount()
    {
      
      this.myInvoices();
    }
  
     removeInvoice(i) {
      axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${global.config.Token}`;
        swal({
          title: "Are you sure?",
          text: `This invoice will never revert`,
          icon: "warning",
          buttons: {cancel:"NO",text:"Remove Invoice"},
        })
        .then((yes) => {
          if (yes) {
             axios.post(global.config.URL.api.apply + 'remove-invoice/'+i)
            .then(function (response) {
              // handle success
            if(response.data.success)
            {
              swal(response.data.message);
              window.location.href ="/course-registration";
            }else{
              swal(response.data.message);
            }
            });
          } 
        });
     
  }
      async myInvoices  () {
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const invoice = await axios.get(global.config.URL.api.apply + 'my-invoices');
        if(invoice.data.success)
        {
            this.setState({invoices: invoice.data.invoices,loading:false,batch:invoice.data.batch},function(){
            });  
        }
    }


    calculateDiscount(amount,percentage)
    {
     var discountAmount = (amount/100)*percentage;
        return amount - discountAmount;
    }

     createPDF = async () => {
     
      const pdf = new jsPDF('landscape','px','a4');
      const data = await document.querySelector("#pdf");
      pdf.html(data).then(() => {
        pdf.save("shipping_label.pdf");
      });
    };
    
    
    render() {
       
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper invoice-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="My Invoices"  bg="Breadcrumbs/extra/Invoice-Breadcrumbs.png" />

                    {/* Product Details */}
                    <section className="invoice-area">
                        <Container>
                        
                            <Row>
                           
                                <Col lg="12" md="12">
                                <Table striped bordered hover responsive>
                                <thead>
                                  <tr>
                                    <th>Batch</th>
                                    <th>Invoice # </th>
                                    <th>Amount</th>
                                    <th>Courses</th>
                                    <th>Status</th>
                                    <th>Last Date</th>
                                    {/* <th>Created Date</th> */}
                                    <th>Download Invoice</th>
                                    {/* <th>Download</th> */}
                                  </tr>
                                </thead>
                                <tbody>
                                 {this.state.loading ? <InfinitySpin  width='200' className="center" color="#4fa94d" /> 
                                  : 
                                    this.state.invoices.map((invoice,i)=>(
                                    <tr key={i}>
                                    <td><span className='badge badge-warning'>{invoice.is_paid ? invoice.batch.number : this.state.batch.number}</span>
                                    
                                    </td>
                                    <td>{invoice.invoice_no} { invoice.is_paid ? "" :<> <i className="fa fa-trash ml-2 text-danger" onClick={() => this.removeInvoice(invoice.invoice_no)} title='Remove Invoice'></i> <p className='text-danger'><small>Pay your fee via 1 Link using this invoice number through any online banking platform.</small></p> <Link to={process.env.PUBLIC_URL + "/how-to-pay"}><p><small className="text-danger"><i className='fa fa-play'></i> How to Pay?</small></p> </Link> </>}</td>
                                    <td> {invoice.offer ? new Date(invoice.offer.valid_till).getTime() >= new Date().getTime()   ? <i><del>{invoice.amount}</del> {this.calculateDiscount(invoice.amount,invoice.offer.discount_in_percent)}  </i> : invoice.amount : invoice.amount} </td>
                                    <td>{invoice.details ? 
                                    invoice.details.map((detail,i)=>( <spna className="badge badge-success mr-2" key={i}>{detail.course.name}</spna> )) :'' }</td>
                                    <td>
                                    
                                      {
                                        invoice.is_active ? <span className="badge badge-success text-light">Active</span>
                                       : <span className={invoice.is_paid ? 'badge badge-success text-light' : 'badge badge-danger text-light'  }>{invoice.is_paid ? "Paid" : "Unpaid"}</span>
                                      
                                      }
                                       { invoice.is_paid ? "" :<p><small>You will get veificaion email after paying your fee</small></p>}
                                      </td>
                                    <td>{invoice.is_paid ? "-" : moment(this.state.batch.adm_closing_date).format("Do MMM  YY")}</td>
                                    {/* <td>{moment(invoice.created_at).format("Do MMM YY")}</td> */}
                                    <td className="text-center">
                                      {
                                        invoice.is_active ? <a href='https://lms.pftpedu.org/' target={'_blank'} rel="noopener noreferrer">Login to LMS</a>
                                     : <> <Link to={'generate-invoice/'+invoice.invoice_no} target="_blank"><button className="btn btn-info btn-sm"><i className="fa fa-arrow-down"></i></button></Link>
                                     <p className='text-danger'><small>Download invoice to pay in any 1 link bank</small></p>
                                     </>
                                      }
                                      </td>
                                 
                                  </tr>
                                    ))
                                  
                                  
                                  }
                                  
                                </tbody>
                              </Table>      
                         </Col>
                         {/* <Col className="d" lg="12" md="12">
                          <div>
                          <div id="pdf" style={{width:'100%',margin:0,padding:0}}>
                       
                          <img src={process.env.PUBLIC_URL + `/assets/images/pdf.png`} alt="Barcode" height={640} width={640} className='img-fluid' />
                          <h1 style={{color: "red",position:"absolute",top:262,left:160}}>Hello Style!</h1>
                        </div>
                          </div>
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

export default Invoice