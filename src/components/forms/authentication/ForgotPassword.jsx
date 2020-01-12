import React, {Component, useState, useEffect} from 'react';

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { validateEmail } from '../../../utils/validation/Validation';
import InlineError from '../../InlineError';
import APIRequest from '../../../services/webservices/Apirequest';
import ToasterFunction from '../../ToasterFunc';

const ForgotPassword=(props)=>{

    //email states
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState(false);
    const [emailError, setEmailError] = useState("");

    useEffect(()=>{
        console.log("SignInForm_useEffect");
        window.document.title="Autto | Forgot Password";
    },[])

    const handleInput=(type,e)=>{
        let value=e.target.value;
         setEmail(value);
         let obj=validateEmail(value);
         setEmailError(obj.error);
         setEmailStatus(obj.status);
    }

    const handleSubmit=()=>{
        if(email!=="" && emailStatus){
            let variable={
                "emailId":email
            }
            try{
                APIRequest(variable, "users/account/forgot-password", "POST").then(resp=>{
                    console.log("Forgot_password_API_response=> ",resp);
                    if(resp && resp.data && resp.data.code && resp.data.code==200){
                        ToasterFunction("success","Request sent successfully. Please check your email");    
                    }                    
                })
                .catch(error=>{
                    console.log("Forgot_password_API_catch=> ",error);
                    ToasterFunction("error","Please try again later");
                })
            }
            catch(error){
                console.log("Forgot_password_API_try_catch=> ",error);
                ToasterFunction("error","Please try again later");
            }            
        }
    }

    return (
        <>
        <div class="main-content common-main">
    <div class="form-block max-WT-600 pt40 block-center">
        <div class="form-main">
          <div class="form-header">
              <h3>Forgot your password?</h3>
              <p>To reset your password, enter the email you used when you created your account.</p>
          </div>
          <form class="form-box">
             <div class="main-form">
                <div class="form-group icon-field">
                  <label class="common-label">Email ID</label>
                   <input type="text" class="form-control" 
                   value={email}
                   onChange={e=>handleInput("email",e)}
                   placeholder="name@example.com"/>
                   <InlineError message={emailError}/>
                   {/* <span class="error">Please enter a valid email address</span> */}
                </div> 
                <div class="button-block mt30 mb30">
                   <a class="btn btn-login btn-block" onClick={e=>handleSubmit()}>Forgot Password</a>
                </div>
               </div>
            </form>
        </div>
    </div>

  </div>
        </>
    );
}

const mapStateToProps=state=>{
    console.log("State_on_ForgotPassword_Page=> ",state);
    return state
}

export default connect(mapStateToProps)(ForgotPassword);