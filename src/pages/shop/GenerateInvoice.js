import React, { useState,useEffect } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/courseRegistration';
import  "../../helper/helper";
import JsPDF from 'jspdf';
import "./styles/invoice.css"
import axios from 'axios';
import { useParams } from "react-router-dom";
import moment from 'moment';
function GenerateInvoice() {
    const [invoice, setInvoice]= useState([]);  
    const [batch, setBatch]= useState([]);  

    const { number } = useParams();
    useEffect(() => {
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
            const getData = async () =>{
                const course = await axios.get(global.config.URL.api.apply + 'generate-invoice/' + number);
                setInvoice(course.data.invoice);
                setBatch(course.data.batch);
            }
        getData(); 
    
    },[number]);
   
   const generatePDF = () => {
       

        const report = new JsPDF('l', 'pt', [1200, 820]);
        report.html(document.querySelector('#pdf')).then(() => {
            report.save(`pftp-invoice(${invoice.invoice_no}).pdf`);
        });
    }
  
    const  calculateDiscount =(amount,percentage) =>
    {
     var discountAmount = (amount/100)*percentage;
        return amount - discountAmount;
    }
       
        return (
           

<React.Fragment>
<Styles>
<HeaderTwo />
{ invoice ?

            <div className="main-wrapper registration-page">
         
           
                {/* Header 2 */}
                
                
<button onClick={generatePDF} type="button" className='btn btn-warning text-light btn-block' >Export PDF</button>
   <div id='main'>
   <div id='pdf'>
    <table border="0" cellpadding="0"  cellspacing="0" id="sheet0" className="sheet0 gridlines">
        <col ameclassN="col0"/>
        <col className="col1"/>
        <col className="col2"/>
        <col className="col3"/>
        <col className="col4"/>
        <col className="col5"/>
        <col className="col6"/>
        <col className="col7"/>
        <col className="col8"/>
        <col className="col9"/>
        <col className="col10"/>
        <col className="col11"/>
        <col className="col12"/>
        <tbody>
          <tr className="row0">
            <td className="column0 style41 null style43" rowspan="3">
<div ><img src={process.env.PUBLIC_URL + "/assets/images/pftp-dark-logo.png"} height="80" border="0" alt='no' /></div></td>
            <td className="column1 style59 s style61" colspan="3">Professional Freelancing Training Program</td>
            <td className="column4 style41 null style43" rowspan="3">
<div ><img src={process.env.PUBLIC_URL + "/assets/images/pftp-dark-logo.png"} height="80" border="0" alt='no' /></div></td>
            <td className="column5 style59 s style61" colspan="3">Professional Freelancing Training Program</td>
            <td className="column8 style18 null style20" rowspan="3">
<div ><img src={process.env.PUBLIC_URL + "/assets/images/1link.jpg"} height="80" border="0" alt='no' /></div></td>
            <td className="column9 style21 s style29" colspan="4" rowspan="3">This Fee Voucher will be submitted, under given List of the banks and applications</td>
          </tr>
          <tr className="row1">
            <td className="column1 style62 s style64" colspan="3">Mail:     support@pftpedu.org</td>
            <td className="column5 style62 s style64" colspan="3">Mail:   support@pftpedu.org</td>
          </tr>
          <tr className="row2">
            <td className="column1 style65 s style67" colspan="3">&nbsp;0303-4321118</td>
            <td className="column5 style65 s style67" colspan="3">&nbsp;0303-4321118</td>
          </tr>
          <tr className="row3">
            <td className="column0 style68 s style70" colspan="4">Fee Voucher</td>
            <td className="column4 style68 s style70" colspan="4">Fee Voucher</td>
            <td className="column8 style11 s">Bank</td>
            <td className="column9 style12 s">ATM</td>
            <td className="column10 style13 s">Internet Banking</td>
            <td className="column11 style15 s">Mobile Banking</td>
            <td className="column12 style16 s">Over the Counter</td>
          </tr>
          <tr className="row4">
            <td className="column0 style79 s style81" colspan="4">Invoice No.</td>
            <td className="column4 style79 s style81" colspan="4">Invoice No.</td>
            <td className="column8 style14 s">Allied Bank</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row5">
            <td className="column0 style82 null style84" colspan="4">{invoice.invoice_no}</td>
            <td className="column4 style82 null style84" colspan="4">{invoice.invoice_no}</td>
            <td className="column8 style14 s">Meezan Bank</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row6">
            <td className="column0 style1 s">Date:</td>
            <td className="column1 style71 null style73" colspan="3">{moment(invoice.created_at).format("Do MMM YY")}</td>
            <td className="column4 style1 s">Date:</td>
            <td className="column5 style71 null style73" colspan="3">{moment(invoice.created_at).format("Do MMM YY")}</td>
            <td className="column8 style14 s">Askari Bank</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row7">
            <td className="column0 style44 s style45" colspan="2">Student Name</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.user ? invoice.user.name :''}</td>
            <td className="column4 style44 s style45" colspan="2">Student Name</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.user ? invoice.user.name:""}</td>
            <td className="column8 style14 s">HBL</td>
            <td className="column9 style10 s">No</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row8">
            <td className="column0 style77 s style78" colspan="2">Course</td>
            <td className="column2 style71 null style73" colspan="2"></td>
            <td className="column4 style77 s style78" colspan="2">Course</td>
            <td className="column6 style71 null style73" colspan="2"></td>
            <td className="column8 style14 s">MCB</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row9">
            <td className="column0 style44 s style45" colspan="2">Batch</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.batch && invoice.is_paid  ? invoice.batch.number: batch ? batch.number : ""}</td>
            <td className="column4 style44 s style45" colspan="2">Batch</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.batch && invoice.is_paid  ? invoice.batch.number:  batch ? batch.number : ""}</td>
            <td className="column8 style14 s">Bank Al Habib</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row10">
            <td className="column0 style44 s style45" colspan="2">Roll Number</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.user ? invoice.user.student_profile.roll_number :''}</td>
            <td className="column4 style44 s style45" colspan="2">Roll Number</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.user ? invoice.user.student_profile.roll_number :''}</td>
            <td className="column8 style14 s">Bank Alflah</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row11">
            <td className="column0 style57 s style58" colspan="2">Particulars</td>
            <td className="column2 style57 s style58" colspan="2">Amount(PKR)</td>
            <td className="column4 style57 s style58" colspan="2">Particulars</td>
            <td className="column6 style57 s style58" colspan="2">Amount(PKR)</td>
            <td className="column8 style14 s">Standard Chartered </td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row12">
            <td className="column0 style44 s style45" colspan="2">Registration Fee</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.offer ?  new Date(invoice.offer.valid_till).getTime() >= new Date().getTime() ? <i><del>{invoice.amount}</del> {calculateDiscount(invoice.amount,invoice.offer.discount_in_percent)}  </i> : invoice.amount : invoice.amount}</td>
            <td className="column4 style44 s style45" colspan="2">Registration Fee</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.offer ?  new Date(invoice.offer.valid_till).getTime() >= new Date().getTime() ? <i><del>{invoice.amount}</del> {calculateDiscount(invoice.amount,invoice.offer.discount_in_percent)}  </i> : invoice.amount : invoice.amount}</td>
            <td className="column8 style14 s">Silk bank</td>
            <td className="column9 style10 s">No</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row13">
            <td className="column0 style44 s style45" colspan="2">Security Fee</td>
            <td className="column2 style44 null style45" colspan="2"></td>
            <td className="column4 style44 s style45" colspan="2">Security Fee</td>
            <td className="column6 style44 null style45" colspan="2"></td>
            <td className="column8 style14 s">Bank of Punjab</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">No</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row14">
            <td className="column0 style44 s style45" colspan="2">Tuition Fee</td>
            <td className="column2 style44 null style45" colspan="2"></td>
            <td className="column4 style44 s style45" colspan="2">Tuition Fee</td>
            <td className="column6 style44 null style45" colspan="2"></td>
            <td className="column8 style14 s">Jazz Cash</td>
            <td className="column9 style10 s">No</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row15">
            <td className="column0 style44 s style45" colspan="2">Due Date</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.is_paid ? moment(invoice.batch.adm_closing_date).format("Do MMM  YY") : moment(batch.adm_closing_date).format("Do MMM  YY")}</td>
            <td className="column4 style44 s style45" colspan="2">Due Date</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.is_paid ? moment(invoice.batch.adm_closing_date).format("Do MMM  YY") : moment(batch.adm_closing_date).format("Do MMM  YY")}</td>
            <td className="column8 style14 s">Easy Paisa</td>
            <td className="column9 style10 s">No</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">No</td>
          </tr>
          <tr className="row16">
            <td className="column0 style44 s style45" colspan="2">Fee After Due Date</td>
            <td className="column2 style44 null style45" colspan="2">{invoice.amount}</td>
            <td className="column4 style44 s style45" colspan="2">Fee After Due Date</td>
            <td className="column6 style44 null style45" colspan="2">{invoice.amount}</td>
            <td className="column8 style14 s">UBL</td>
            <td className="column9 style10 s">Yes</td>
            <td className="column10 style10 s">Yes</td>
            <td className="column11 style10 s">Yes</td>
            <td className="column12 style10 s">Yes</td>
          </tr>
          <tr className="row17">
            <td className="column0 style49 null style50" colspan="2"></td>
            <td className="column2 style53 null style54" colspan="2"></td>
            <td className="column4 style49 null style50" colspan="2"></td>
            <td className="column6 style53 null style54" colspan="2"></td>
            <td className="column8 style2 null"></td>
            <td className="column9 style17 null"></td>
            <td className="column10 style17 null"></td>
            <td className="column11 style17 null"></td>
            <td className="column12 style3 null"></td>
          </tr>
          <tr className="row18">
            <td className="column0 style46 s style51" colspan="2">_________________</td>
            <td className="column2 style55 s style48" colspan="2">_________________</td>
            <td className="column4 style46 s style51" colspan="2">_________________</td>
            <td className="column6 style55 s style48" colspan="2">_________________</td>
            <td className="column8 style4 null"></td>
            <td className="column9 style9 null"></td>
            <td className="column10 style9 null"></td>
            <td className="column11 style9 null"></td>
            <td className="column12 style5 null"></td>
          </tr>
          <tr className="row19">
            <td className="column0 style35 s style52" colspan="2">Bank Sign&amp;stamp</td>
            <td className="column2 style56 s style37" colspan="2">Student Sign</td>
            <td className="column4 style35 s style52" colspan="2">Bank Sign&amp;stamp</td>
            <td className="column6 style56 s style37" colspan="2">Student Sign</td>
            <td className="column8 style4 null"></td>
            <td className="column9 style9 null"></td>
            <td className="column10 style9 null"></td>
            <td className="column11 style9 null"></td>
            <td className="column12 style5 null"></td>
          </tr>
          <tr className="row20">
            <td className="column0 style46 s style48" colspan="4">Note: If you have any Query Contact on </td>
            <td className="column4 style46 s style48" colspan="4">Note: If you have any Query Contact on </td>
            <td className="column8 style30 s style32" colspan="5">Note: If you have any Query Contact on </td>
          </tr>
          <tr className="row21">
            <td className="column0 style46 s style48" colspan="4">this No. 0303-4321118</td>
            <td className="column4 style46 s style48" colspan="4">this No. 0303-4321118</td>
            <td className="column8 style33 s style34" colspan="5">this No. 0303-4321118</td>
          </tr>
          <tr className="row22">
            <td className="column0 style74 s style76" colspan="4">Fee once paid will not be refunded.</td>
            <td className="column4 style74 s style76" colspan="4">Fee once paid will not be refunded.</td>
            <td className="column8 style35 s style37" colspan="5">Fee once paid will not be refunded.</td>
          </tr>
          <tr className="row23">
            <td className="column0 style38 s style40" colspan="4">Bank Copy</td>
            <td className="column4 style38 s style40" colspan="4">Student Copy</td>
            <td className="column8 style6 null"></td>
            <td className="column9 style7 null"></td>
            <td className="column10 style7 null"></td>
            <td className="column11 style7 null"></td>
            <td className="column12 style8 null"></td>
          </tr>
        </tbody>
    </table>
    </div>
    </div>

    </div>
 : 
 <h4 className='bg-danger text-light text-center'>  <i className="lab la-bitbucket"></i> Invoice Not Found</h4>

 
 }   
     {/* Footer 2 */}
    
    </Styles>
    <FooterTwo /> 
    </React.Fragment>

        )
    }


export default GenerateInvoice