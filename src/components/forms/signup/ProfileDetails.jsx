import React,{Component, useState, useEffect} from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {validateEmail, validatePassword, validateName, validateMobileNo, validateConfirmPassword} from '../../../utils/validation/Validation';
import InlineError from '../../InlineError';
import ToasterFunction from '../../ToasterFunc';

const ProfileDetails = (props)=>{

   //first name states
   const [firstName, setFirstName]=useState("");
   const [firstNameError, setFirstNameError]=useState("");
   const [firstNameStatus, setFirstNameStatus] = useState("");

   //second name states
   const [lastName, setLastName] = useState("");
   const [lastNameError, setLastNameError] = useState("");
   const [lastNameStatus, setLastNameStatus] = useState("");

   //mobile number status
   const [mobile, setMobile]=useState("");
   const [mobileError, setMobileError]=useState("");
   const [mobileStatus, setMobileStatus] = useState("");

   //email states
   const [email, setEmail]=useState("");
   const [emailError, setEmailError] = useState("");
   const [emailStatus, setEmailStatus] = useState("");


   // password states
   const [password, setPassword]=useState("");
   const [passwordError, setPasswordError] = useState("");
   const [passwordStatus, setPasswordStatus] = useState("");

   //confirm password states
   const [confirmPassword, setConfirmPassword] = useState("");
   const [confirmPasswordError, setConfirmPasswordError] = useState("");
   const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("");

   if(props.active=="profileDetails")
   {window.document.title="Autto | Profile Details"}

   // useEffect(()=>{
   //    if(props.active=="profileDetails")
   //    window.document.title="Autto | Profile Details"
   // },[])

   //function to handle submit event of the form
   const handleInput=(type,e)=>{

      let value=e.target.value;
      let obj={};
      let reg=/^[0-9]*$/;
      if(type=="firstName"){
         setFirstName(value);
         obj=validateName(value);
         console.log("firstName=>", obj);
         setFirstNameError(obj.error);
         setFirstNameStatus(obj.status);
      }
      else if(type=="lastName"){
         setLastName(value);
         obj=validateName(value);
         setLastNameError(obj.error);
         setLastNameStatus(obj.status);
      }
      else if(type=="email"){
         setEmail(value);
         obj=validateEmail(value);
         setEmailError(obj.error);
         setEmailStatus(obj.status);
      }
      else if(type=="mobile"){
         
         if(value=="" || reg.test(value)){
            setMobile(value);            
         }                  
         obj=validateMobileNo(value);
            setMobileError(obj.error);
            setMobileStatus(obj.status);
      }
      else if(type=="password"){
         setPassword(value);
         obj=validatePassword(value);
         setPasswordError(obj.error);
         setPasswordStatus(obj.status);
      }
      else if(type=="confirmPassword"){
         setConfirmPassword(value);
         obj=validateConfirmPassword(value, password);
         setConfirmPasswordError(obj.error);
         setConfirmPasswordStatus(obj.status);
      }
   }

   const handleNext=()=>{
      console.log("DataSubmit");      
      if(confirmPasswordStatus && firstNameStatus && lastNameStatus && emailStatus && mobileStatus && passwordStatus
         && confirmPassword!="" && firstName!="" && lastName!="" && email!="" && mobile!="" && password!=""
         ){
            console.log("Hit api here");
            // props.history.push("billingAddress");
            let profileDetails={
               firstName, lastName, email,mobile, password,
            }
            props.handleSubmit("profileDetails",profileDetails);
      }
      else {
         console.log("fill all required fields");
         ToasterFunction("error","Please fill all the profile details carefully. All Fields are required")
      }
   }

    return(
        <div className={props.active=="profileDetails"?"steps step1":"steps step1 hide"}>
              <div className="form-header">
                  <h3>Your profile details</h3>
                  <p>*Mandatory field</p>
              </div>
              <form className="form-box">
                 <div className="main-form">
                    <div className="form-group icon-field">
                      <label className="common-label"><span className="reqiured">*</span>First Name</label>
                       <input type="text" 
                       onChange={e=>handleInput("firstName",e)} 
                       className="form-control" 
                       placeholder=""
                       value={firstName}
                       />
                       
                       {/* <span className="error">Please enter a valid Name</span> */}
                       <InlineError message={firstNameError}/>
                    </div> 
                    <div className="form-group password-field icon-field">
                       <label className="common-label"><span className="reqiured">*</span>Last Name</label>
                       <input type="text" className="form-control" onChange={e=>handleInput("lastName",e)} placeholder=""
                       value={lastName}
                       />
                       {/* <span className="error hide">Please enter a valid password </span> */}
                       <InlineError message={lastNameError}/>
                    </div> 

                    <div className="form-group password-field icon-field">
                       <label className="common-label"><span className="reqiured">*</span>Email</label>
                       <input type="text" className="form-control" onChange={e=>handleInput("email",e)} placeholder=""
                        value={email}
                       />
                       {/* <span className="error hide">Please enter a valid Re-Password </span> */}
                       <InlineError message={emailError}/>
                    </div>

                    <div className="form-group password-field icon-field">
                       <label className="common-label"><span className="reqiured">*</span>Phone Number</label>
                       <input type="text" className="form-control" onChange={e=>handleInput("mobile",e)} placeholder=""
                        value={mobile}
                       />
                       {/* <span className="error hide">Please enter a valid Re-Password </span> */}
                       <InlineError message={mobileError}/>
                    </div>

                    <div className="form-group password-field icon-field">
                       <label className="common-label"><span className="reqiured">*</span>Password</label>
                       <input type="password" className="form-control" onChange={e=>handleInput("password",e)} placeholder=""
                       value={password}
                       />
                       {/* <span className="error hide">Please enter a valid password </span> */}
                       <InlineError message={passwordError}/>
                    </div> 
                    <div className="form-group password-field icon-field">
                       <label className="common-label"><span className="reqiured">*</span>Re-Password</label>
                       <input type="password" className="form-control" onChange={e=>handleInput("confirmPassword",e)} placeholder=""
                        value={confirmPassword}
                       />
                       {/* <span className="error hide">Please enter a valid Re-Password </span> */}
                       <InlineError message={confirmPasswordError}/>
                    </div> 
                    <div className="button-block mt30" onClick={(e)=>handleNext()}>
                       <a className="btn btn-login btn-block" >SAVE AND NEXT</a>
                    </div>
                 </div>
              </form>
          </div>
    )
}

const mapStateToProps=state=>{
    console.log("State_on_Profile_Details_Page=>", state);
    return {
        state
    }
}

export default connect(mapStateToProps)(ProfileDetails);