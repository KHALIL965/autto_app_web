import React,{Component} from 'react';

import AuthLayout from "../../components/layouts/AuthLayout";
import Loader from '../../components/Loader';

import {connect} from 'react-redux';

class Authentication extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            {this.props.isLoading?<Loader/>:null}
           <AuthLayout {...this.props}/>
           </>
        )
    }
}

const mapStateToProps=state=>{
    console.log("State_on_Auth_page=> ", state);
    return {
        isLoading:state.LoaderReducer.isLoading
    }
}

export default connect(mapStateToProps)(Authentication);