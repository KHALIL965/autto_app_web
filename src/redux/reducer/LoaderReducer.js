import {LOADER_ACTION} from "../actions/ActionTypes";

const InitialState={
    isLoading:false
}

export const LoaderReducer=(state=InitialState, action)=>{
    switch(action.type){
        case LOADER_ACTION.LOADER_START : return {
            ...state,
            isLoading:true
        }
        case LOADER_ACTION.LOADER_STOP : return {
            ...state,
            isLoading:false
        }

        default : return state
    }
}

