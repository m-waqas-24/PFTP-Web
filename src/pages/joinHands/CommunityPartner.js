import React, { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/joinhands';
import Select from "react-select";
import axios from 'axios';
import swal from 'sweetalert';

function CommunityPartner() {
    const [cities, setCities]= useState([]);
   
 
    useEffect(() => {
        GetCities();
        const form = document.getElementById("form_login");
        const name = document.getElementById("name");
        const Companyname = document.getElementById("Companyname");
        const Designation = document.getElementById("Designation");
        const ContactInformation = document.getElementById("ContactInformation");
        const bio = document.getElementById("bio");
        const Facebook = document.getElementById("Facebook");
        const CompanyProfile = document.getElementById("CompanyProfile");
        const Logo = document.getElementById("Logo");
       
        // Validation
        var isName=false;
        var isCname=false;
        var isDesig=false;
        var isContct=false;
        var isBio=false;
        var isFacebook=false;
        

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();
            if (name.value.trim() === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
                isName=true;
            }
            if (Companyname.value.trim() === "") {
                setError(Companyname, "Company Name can't be blank");
            } else {
                setSuccess(Companyname);
                isCname=true;
            }
            if (Designation.value.trim() === "") {
                setError(Designation, "Designation can't be blank");
            } else {
                setSuccess(Designation);
                isDesig=true;
            }
            if (ContactInformation.value.trim() === "") {
                setError(ContactInformation, "Contact Information can't be blank");
            } else {
                setSuccess(ContactInformation);
                isContct=true;
            }
           
            if (bio.value.trim() === "") {
                setError(bio, "This Filed can't be blank");
            }
            else {
                setSuccess(bio);
                isBio = true;
            }
            
            if (Facebook.value.trim() === "") {
                setError(Facebook, "Facebook can't be blank");
            } else {
                setSuccess(Facebook);
                isFacebook = true;
            }
            // if (CompanyProfile.value === "") {
            //     setError(CompanyProfile, "Please Upload Company Profile");
            // } else {
            //     setSuccess(CompanyProfile);
            //     isCompanyProfile = true;
            // }
            // if (Logo.value === "") {
            //     setError(Logo, "Please Upload Company Profile");
            // } else {
            //     setSuccess(Logo);
            //     isLogo = true;
            // }


            if(isName && isCname && isDesig && isContct && isBio && isFacebook)
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
            formData.append("Companyname", Companyname.value.trim());
            formData.append("Designation", Designation.value.trim());
            formData.append("ContactInformation", ContactInformation.value.trim());

            formData.append("bio", bio.value.trim());
          
            formData.append("Facebook", Facebook.value.trim());
            // formData.append("CompanyProfile", CompanyProfile.files[0]);
            // formData.append("Logo", Logo.files[0]);
             const res = await axios.post(global.config.URL.api.public + 'store-comunity-partner',formData,{
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
                <BreadcrumbBox title="Become Ambassador" bg="Breadcrumbs/joinHands/Community.png" />
              
                {/* Login Area */}
                <section className="join-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="join-box">
                                    <div className="join-title text-center">
                                        <h3>Ambassador FORM</h3>
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
                                            <label htmlFor="Companyname">Company Name</label>
                                            <input type="text" placeholder="Enter Your Company Name" id="Companyname" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="Designation">Designation</label>
                                            <input type="text" placeholder="Enter Your Designation" id="Designation" />
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
                                        <p className="form-control">
                                            <label htmlFor="Facebook">Facebook Id</label>
                                            <input type="text" placeholder="Paste here..."  id="Facebook" />
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
                                        
                                     
                                        {/* <div className='col-md-6'>
                                        <p className="form-control">
                                            <label htmlFor="CompanyProfile">Company Profile <small>(Max 2Mb)</small></label>
                                            <input type="file"  id="CompanyProfile" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        </div>
                                        <div className='col-md-6'>   
                                        <p className="form-control">
                                            <label htmlFor="Logo">Company Logo <small>(Max 1Mb)</small></label>
                                            <input type="file"  id="Logo" />
                                            <span className="login_input-msg"></span>
                                        </p> 
                                        </div>
                                       */}
                                       
                                        <div className='col-md-12'>
                                        <p className="form-control">
                                            <label htmlFor="bio">Represented Bio</label>
                                            <textarea type="text" rows={3} className="form-control" placeholder="Write here..."  id="bio" ></textarea>
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

export default CommunityPartner