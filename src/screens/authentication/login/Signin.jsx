import React, { Component } from 'react';

//router
import {withRouter} from 'react-router-dom'

//middleWare for loader actions
import { loaderStart, loaderStop } from '../../../redux/actions/LoaderAction';

// connect 
import {connect} from "react-redux";

//bindActions
import {bindActionCreators} from 'redux';

//constants
import {States} from '../../../assets/constants/constants';


class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...States
        }
    }

    componentDidMount(){
        // console.log("WINDOW_Object=> ",window);
        window.document.title="Autto | Sigin";
    }

    handleInput=(type , e)=>{
        console.log("type=> ",type, "text=> ",e.target.value);
    } 

    render(){
        return (
            <main>
            <div class="main-content common-main">
                <div class="form-block max-WT-600 pt40 block-center">
                    <div class="form-main">
                        <div class="form-header">
                            <h3>Login to your account</h3>
                            <p>Enter your credentials below</p>
                        </div>
                        <form class="form-box">
                            <div class="main-form">
                                <div class="form-group icon-field">
                                    <label class="common-label">Email ID</label>
                                    <input type="text" class="form-control" 
                                    onChange={e=>this.handleInput("email",e)}
                                    placeholder="name@example.com" />
                                    <span class="error">Please enter a valid email address</span>
                                </div>
                                <div class="form-group password-field icon-field">
                                    <label class="common-label">Password</label>
                                    <input type="password" class="form-control" 
                                    onChange={e=>this.handleInput("password",e)}
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
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

const mapStateToProps=state=>{
    console.log("State_on_Signin_page=> ", state);
    return{
        ...state
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        actions:bindActionCreators({loaderStart, loaderStop}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));