import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class MyAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
            rollno:'',
            name:'',
            email:'',
            mob:'',
            whatsapp:'',
            cnic:'',
            qualification:'',
            city:'',
            address:'',
            updates: false,
            img: '',
            title: '',
            details: '',
        }
        this.logout = this.logout.bind(this);
        this.myProfile = this.myProfile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.setError = this.setError.bind(this);
        
    }
   async updateProfile()
    {
        if(!global.config.Token){
            this.props.history.push('/login');
        }
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;        
        const res = await axios.post(global.config.URL.api.student + 'update-profile',{
            data : this.state
          },);
          if(res && res.data.success)
          {
            if(res.data.exception.ex){
                Object.entries(res.data.exception).map(([key,value])=>{
                    if(value)
                    {
                        const input = document.getElementById(key);
                        if (input){
                            return (
                                this.setError(input,`${key} has already been taken`)
                            );
                        }
                    }
                    const input = document.getElementById(key);
                    if (input){
                        return (input.parentElement.className = "form-control")
                    }
                    return null;
                    
                })
            }else{
               
                swal({
                    title: "Updated!",
                    text: "Your profile has been successfully Updated!",
                    icon: "success",
                    button: "OK!",
                  })
                  const elements = Array.from(document.getElementsByClassName("error"));
                  elements.map(element=>{
                   return element.className = "form-control success" ;
                })
            }
           }else{
           
           alert(res.data.message);
           }
        
    }
     handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        },function(){});
      }
      setError(input, message) {
        const formControl = input.parentElement;
        input.focus();
        const errorMsg = formControl.querySelector(".registration_input-msg");
        formControl.className = "form-control text-left error";
        errorMsg.innerText = message;
    }
    componentDidMount()
    {
        this.myProfile();
    }

    async myProfile()
    {
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
      
        const user = await axios.get(global.config.URL.api.student + 'my-profile');
        if(user.data.success)
        {
            this.setState({
                name:user.data.profile.name,
                rollno:user.data.profile.student_profile.roll_number,
                email:user.data.profile.email,
                mob:user.data.profile.mob,
                whatsapp:user.data.profile.student_profile.whatsapp,
                cnic:user.data.profile.student_profile.cnic,
                qualification:user.data.profile.student_profile.qualification.name,
                city:user.data.profile.student_profile.city.name,
                address:user.data.profile.student_profile.address,
                updates:user.data.updates ? true : false,
                img:user.data.updates ? user.data.updates.img : false,
                title:user.data.updates ? user.data.updates.title : false,
                details:user.data.updates ? user.data.updates.details : false,
            },function(){});
        }
    }

    logout()
    {
        localStorage.clear();
        window.location.href = '/';
    }
    
    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <div className="main-wrapper">
                      {/* Header 2 */}
                      <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="My Account" bg="Breadcrumbs/extra/MyAccount-Breadcrumbs.png" />

                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="profile">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile"><i className="las la-user la-lg"></i>My Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="las la-shopping-cart la-lg"></i><Link to={'my-cart'}>My cart</Link></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><i className="las la-receipt la-lg"></i><Link to={'my-invoices'}>My Invoices</Link></Nav.Link>
                                        </Nav.Item>
                                       {
                                         this.state.updates ? 
                                        <Nav.Item>
                                        <Nav.Link eventKey="batch-updates"><i className="las la-tv la-lg"></i>Batch Updates</Nav.Link>
                                        </Nav.Item> :""
                                       }
                                        <Nav.Item>
                                            <Nav.Link onClick={() => this.logout()} ><i className="las la-sign-out-alt la-lg"></i>Logout</Nav.Link>
                                        </Nav.Item>
                                       
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                        <Row>
                            <Col md="12">
                          
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                 
                                        <h3>My Profile</h3>
                                    </div>
                                    <div id="form_registration" className="form row">
                                    <div className="col-md-6">
                                    <p className="form-control">
                                            <label htmlFor="rollno">Roll Number</label>
                                            <input type="text" readOnly value={this.state.rollno} id="rollno" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                    <div className="col-md-6">
                                    <p className="form-control">
                                            <label htmlFor="registration_name">Name</label>
                                            <input type="text" placeholder="Enter Name" name='name' onChange={this.handleChange} value={this.state.name} id="registration_name" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control">
                                            <label htmlFor="mobile">Mobile</label>
                                            <input type="text" placeholder="Enter Mobile"  name='mob' onChange={this.handleChange} value={this.state.mob} id="mobile" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" placeholder="Enter Email"  name='email' onChange={this.handleChange} value={this.state.email} id="email" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control">
                                            <label htmlFor="cnic">CNIC</label>
                                            <input type="text" placeholder="Enter CNIC"  name='cnic' onChange={this.handleChange} value={this.state.cnic} id="cnic" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control" id="qua">
                                            <label htmlFor="registration_qualification">Qualification</label>
                                            {/* <SelectBox1
                                                options={this.Allqualifications}
                                                name={"qua"}
                                                id={"select1"}
                                                onChange={this.handleChange}
                                                /> */}
                                            <input type="text" placeholder="Enter Qualification" value={this.state.qualification} readOnly id="registration_qualification" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control">
                                            <label htmlFor="whatsapp">Whatsapp Number</label>
                                            <input type="text" placeholder="Enter Whatsapp Number"  name='whatsapp' onChange={this.handleChange} value={this.state.whatsapp}  id="whatsapp" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-6">
                                        <p className="form-control"  id="city">
                                            <label htmlFor="registration_city">City</label>
                                            {/* <SelectBox2
                                                options={this.Allcities}
                                                name={"city"}
                                                id={"select2"}
                                                onChange={this.handleChange}
                                                /> */}
                                            <input type="text" placeholder=""  value={this.state.city} readOnly id="registration_city" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className="col-md-12">
                                        <p className="form-control">
                                            <label htmlFor="registration_address">Address</label>
                                            <input type="text" placeholder="Enter your address"  name='address' onChange={this.handleChange}  value={this.state.address}  id="registration_address" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <button onClick={() => this.updateProfile()}>Update</button>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                                        </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                        <Tab.Pane eventKey="batch-updates">
                                        <Row>
                            <Col md="12">
                            <div className="registration-box">
                                    <div className="registration-title text-center">
                                 
                                        <h3>Batch Updates</h3>
                                    </div>
                            <div class="card" />
                            <img class="card-img-top img-fluid" height={300} src={global.config.URL.img.public + this.state.img} alt="Card cap"/>
                            <div class="card-body">
                            <h5 class="card-title">{this.state.title}</h5>
                            <p class="card-text">{this.state.details}</p>
                            </div>             
                            </div>
                            </Col>
                        </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
                <FooterTwo/>
                </div>
            </Styles>
        )
    }
}

export default MyAccount
