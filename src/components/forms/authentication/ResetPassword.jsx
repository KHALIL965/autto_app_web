import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validatePassword, validateConfirmPassword } from '../../../utils/validation/Validation';
import InlineError from '../../InlineError';
import APIRequest from '../../../services/webservices/Apirequest';
import ToasterFunction from '../../ToasterFunc';

const ResetPassword = (props) => {

    // password states
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");

    //confirm password states
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("");

    useEffect(() => {
        console.log("SignInForm_useEffect");
        window.document.title = "Autto | Reset Password";
    }, [])

    const handleInput = (type, e) => {

        let value = e.target.value;
        let obj = {};

        if (type == "password") {
            setPassword(value);
            obj = validatePassword(value);
            setPasswordError(obj.error);
            setPasswordStatus(obj.status);
        }
        else if (type == "confirmPassword") {
            setConfirmPassword(value);
            obj = validateConfirmPassword(value, password);
            setConfirmPasswordError(obj.error);
            setConfirmPasswordStatus(obj.status);
        }
    }

    const handleSubmit=()=>{
        console.log("this.window.location=> ", window.location);
        

        try{

            let variables={
                "password":password,
                "token":props.match.params.Id
            }
            console.log("ResetPassword_request=> ",variables);

            APIRequest(variables,"users/account/reset-password","PATCH").then(resp=>{
                console.log("reset_Password_response=> ",resp);
                if(resp && resp.data && resp.data.code && resp.data.code==200){
                    ToasterFunction("success","Passowrd changed successfully");
                    props.history.replace({pathname:"/auth/signin"});
                }
                else{
                    ToasterFunction("error","Network error. Please try after some time.");
                }
            })
            .catch(err=>{
                console.log("reset_Password_catch=> ",err);
                ToasterFunction("error","Network error. Please try after some time.");
            })
        }
        catch(error){
            console.log("reset_Password_try_catch=> ",error);
            ToasterFunction("error","Network error. Please try after some time.");
        }
        
    }

    return (
        <>
            <main>
                <form class="form-box">
                    <div class="main-form">
                        <div className="form-group password-field icon-field">
                            <label className="common-label"><span className="reqiured">*</span>Password</label>
                            <input type="password" className="form-control" onChange={e => handleInput("password", e)} placeholder=""
                                value={password}
                            />
                            {/* <span className="error hide">Please enter a valid password </span> */}
                            <InlineError message={passwordError} />
                        </div>
                        <div className="form-group password-field icon-field">
                            <label className="common-label"><span className="reqiured">*</span>Re-Password</label>
                            <input type="password" className="form-control" onChange={e => handleInput("confirmPassword", e)} placeholder=""
                                value={confirmPassword}
                            />
                            {/* <span className="error hide">Please enter a valid Re-Password </span> */}
                            <InlineError message={confirmPasswordError} />
                        </div>
                        {/* <div class="reg-text text-left mt5">
                        
                        <a class="forget-text" onClick={e=>handelSubmit()} >Reset Password</a>
                        </div> */}
                        <div class="button-block mt30 mb30" onClick={e => handleSubmit()}>
                            <a class="btn btn-login btn-block" >SIGN IN</a>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}

export default ResetPassword;