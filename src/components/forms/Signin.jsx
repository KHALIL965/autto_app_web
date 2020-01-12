import React, { Component, useEffect, useState } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Signin = (props) => {
    //email states
    const [email, setEmail]=useState("");
    const [emailStatus, setEmailStatus]=useState(false);
    const [emailError, setEmailError]=useState("");

    //password states
    const [password, setPassword]=useState("");
    const [passwordStatus, setPasswordStatus]=useState(false);
    const [passwordError, setPasswordError]=useState("");

    const handleInput=(type,text)=>{
        console.log("type=> ",type, " text=> ",text);
    }

    useEffect(()=>{
        console.log("SignInForm_useEffect");
        window.document.title="Autto | SignIn";
    },[])

    return (
        <>
            <div class="form-header">
                <h3>Login to your account</h3>
                <p>Enter your credentials below</p>
            </div>
            <form class="form-box">
                <div class="main-form">
                    <div class="form-group icon-field">
                        <label class="common-label">Email ID</label>
                        <input type="text" class="form-control"
                            onChange={e => handleInput("email", e)}
                            placeholder="name@example.com" />
                        <span class="error">Please enter a valid email address</span>
                    </div>
                    <div class="form-group password-field icon-field">
                        <label class="common-label">Password</label>
                        <input type="password" class="form-control"
                            onChange={e => handleInput("password", e)}
                            placeholder="**********" />
                        <span class="error hide">Please enter a valid password</span>
                    </div>

                    <div class="button-block mt30 mb30">
                        <a class="btn btn-login btn-block" href="">SIGN IN</a>
                    </div>
                    <div class="form-group clearfix mt25 mb0">
                        <div class="checkbox-design-block">
                            <label class="checkbox-design">
                                <input type="checkbox" name="" />
                                <span></span>Remember me?
                            </label>
                        </div>
                    </div>
                    <div class="reg-text text-left mt5">
                        <a href="" class="forget-text">SIGN IN</a>
                        <a class="forget-text" href="signup.html">Create Account</a>
                    </div>
                </div>
            </form>
        </>
    )
}


const mapStateToProps=state=>{
    console.log('State_on_signin_form=> ',state);
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Signin);