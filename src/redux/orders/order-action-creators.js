import {
    CREATE_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    UPDATE_ORDER_FAILURE,
    UPDATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    DELETE_ORDER_REQUEST,
    GET_ORDERS_REQUEST,
    GET_ORDER_FAILURE,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDERS_FAILURE,
    GET_ORDERS_SUCCESS,
    UPDATE_ORDER_REQUEST,
    CREATE_ORDER_REQUEST
} from './order-action-types';
import axios from "axios";
import {DEVELOPMENT_SERVER} from "../../constants/constants";

const createOrderRequest = () => {
    return {
        type: CREATE_ORDER_REQUEST
    }
}

const createOrderSuccess = order => {
    return {
        type: CREATE_ORDER_SUCCESS,
        payload: order
    }
}

const createOrderFailure = error => {
    return {
        type: CREATE_ORDER_FAILURE,
        payload: error
    }
}

export const createOrder = (token, order, history) => {
    return dispatch => {
        dispatch(createOrderRequest());
        axios({
            method: 'post',
            url: `${DEVELOPMENT_SERVER}/orders`,
            data: order,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(createOrderSuccess(data));
            history.push('/orders');
        }).catch(error => {
            dispatch(createOrderFailure(error.response.data.message));
        });
    }
}


const getOrdersRequest = () => {
    return {
        type: GET_ORDERS_REQUEST
    }
}

const getOrdersSuccess = orders => {
    return {
        type: GET_ORDERS_SUCCESS,
        payload: orders
    }
}

const getOrdersFailure = error => {
    return {
        type: GET_ORDERS_FAILURE,
        payload: error
    }
}

export const getOrders = (token) => {
    return dispatch => {
        dispatch(getOrdersRequest());
        axios({
            method: 'GET',
            url: `${DEVELOPMENT_SERVER}/orders`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(getOrdersSuccess(data));
        }).catch(error => {
            dispatch(getOrdersFailure(error.response.data.message));
        });
    }
}


const getOrderRequest = () => {
    return {
        type: GET_ORDER_REQUEST
    }
}

const getOrderSuccess = order => {
    return {
        type: GET_ORDER_SUCCESS,
        payload: order
    }
}

const getOrderFailure = error => {
    return {
        type: GET_ORDER_FAILURE,
        payload: error
    }
}

export const getOrder = (token, orderID, history) => {
    return dispatch => {
        dispatch(getOrderRequest());
        axios({
            method: 'GET',
            url: `${DEVELOPMENT_SERVER}/orders/${orderID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(getOrderSuccess(data));
            history.push('/orders');
        }).catch(error => {
            dispatch(getOrderFailure(error.response.data.message));
        });
    }
}


const deleteOrderRequest = () => {
    return {
        type: DELETE_ORDER_REQUEST
    }
}

const deleteOrderSuccess = order => {
    return {
        type: DELETE_ORDER_SUCCESS,
        payload: order
    }
}

const deleteOrderFailure = error => {
    return {
        type: DELETE_ORDER_FAILURE,
        payload: error
    }
}

export const deleteOrder = (token, orderID, history) => {
    return dispatch => {
        dispatch(deleteOrderRequest());
        axios({
            method: 'delete',
            url: `${DEVELOPMENT_SERVER}/orders/${orderID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(deleteOrderSuccess(data));
            history.push('/orders');
        }).catch(error => {
            dispatch(deleteOrderFailure(error.response.data.message));
        });
    }
}


const updateOrderRequest = () => {
    return {
        type: UPDATE_ORDER_REQUEST
    }
}

const updateOrderSuccess = order => {
    return {
        type: UPDATE_ORDER_SUCCESS,
        payload: order
    }
}

const updateOrderFailure = error => {
    return {
        type: UPDATE_ORDER_FAILURE,
        payload: error
    }
}

export const updateOrder = (token, order, orderID) => {
    return dispatch => {
        dispatch(updateOrderRequest());
        axios({
            method: 'put',
            url: `${DEVELOPMENT_SERVER}/orders/${orderID}`,
            data: order,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(updateOrderSuccess(data));
        }).catch(error => {
            dispatch(updateOrderFailure(error.response.data.message));
        });
    }
}
