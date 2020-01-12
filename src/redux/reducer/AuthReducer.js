import {AUTH_ACTION} from '../actions/ActionTypes';

const initialState={
    isLoggedIn:false,
    loggedInData:{},
}

export const AuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case AUTH_ACTION.LOGIN_SUCCESS: return {
            ...state,
            loggedInData:action.payload,
            isLoggedIn:true
        };
        case AUTH_ACTION.LOGIN_FAILED: return {
            ...state,
            loggedInData:{},
            isLoggedIn:false
        };
        default: return state;
    }
}