import React, { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import Select from "react-select";
import axios from 'axios';
import { RegisterBreadcrumb } from '../../components/common/RegisterBreadcrumb';
import swal from 'sweetalert'
function CreateProfile() {

    const [qualifications, setQualifications]= useState([]);
    const [cities, setCities]= useState([]);
   
 
    useEffect(() => {
        const form = document.getElementById("form_registration");
        const cnic = document.getElementById("registration_cnic");
       
       
        const wa = document.getElementById("registration_wa");
     
       
        const address = document.getElementById("registration_address");
       
        // Validation
        var isCNIC=false;
        var isQUA=false;
        var isWA=false;
        var isCITY=false;
        var isADDRESS=false;

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const cnicValue = cnic.value.trim();
            const qua =  document.getElementsByName("qua")[0];
            const waValue = wa.value.trim();
            const city =   document.getElementsByName("city")[0];
            const addressValue = address.value.trim();
           
            if (cnicValue === "") {
                setError(cnic, "CNIC can't be blank");
            } else if(!isNIC(cnicValue) || cnicValue.length !==13)
            {
                setError(cnic, "CNIC must be 13 digits");
            } else {
                isCNIC = true;
                setSuccess(cnic);
            }
            if (qua.value === "") {
              
                setError(qua, "Please Select Qualification");
            } else {
                isQUA = true;
                setSuccess(qua);
            }
            if (waValue === "") {
                setError(wa, "Whatsapp can't be blank");
            }
            else if(!isMobile(waValue) || waValue.length !==11)
            {
                setError(wa, "WhatsApp Number must be 11 digits");
            }
            else {
                isWA = true;
                setSuccess(wa);
            }
            if (city.value === "") {
                setError(city, "Please Select Qualification");
            } else {
                isCITY = true;
                setSuccess(city);
            }
            if (addressValue === "") {
                setError(address, "City can't be blank");
            } else {
                isADDRESS = true;
                setSuccess(address);
            }

            if(isCNIC && isQUA && isWA && isCITY && isADDRESS )
            {
               ProfileRegister();
            }
        }

        function setError(input, message) {
            input.focus();
            if((input.name === "qua") ||  (input.name === "city"))
            {
                const formControl = document.getElementById(input.name);
                 const errorMsg = formControl.querySelector(".registration_input-msg");
                 formControl.className = "form-control text-left error";
                 errorMsg.innerText = message;
               
     
            }
            else{
                const formControl = input.parentElement;
                 const errorMsg = formControl.querySelector(".registration_input-msg");
                 formControl.className = "form-control text-left error";
                 errorMsg.innerText = message;
     
            }
           
          
        }

        function setSuccess(input) {
           
            if((input.name === "qua") ||  (input.name === "city"))

            {
              const formControl = document.getElementById(input.name);
              const errorMsg = formControl.querySelector(".registration_input-msg");
              const succcessMsg = formControl.querySelector(".css-1s2u09g-control");
              errorMsg.innerText = "";
              succcessMsg.classList.add("border")
    
            }
            else{

                const  formControl = input.parentElement;
                formControl.className = "form-control success";
            }
            console.log(input,'inputsus')
          
            
           
        }

    
        function isMobile(mobile) {
            return mobile.match('[0-9]{11}');
        }
        function isNIC(cnic) {
            return cnic.match('[0-9]{13}');
        }
        
      
        EducationCities();
        const ProfileRegister = async () =>{
          
            axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${global.config.Token}`;
          
           
            const res = await axios.post(global.config.URL.api.student + 'profile-register',{
               cnic: cnic.value.trim(),
               whatsapp: wa.value.trim(),
               qualification: document.getElementsByName("qua")[0].value,
               city: document.getElementsByName("city")[0].value,
               address: address.value.trim(),
             },);
             if(res && res.data.success)
             {
                 const auth = JSON.parse(localStorage.getItem("authUser"))
                 auth.profile = true;
                 localStorage.setItem("authUser", JSON.stringify(auth));
                 swal({
                    title: "Registered!",
                    text: "Your profile has been successfully registered!",
                    icon: "success",
                    button: "OK!",
                  }).then(() => {
                    window.location.href = '/course-registration';
                    });
             }else{
              const message = res.data.message;
              if(message.cnic)
              {
               setError(cnic,  message.cnic);
              }
              if(message.whatsapp)
              {
               setError(wa,  message.whatsapp);
              }
             
              if(message.address)
              {
               setError(address,  message.address);
              }
              
        }
       }   
    },[]);
    const EducationCities = async () =>{
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${global.config.Token}`;
       
        const res = await axios.get(global.config.URL.api.student + 'education-cities');
       if(res.data.success)
       {
          setCities(res.data.cities);
          setQualifications(res.data.qualifications);
       }
    }

    const SelectBox1 = ({ options, name,id, onChange }) => {
        const [quaSelected, setSelectedQua] = useState([]);
  
        const handleChange = (selected) => {
          onChange({ name,id, category: selected.value });
            
         
          setSelectedQua(selected);


        };
      
        return (
          <Select
            options={options}
            isLoading={!options}
            closeMenuOnSelect={true}
            onChange={handleChange}
            value={quaSelected}
            name={name}
           
          />
        );
      };

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
           
          />
        );
      };
      const handleChange = (e) => {
        console.log(e);
      };
    
      //const [data, setData] = useState([]);
      /* get data */
    
     
      //console.log(data);
      const Allqualifications = qualifications.map((item) => ({ value: item.id, label: item.name + `(${item.parent.name})` }));
      const Allcities = cities.map((item) => ({ value: item.id, label: item.name  }));
    return (
    
      
        <Styles>
           
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Profile Registration" bg="Breadcrumbs/extra/Profile-Registration.png" />
                <RegisterBreadcrumb  active={2} />
                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                          
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                 
                                        <h3>Profile Registration</h3>
                                        <p className='text-danger'>Create your profile to complete registration </p>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_cnic">CNIC</label>
                                            <input type="text" placeholder="Enter CNIC" id="registration_cnic" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control" id="qua">
                                            <label htmlFor="registration_qualification">Qualification</label>
                                            <SelectBox1
                                                options={Allqualifications}
                                                name={"qua"}
                                                id={"select1"}
                                                onChange={handleChange}
                                                />
                                            {/* <input type="text" placeholder="Enter Qualification" value={'Information Technology'} id="registration_qualification" /> */}
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_wa">Whatsapp Number</label>
                                            <input type="text" placeholder="Enter Whatsapp Number"  id="registration_wa" />
                                            <span className="registration_input-msg"></span>
                                        </p>
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
                                        <p className="form-control">
                                            <label htmlFor="registration_address">Address</label>
                                            <input type="text" placeholder="Enter your address" id="registration_address" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <button>Save & Next</button>
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

export default CreateProfile