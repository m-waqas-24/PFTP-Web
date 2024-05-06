import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/cart.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner'
import swal from 'sweetalert';
class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            cart: [],
            subAmount : 0,
            amount : 0,
            discountinPercent: 0,
            discount : 0,
            loading :true,
            promoLoading :false,
            promo:'',
            promo_id:null
        }

        this.myCart = this.myCart.bind(this);
        this.getAmount = this.getAmount.bind(this);
        this.checkout = this.checkout.bind(this);
        this.promo = this.promo.bind(this);
        this.b1g1 = this.b1g1.bind(this);
        this.b1a1 = this.b1a1.bind(this);
        this.confiramCheckout = this.confiramCheckout.bind(this);
        
    }
    componentDidMount() {
       
        this.myCart();
    }
    async promo  (e) {
        this.setState({promoLoading:true})
        e.preventDefault();
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const promo = await axios.get(global.config.URL.api.apply + 'promo/' + this.state.promo);
        if(promo.data.success)
        {
       console.log(promo)
          this.setState({promoLoading:false})
          
            window.setTimeout(()=> window.scrollTo (0,250), 500) 
           
            this.setState({discountinPercent:promo.data.offer.discount_in_percent,promo_id:promo.data.offer.id},function(){
               if(promo.data.offer.promo === "B1G1")
               {   
               
                     this.b1g1();
                    
               }else if(promo.data.offer.promo === "B1A1")
               {
                this.b1a1();
               }
               else{
                this.getAmount();
                swal("You Got "+promo.data.offer.discount_in_percent+"% Discount", "", "success");
               }
               
                
            });  
        }else{
            this.setState({promoLoading:false})
              swal("Error",promo.data.message, "error");
        }
    }

    async myCart  () {
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const cart = await axios.get(global.config.URL.api.apply + 'my-cart');
        if(cart.data.success)
        {
            this.setState({cart: cart.data.cart,loading:false},function(){
                this.getAmount();
            });  

            console.log(cart,'cart')
        }
    }
    async removeFromCart(id,i) {
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const remove = await axios.get(global.config.URL.api.apply + 'remove-from-cart/'+id);
        let cart = [...this.state.cart]
        cart.splice(i, 1)
        this.setState({ 
            cart: cart,
        },function(){
            this.getAmount();
            
        })
        swal(remove.data.message);
    }
    b1a1(){
        var a1 = false;
        var b1 = false;
        if(this.state.cart.length  > 1  )
        {
            for(var i=0; i < this.state.cart.length; i++ )
            {
                 if(this.state.cart[i].course.domain_id === 7 )
                 {
                    a1 = true;
                 }else{
                    b1 = true;
                 }
            }
           
           if(a1 === true && b1 === false)
           {
            this.setState({discountinPercent:0,promo_id:null})
            swal("Please Select Basic Courses to Avail this offer");
           }
          else if(a1 === false && b1 === true)
           {
            this.setState({discountinPercent:0,promo_id:null})
            swal("Please Select Atlest 1 Advance Course to Avail this offer");
           }
           else{
            swal("You Got "+this.state.discountinPercent+"% Discount", "", "success");
             this.getAmount();
           }
           }
           else{
            this.setState({discountinPercent:0,promo_id:null})
            swal("Please Select Atleast 2 Courses", "", "error");
           }
    }

    b1g1()
    {  
        var a1 = false
        if(this.state.cart.length  > 1  )
        {
            for(var i=0; i < this.state.cart.length; i++ )
            {
                 if(this.state.cart[i].course.domain_id === 7)
                 {
                  a1 = true;
                 }

            }
           if(a1)
           {
            this.setState({discountinPercent:0,promo_id:null})
            swal("Please Select Basic Courses to Avail this offer");
           }else{
            swal("You Got "+this.state.discountinPercent+"% Discount", "", "success");
             this.getAmount();
           }
           }
           else{
            this.setState({discountinPercent:0,promo_id:null})
            swal("Please Select Atleast 2 Basic Courses", "", "error");
           }
    }

    getAmount()
    {
        var subAmount = 0;
       for(var i=0; i < this.state.cart.length; i++)
       {
          subAmount = subAmount +  this.state.cart[i].course.fee;
       }
       var discountAmount = (subAmount/100)*this.state.discountinPercent;
       this.setState({ 
        subAmount: subAmount,
        discount:discountAmount,
        amount: subAmount - discountAmount
    })
    }
    confiramCheckout()
    {
        swal({
            title: "Are you sure?",
            text: `Your invoice amount is Rs:${this.state.amount}`,
            icon: "warning",
            buttons: {cancel:"NO",text:"GENERATE INVOICE"},
          })
          .then((yes) => {
            if (yes) {
             this.checkout()
            } else {
              
            }
          });
    }
    checkout = async() =>{

        if(!global.config.Token){
            this.props.history.push('/login');
        }
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;        
        const res = await axios.post(global.config.URL.api.apply + 'checkout',{
            offer : this.state.promo_id
          },);
          if(res && res.data.success)
          {
            this.props.history.push('my-invoices')
           }else{
            swal("Warning",res.data.message, "warning");

            swal({
                title: "Warning",
                text: res.data.message,
                icon: "warning",
                buttons: {cancel:"NO",text:"OK"},
              })
              .then((yes) => {
                if (yes) {
                    this.props.history.push('/my-invoices')
                } else {
                    this.props.history.push('/')
                }
              });
          
           }
        

    }
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper cart-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="My Cart"  bg="Breadcrumbs/extra/Cart.png" />

                    {/* Product Details */}
                    <section className="cart-area">
                      { this.state.loading ? <InfinitySpin  width='200' className="center" color="#4fa94d" /> : 
                        <Container>
                        {
                                 this.state.cart.length > 0 ?
                            <Row>
                           
                                <Col lg="8" md="12">
                              
                                    <div className="product-list table-responsive">
                                        <Table className="table-bordered">
                                            <thead>
                                            <tr>
                                                    <td colSpan={4} className="text-danger">Finally you have selected you course.Now click on GENERATE INVOICE button to get your fee slip.</td>
                                                    
                                                   
                                                </tr>
                                                <tr>
                                                    <th className="product-remove"></th>
                                                    <th className="product-thumbnail"></th>
                                                    <th className="product-name">Course</th>
                                                    <th className="product-price">Fee</th>
                                                   
                                                </tr>
                                            </thead>
                                           
                                            <tbody>
                                                {
                                                 
                                                   this.state.cart.map((cart, i) => (
                                                    <tr  key={i}>
                                                    <td className="product-remove"><a href="#!" onClick={() => this.removeFromCart(cart.id,i)}><i className="las la-trash"></i></a></td>
                                                    <td className="product-thumbnail"><a href='#!' onClick={() => {window.location.href=`${process.env.PUBLIC_URL + cart.course.slug}`}}><img src={global.config.URL.img.public + cart.course.course_detail.img} alt="" /></a></td>
                                                    <td className="product-title"><a href='#!' onClick={() => {window.location.href=`${process.env.PUBLIC_URL + cart.course.slug}`}}>{cart.course.name}</a></td>
                                                    <td className="product-price"><span className="amount">Rs:{cart.course.fee}</span></td>
                                                   </tr>
                                                   ))
                                                   
                                                }                   
                                            </tbody>
                                        </Table>
                                        <div className="actions d-flex justify-content-between">
                                            <div className="coupon"> 
                                                <form action="#!" className="form-inline" onSubmit={(e) => this.promo(e)}>
                                                    <input type="text" className="form-control" onChange={e => this.setState({promo:e.target.value})} value={this.state.promo} placeholder="Promo code (optional)" required />
                                                   {this.state.promoLoading ? <button disabled className="apply-btn"> <InfinitySpin  width='100' color="#ffb200" /></button> : <button type="submit" className="">Check Promo</button>} 
                                                </form>
                                            </div>
                                            <div className="update-cart">
                                                <a className="update-btn" href={process.env.PUBLIC_URL + "/course-registration"}>Update cart</a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                     
                                </Col>
                                                
                                <Col lg="4" md="6">
                                    <div className="cart-summary">
                                        <div className="cs-title text-center">
                                            <h5>Cart Summary</h5>
                                        </div>
                                        <div className="cs-content">
                                            <ul className="list-unstyled">
                                                <li>Sub Total <span>{this.state.subAmount}</span></li>
        
                                                <li>Discount ({this.state.discountinPercent}%) <span>{this.state.discount}</span></li>
                                            </ul>
                                            <p className="cart-total">Grand Total <span>{this.state.amount}</span></p>
                                            <button type="button" onClick={() => this.confiramCheckout()} className="checkout-btn">Generate Invoice</button>
                                        </div>
                                    </div>
                                </Col>
 
                            </Row>
                            :
                             <div className='text-center text-light'>         
                              
                            <h4 className='bg-danger'>  <i className="lab la-bitbucket"></i> Empty Cart</h4>
                           <Link to='/course-registration'>Register for new courses</Link>
                             </div>
                           }
                        </Container>
                      }
                    </section>

                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }
}

export default Cart