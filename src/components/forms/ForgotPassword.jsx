import React, {Component, useState, useEffect} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const ForgotPassword=(props)=>{

    useEffect(()=>{
        console.log("SignInForm_useEffect");
        window.document.title="Autto | Forgot Password";
    },[])

    return (
        <>
        <div>
            ForgotPassword
        </div>
        </>
    );
}

const mapStateToProps=state=>{
    console.log("State_on_ForgotPassword_Page=> ",state);
    return state
}

export default connect(mapStateToProps)(ForgotPassword);