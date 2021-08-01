import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS, GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS
} from "./order-action-types";

const INITIAL_STATE = {
    orders: [],
    loading: false,
    error: null,
    singleOrder: {}
};

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                orders: [...state, action.payload]
            }

        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                orders: action.payload
            }

        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                orders: []
            }
        default:
            return state;
    }
}

export const selectBankLogins = orders => {
    return orders.filter(order => order.type === 'Login');
}


export const selectCCDumps = orders => {
    return orders.filter(order => order.type === 'Dump');
}

export default ordersReducer;
