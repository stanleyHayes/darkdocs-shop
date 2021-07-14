import {combineReducers} from 'redux';
import authReducer from "./authentication/auth-reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
