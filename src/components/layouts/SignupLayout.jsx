import React, { Component } from 'react';

// //components for multistep signup
import ProfileDetails from '../forms/signup/ProfileDetails';
import BillingAddress from '../forms/signup/BillingAddress';
import PaymentInformation from '../forms/signup/PaymentInformation';
import SocialLinks from '../forms/signup/SocialLinks';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ToasterFunction from '../ToasterFunc';

//routes
// import {SignupRoutes} from '../../navigation/routes';

//router components
// import {Route, Switch, NavLink} from 'react-router-dom';

//api request
import API from "../../services/webservices/Apirequest";
import { loaderStart, loaderStop } from '../../redux/actions/LoaderAction';


class SignupLayout extends Component {

    constructor(props){
        super(props);
        this.state={
            active:"profileDetails"
        };
    }

    componentDidMount(){
        console.log("DidMount_Signup_Layout=> ",window.location)
    }

    // getRoutes=routes=>{
    //     return routes.map( (item,index)=>{
    //         // console.log("item==>> ", item)
    //     // return <div>{item.name}</div>
    //         if(item.layout=="/signup"){
    //             return(
    //                 <Route 
    //                 path={item.layout+item.path}
    //                 component={item.component}
    //                 key={index}
    //                 {...this.props}
    //                 />
    //             )
    //         }            
    //     })
    // }

    handleSubmit=(type, obj)=>{

        console.log("type==>> ",type, " text==>> ",obj);

        if(type=="profileDetails"){
            this.setState({profileDetails:obj, active:"billingAddress"});            
        }
        else if(type=="billingAddress"){
            this.setState({billingAddress:obj, active:"paymentInformation"});            
        }
        else if(type=="paymentInformation"){
            this.setState({paymentInformation:obj, active:"socialLinks"});            
        }
        else{
            this.setState({socialLinks:obj})
            let variables={
                "firstName": this.state.profileDetails.firstName,
                "lastName": this.state.profileDetails.lastName,
                "emailId": this.state.profileDetails.email,
                "password":this.state.profileDetails.password,
                "phoneNo": this.state.profileDetails.mobile,
                "countryCode": "+91",
                "address": this.state.billingAddress.userAddress,
                "country": this.state.billingAddress.country,
                "city": this.state.billingAddress.city,
                "region": this.state.billingAddress.region,
                "postalCode": this.state.billingAddress.postalCode,
                // "paymentInfo": {cardNo:this.state.paymentInformation,
                //     cardType:1,expiredYear:,expiredMonth:03,cvv:202,zipCode:267433},
                "paymentInfo":this.state.paymentInformation,
                "facebookLink": obj.socialLink1,
                "googleLink": obj.socialLink2,
                "yelpLink": obj.socialLink3
              }
              this.registerAPI(variables);                      
        }
    }

    registerAPI=(variables)=>{
        console.log("Register_API_function_request=> ",variables);
        loaderStart();
        try{
            API(variables,"users/account/registration", "POST").then(resp=>{
                console.log("Registration_api_response=> ",resp);
                if(resp && resp.status && resp.data.code==201){
                    // alert(resp.data.message);
                    ToasterFunction("success",resp.data.message);
                    setTimeout(() => {
                        this.props.history.replace({pathname:"/auth/signin"})
                        loaderStop();
                    }, 200);
                }
                else{
                    ToasterFunction("error","Network error. Please contact the administrator");
                }
            })
            .catch(err=>{
                console.log("Registration_api_Catch=> ",err);
                ToasterFunction("error",err.toString());
            })
        }
        catch(error){
            console.log("Registration_api_try_Catch=> ",error);
            ToasterFunction("error",error.toString());
        }
    }

    render() {
        return (
            <main>
                <div className="main-content common-main">
                    <div className="banner-sec">
                        <img src={require('../../assets/images/banner-bg.png')} />
                        <div className="inner-common-heading text-center">
                            <h2>Let’s get started with your - Basic Plan</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="form-block max-WT-600 pt40 block-center mt-top-minus box-shadow step-form">
                        <div className="form-main">
                            <ul className="step d-flex flex-nowrap">
                                <li className={this.state.active=="profileDetails"?"step-item active":"step-item"}>
                                    {/* <NavLink to={{pathname:"/signup/profileDetails"}}  className="">Step 1</NavLink> */}
                                    <a >Step 1</a>
                                </li>
                                <li className={this.state.active=="billingAddress"?"step-item active":"step-item"}>
                                    {/* <NavLink to={{pathname:"/signup/billingAddress"}} className="">Step 2</NavLink> */}
                                    <a >Step 2</a>
                                </li>
                                <li className={this.state.active=="paymentInformation"?"step-item active":"step-item"}>
                                    {/* <NavLink to={{pathname:"/signup/paymentInformation"}} className="">Step 3</NavLink> */}
                                    <a >Step 3</a>
                                </li>
                                <li className={this.state.active=="socialLinks"?"step-item active":"step-item"}>
                                    {/* <NavLink to={{pathname:"/signup/socialLinks"}} className="">Step 4</NavLink> */}
                                    <a >Step 4</a>
                                </li>
                            </ul>

                            {/* <Switch>
                                {this.getRoutes(SignupRoutes)}
                            </Switch> */}
                            <ProfileDetails 
                                active={this.state.active}
                                handleSubmit={this.handleSubmit}
                            />

                            <BillingAddress 
                                active={this.state.active}
                                handleSubmit={this.handleSubmit}
                            />

                            <PaymentInformation 
                                active={this.state.active}
                                handleSubmit={this.handleSubmit}
                            />

                            <SocialLinks 
                                active={this.state.active}
                                handleSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps=state=>{
    console.log("State_on_Auth_page=> ", state);
    return {
        isLoading:state.LoaderReducer.isLoading
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        actions:bindActionCreators({loaderStart, loaderStop}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupLayout);