import React, { Component} from 'react';
import { Container, Row, Col,Collapse,Button } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/courseRegistration.js';
import axios from 'axios';
import { RegisterBreadcrumb } from '../../components/common/RegisterBreadcrumb';
import swal from 'sweetalert';
import { InfinitySpin } from 'react-loader-spinner';

class CourseRegistration extends Component {


    constructor() {
        super()
        this.state = {
            domains: [],
            collapse:[],
            courses:[],
            loading:false
        }
        this.getData = this.getData.bind(this)
        this.toggleCollapse = this.toggleCollapse.bind(this)
        this.addOrRemove = this.addOrRemove.bind(this)
        this.addtoCart = this.addtoCart.bind(this)
        
        
    }

     toggleCollapse = index => {
        let collapseCopy = [...this.state.collapse];
        collapseCopy[index] = !collapseCopy[index];
       this.setState({collapse:collapseCopy});
    }
  
         getData = async () =>{
            const domains = await axios.get(global.config.URL.api.public + 'domain-courses');
            this.setState({domains:domains.data.domains});
        }

         addOrRemove = (id) => {
            const newCourses = [...this.state.courses];
            const index = newCourses.indexOf(id);
            if (index === -1) {
              newCourses.push(id);
            } else {
              newCourses.splice(index, 1);
            }
            if(newCourses.length > 5)
            {
               
                swal("Warning!", "You can take max 5 courses!", "warning");
                document.getElementById(id).checked = false;
            }else{
                this.setState({courses:newCourses},function(){
                    console.log(this.state.courses,'ok')
                });
            }
          }
        componentDidMount()
        {
            this.getData();
        }

         addtoCart = async () =>{
            if(this.state.courses.length === 0)
            {
                swal("Warning!", "Please Select Course", "warning");
            }else if(this.state.courses.length > 5)
            {
                swal("Warning!", "You can take max 5 courses!", "warning");

            }else{
                if(!global.config.Token){
                    this.props.history.push('/login');
                }
                this.setState({loading:true})
                axios.defaults.headers.common[
                    "Authorization"
                  ] = `Bearer ${global.config.Token}`;        
                const res = await axios.post(global.config.URL.api.student + 'course-registration',{
                    courses :this.state.courses
                  },);
                  if(res && res.data.success)
                  {
                    this.props.history.push('/my-cart')
                   }else{
                    this.setState({loading:false})
                   swal("Warning!", res.data.message, "warning");
                   }
                }
            }

    render() {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Course Registration" bg="Breadcrumbs/extra/Course-Registration.png" />
                <RegisterBreadcrumb active={3}/>
                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Course Registration</h3>
                                        <p className='text-danger'>Select course in which you want to apply</p>

                                    </div>
                                    <section id="form_registration" className="form">
                                     
                                     {
                                       this.state.domains.map((domain, i) => (
                                        <p className="form-control">
                                        <Button
                                          onClick={() => this.toggleCollapse(i)} key={i}
                                        aria-controls={domain.id+"-collapse-text"}
                                        aria-expanded={ this.state.collapse[i]}
                                    >
                                        {domain.name}
                                    </Button>
                                    <Collapse in={ this.state.collapse[i]}>
                                        <div id={domain.id+"-collapse-text"}>
                                        <p className='form-control'>
                                        <table className='table'>
                                            <tr>
                                                <th>Action</th>
                                                <th>Course Name</th>
                                                <th>Fee</th>
                                                </tr>
                                               {  domain.courses.map((course, j) => (

                                               
                                                <tr>
                                                    <td>
                                                    <input  type="checkbox" onClick={() => this.addOrRemove(course.id)} id={course.id}  className='check-box'/>
                                                    </td>
                                                    <td htmlFor={course.id}><b>{course.name}</b></td>
                                                    <td>{course.fee}</td>
                                                   
                                                    </tr>
                                                     ))
                                                    }
                                        </table>
                                        </p>
                                        </div>
                                    </Collapse>
                                        </p>
                                        ))
                                      }
                                       {
                                            this.state.loading ? <button disabled className="text-center"><InfinitySpin  width='100' color="#ffb200" /></button> :   <button onClick={() => this.addtoCart()}>Save & Next</button>
                                        }
                                       
                                    </section>
                                    
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

export default CourseRegistration