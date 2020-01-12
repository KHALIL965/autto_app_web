import React, {Component} from 'react';

import SignupLayout from '../../../components/layouts/SignupLayout';

import {connect} from 'react-redux';
import Loader from '../../../components/Loader';

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <>
            {this.props.isLoading?<Loader/>:null}
            <SignupLayout {...this.props}/>
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

export default connect(mapStateToProps)(Signup);