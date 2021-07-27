import {combineReducers} from 'redux';
import authReducer from "./authentication/auth-reducer";
import ordersReducer from "./orders/order-reducer";
import instructionsReducer from "./instructions/instructions-reducer";
import fundsReducer from "./funds/funds-reducer";
import chequesReducer from "./cheques/cheques-reducer";
import dumpsReducer from "./dumps/dumps-reducer";
import loginsReducer from "./logins/logins-reducer";
import banksReducer from "./banks/banks-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
    instructions: instructionsReducer,
    funds: fundsReducer,
    cheques: chequesReducer,
    dumps: dumpsReducer,
    logins: loginsReducer,
    banks: banksReducer
});

export default rootReducer;
