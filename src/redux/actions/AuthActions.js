import {AUTH_ACTION} from './ActionTypes';
import APIRequest from '../../services/webservices/Apirequest';

import {loaderStart, loaderStop} from '../actions/LoaderAction';
import ToasterFunction from '../../components/ToasterFunc';



export const saveLoginData=(data,history)=>dispatch=>{
    console.log("login_data=> ", data);    
    loaderStart();
    try{
        APIRequest(data.variables, data.endpoint, data.apimethod).then(resp=>{
            console.log("LoginAPI_Response=> ",resp);
            if(resp && resp.data && resp.data.code==200){                
                dispatch({type:AUTH_ACTION.LOGIN_SUCCESS, payload:resp.data.data});
                setTimeout(() => {
                    ToasterFunction("success",resp.data.message);
                    loaderStop();                    
                    history.replace({pathname:"/getSupport"});
                }, 300);
                
            }
            else{
                dispatch({type:AUTH_ACTION.LOGIN_FAILED, payload:{}});
                ToasterFunction("error","Network error please contact the administrator");
                loaderStop();
            }            
        })
        .catch(err=>{
            console.log("LoginAPI_Catch=> ",err);
            ToasterFunction("error","Network error please contact the administrator");
            dispatch({type:AUTH_ACTION.LOGIN_FAILED, payload:{}});
            loaderStop();
        })
    }
    catch(error){
        ToasterFunction("error","Network error please contact the administrator");
        dispatch({type:AUTH_ACTION.LOGIN_FAILED, payload:{}});
        loaderStop();
    }

}