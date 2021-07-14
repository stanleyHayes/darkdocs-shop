import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAILURE,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_REQUEST,
    DELETE_ORDER_FAILURE,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAILURE,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_REQUEST,
    GET_ORDERS_FAILURE,
    GET_ORDER_FAILURE
} from './order-action-types';

const INITIAL_STATE = {
    orders: [],
    error: "",
    loading: false,
    singleOrder: {}
};

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...state.orders, action.payload],
                error: ""
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
                loading: true
            }

        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...action.payload],
                error: ""
            }

        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                orders: []
            }

        case GET_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                singleOrder: action.payload,
                error: ""
            }

        case GET_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                singleOrder: {}
            }

        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...state.orders.map(order => order._id !== action.payload._id)],
                error: ""
            }

        case DELETE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UPDATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...state.orders.map(order => {
                    if(order._id === action.payload._id){
                        return {...action.payload}
                    }
                    return order;
                })],
                error: ""
            }

        case UPDATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default ordersReducer;
