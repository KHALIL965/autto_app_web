import React, { Component, useEffect, useState } from 'react';

//redux component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link} from 'react-router-dom';

//validation functions
import { validateEmail, validatePassword } from '../../../utils/validation/Validation';

//inline rrror component
import InlineError from '../../../components/InlineError';
// import APIRequest from '../../../services/webservices/Apirequest';
import { saveLoginData } from '../../../redux/actions/AuthActions';

const Signin = (props) => {
    //email states
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState(false);
    const [emailError, setEmailError] = useState("");

    //password states
    const [password, setPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    
    //remember me
    const [rememberMe, setRememberMe]=useState(false);

    const handleInput = (type, text) => {
        // console.log("type=> ", type, " text=> ", text);        
        if(type=="email"){
            setEmail(text.target.value);
            let obj=validateEmail(text.target.value);
            // console.log("Email_validation=> ",obj);
            setEmailStatus(obj.status);
            setEmailError(obj.error);
        }
        else if(type=="password"){
            setPassword(text.target.value);
            let obj=validatePassword(text.target.value);
            // console.log("Password_validation=> ",obj);
            setPasswordError(obj.error);
            setPasswordStatus(obj.status);
        }
        else if(type=="rememberme"){
            console.log("type=> ", type, " text=> ", text.target.checked); 
            setRememberMe(text.target.checked);
        }
    }

    useEffect(() => {
        console.log("SignInForm_useEffect");
        window.document.title = "Autto | SignIn";
    }, [])

    const handleSubmit = () => {
        if(passwordStatus && emailStatus && email!="" && password!=""){
            console.log("ready to hit api");

            try{
                let variables={
                    "emailId": email,
                    "password": password
                  }

                  let obj={
                      variables,
                      endpoint:"users/account/login",
                      apimethod:"POST"
                  }

                  props.action.saveLoginData(obj, props.history);
    
                // APIRequest(variables, "users/account/login", "POST").then(resp=>{
                //     console.log("LoginAPI_Response=> ",resp);


                // })
                // .catch(err=>{
                //     console.log("LoginAPI_Catch=> ",err);
                // })
            }
            catch(error){
                console.log("LoginAPI_try_catch=> ",error);
            }

            
        }
        else if(!passwordStatus || password==""){
            console.log("Password error");
            setPasswordStatus(true);
            setPasswordError("Please enter password");
        }
        else if(!emailStatus || email==""){
            console.log("email error");
            setEmail(true);
            setEmailError("Please enter email");
        }        
    }

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
                            placeholder="name@example.com"
                            value={email} />
                            {emailStatus?null:<InlineError message={emailError}/>}
                        {/* <span class="error">Please enter a valid email address</span> */}
                    </div>
                    <div class="form-group password-field icon-field">
                        <label class="common-label">Password</label>
                        <input type="password" class="form-control"
                            onChange={e => handleInput("password", e)}
                            placeholder="**********"
                            value={password} />
                            {passwordStatus?null:<InlineError message={passwordError}/>}
                        {/* <span class="error hide">Please enter a valid password</span> */}
                    </div>

                    <div class="button-block mt30 mb30">
                        <a class="btn btn-login btn-block" onClick={e => handleSubmit()}>SIGN IN</a>
                    </div>
                    <div class="form-group clearfix mt25 mb0">
                        <div class="checkbox-design-block">
                            <label class="checkbox-design">
                                <input type="checkbox" checked={rememberMe} name="remember" onChange={e => handleInput("rememberme", e)} />
                                <span></span>Remember me?
                            </label>
                        </div>
                    </div>
                    <div class="reg-text text-left mt5">
                        <Link class="forget-text" to={{pathname:"/auth/forgotpassword"}} >Forgot Password</Link>&nbsp;
                        <Link class="forget-text" to={{ pathname: "/signup/profileDetails" }} >Create Account</Link>
                    </div>
                </div>
            </form>
        </>
    )
}


const mapStateToProps = state => {
    console.log('State_on_signin_form=> ', state);
    return {
        ...state
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        action:bindActionCreators({saveLoginData}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);