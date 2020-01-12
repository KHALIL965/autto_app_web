import {combineReducers} from 'redux';
import {AuthReducer} from './AuthReducer';
import {LoaderReducer} from "./LoaderReducer";

export const RootReducer=combineReducers({
    LoaderReducer,
    AuthReducer
})