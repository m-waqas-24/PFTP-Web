import React, { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/joinhands';
import Select from "react-select";
import axios from 'axios';
import swal from 'sweetalert';
function Instructor() {
    const [cities, setCities]= useState([]);
    const [courses, setCourses]= useState([]);
   
 
    useEffect(() =>     {
        GetCities();
        GetCourses();
        const form = document.getElementById("form_login");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const ContactInformation = document.getElementById("ContactInformation");
        const courses = document.getElementById("courses");
        const Resume = document.getElementById("Resume");
        const Experience = document.getElementById("Experience");
        const cnic = document.getElementById("cnic");
        const gender = document.getElementById("gender");
        const age = document.getElementById("age");
        
        const Why = document.getElementById("Why");

        // Validation
        var isName=false;
        var isEmail=false;
       
        var isContct=false;
        
        var isResum=false;
        var isCnic=false;
        var isGen=false;
        var isAge=false;
        var iswhy=false;
       

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();
            if (name.value.trim() === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
                isName=true;
            }
            if (email.value.trim() === "") {
                setError(email, "Email can't be blank");
            } else {
                setSuccess(email);
                isEmail=true;
            }
            if (ContactInformation.value.trim() === "") {
                setError(ContactInformation, "Contact Information can't be blank");
            } else {
                setSuccess(ContactInformation);
                isContct=true;
            } 
           
            if (Resume.value === "") {
                setError(Resume, "Please Upload Your Resume");
            } else {
                setSuccess(Resume);
                isResum = true;
            }
            if (courses.value === "") {
                setError(courses, "Please Select Courses");
            } else {
                setSuccess(courses);
                isResum = true;
            }
            
            if (cnic.value === "") {
                setError(cnic, "Please Enter Your CNIC");
            } else {
                setSuccess(cnic);
                isCnic = true;
            }
            if (gender.value === "") {
                setError(gender, "Please Select Your gender");
            } else {
                setSuccess(gender);
                isGen = true;
            }
            if (age.value === "") {
                setError(age, "Please Enter Your age");
            } else {
                setSuccess(age);
                isAge = true;
            }
            
            if (Why.value === "") {
                setError(Why, "Please Enter");
            } else {
                setSuccess(Why);
                iswhy = true;
            }
            if(isName && isEmail && isContct && isResum && isCnic && isGen && isAge && iswhy)
            {
                submit();
                
            }
            

          
        }
       
        function setError(input, message) {
            const formControl = input.parentElement;
            input.focus();
            const errorMsg = formControl.querySelector(".login_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
           

        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        
        const submit = async () =>{
            let formData = new FormData();
            formData.append("city_id" , document.getElementsByName("city")[0].value);
            formData.append("name" ,name.value.trim());
            formData.append("email", email.value.trim());
            formData.append("ContactInformation", ContactInformation.value.trim());
            for(var i=0; i<courses.childNodes.length;i++){
                if(courses.childNodes[i].selected){
                  formData.append("courses[]", courses.childNodes[i].value);
                }
            }
            formData.append("Resume", Resume.files[0]);
            formData.append("Experience", Experience.value.trim());
            formData.append("cnic", cnic.value.trim());
            formData.append("gender", gender.value.trim());
            formData.append("age", age.value.trim());
            formData.append("why", Why.value.trim());
             const res = await axios.post(global.config.URL.api.public + 'store-instructor',formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                }
               });
               
              if(res && res.data.success)
              {
                swal({
                    title: "Submitted!",
                    text: "Your application has been successfully submitted!",
                    icon: "success",
                    button: "OK!",
                  }).then(() => {
                        window.location.href = '/';
                    });
                
              }else{
                console.log(res)  
                Object.entries(res.data.message).map(([key,value])=>{
                    const input = document.getElementById(key);
                    return (
                        setError(input,value.toString())
                    );
                  })
         }
        }   
    },[]);

    const GetCities = async () =>{

        const res = await axios.get(global.config.URL.api.public + 'get-cities');
       if(res.data.success)
       {
          setCities(res.data.cities);
       }
    }
     const GetCourses = async () =>{

        const res = await axios.get(global.config.URL.api.public + 'get-courses');
       if(res.data.success)
       {
          setCourses(res.data.courses);
       }
    }
    const SelectBox2 = ({ options, name,id, onChange }) => {
        const [optionSelected, setSelectedOption] = useState([]);
      
      
        const handleChange = (selected) => {
          onChange({ name,id, category: selected.value });
           
           setSelectedOption(selected);


        };
      
        return (
          <Select
            options={options}
            isLoading={!options}
            closeMenuOnSelect={true}
            onChange={handleChange}
            value={optionSelected}
            name={name}
            required={true}
           
          />
        );
      };
      const handleChange = (e) => {
        console.log(e);
      };
      
    const Allcities = cities.map((item) => ({ value: item.id, label: item.name  }));
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper join-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Become Insturctor" bg="Breadcrumbs/joinHands/Instructor.png" />

                {/* Login Area */}
                <section className="join-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="join-box">
                                    <div className="join-title text-center">
                                        <h3>Application Form to Become an Instructor</h3>
                                        <span className="login_input-msg error text-danger" id='error'></span>
                                    </div>
                                    <form id="form_login" className="form row">
                                        <div className='col-md-6'>
                                        <p className="form-control ">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder="Enter Your Name" id="name" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" placeholder="Enter Your Email" id="email" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                        
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="ContactInformation">Contact Information</label>
                                            <input type="text" placeholder="Enter Your Contact Information" id="ContactInformation" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control"  id="city">
                                            <label htmlFor="registration_city">City</label>
                                            <SelectBox2
                                                options={Allcities}
                                                name={"city"}
                                                id={"select2"}
                                                onChange={handleChange}
                                                />
                                            {/* <input type="text" placeholder="Enter Whatsapp Number" value={'Lahore'} id="registration_city" /> */}
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>   
                                        <p className="form-control">
                                            <label htmlFor="Resume">Resume <small>(Max 2Mb)</small></label>
                                            <input type="file"  id="Resume" />
                                            <span className="login_input-msg"></span>
                                        </p> 
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="Experience">Experience</label>
                                            <input type="text" placeholder="Optional" id="Experience" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="cnic">CNIC</label>
                                            <input type="text" placeholder="Enter your cnic without -" id="cnic" minLength={13} maxLength={13} />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                        <label htmlFor="Track">Gender </label>
                                        <select id="gender" >
                                          
                                            <option value="" selected disabled>{"Select"}</option>
                                            <option value={"male"}>{"Male"}</option>
                                            <option value={"female"}>{"FeMale"}</option>
                                          
                                           
                                           
                                        </select>     
                                        <span className="login_input-msg"></span>                                  
                                        </p>
                                        </div> 
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="age">Age</label>
                                            <input type="text" placeholder="Enter your age" id="age" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>  
                                        
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="Why">Why do you think you are eligible for this post </label>
                                            <textarea type="text" rows={2} className="form-control" placeholder="Write here..."  id="Why" ></textarea>
                                            <span className="login_input-msg"></span>
                                        </p>   
                                        </div>  
                                        <div className='col-md-12'>
                                        <p className="form-control">
                                        <label htmlFor="Track">Please Select Courses  </label>
                                        <select id="courses" multiple className='multi-select'>
                                           {
                                            courses.map((course,i)=>(
                                            <option key={i} value={course.name}>{course.name}</option>
                                            ))
                                            
                                           }
                                           
                                           
                                        </select>     
                                        <span className="login_input-msg"></span>                                  
                                        </p>
                                        </div>   
                                        
                                       
                                        <button>Submit</button>
                                    </form>
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

export default Instructor