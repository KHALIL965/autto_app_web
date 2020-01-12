import {LOADER_ACTION} from "./ActionTypes";

export const loaderStart=item=>dispatch=>{
    console.log("loader_start_middleware=> ",item);
    dispatch({type:LOADER_ACTION.LOADER_START});
} 

export const loaderStop=item=>dispatch=>{
    console.log("loader_stop_middleware=> ",item);
    dispatch({type:LOADER_ACTION.LOADER_STOP});
}