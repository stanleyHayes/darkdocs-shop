import axios from "axios";
import {DARKDOCS_SHOP_BASE_URL_SERVER} from "../../constants/constants";
import {
    CREATE_FUND_FAILURE,
    CREATE_FUND_REQUEST,
    CREATE_FUND_SUCCESS,
    DELETE_FUND_FAILURE,
    DELETE_FUND_REQUEST,
    DELETE_FUND_SUCCESS,
    GET_FUND_FAILURE,
    GET_FUND_REQUEST,
    GET_FUND_SUCCESS,
    GET_FUNDS_FAILURE,
    GET_FUNDS_REQUEST,
    GET_FUNDS_SUCCESS,
    UPDATE_FUND_FAILURE,
    UPDATE_FUND_REQUEST,
    UPDATE_FUND_SUCCESS
} from "./funds-action-types";

const createFundRequest = () => {
    return {
        type: CREATE_FUND_REQUEST
    }
}

const createFundSuccess = fund => {
    return {
        type: CREATE_FUND_SUCCESS,
        payload: fund
    }
}

const createFundFailure = error => {
    return {
        type: CREATE_FUND_FAILURE,
        payload: error
    }
}

export const createFund = (fund, token, shoNotification) => {
    return dispatch => {
        dispatch(createFundRequest());
        axios({
            method: 'post',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/funds`,
            headers: {Authorization: `Bearer ${token}`},
            data: fund
        }).then(res => {
            const {data, message} = res.data;
            dispatch(createFundSuccess(data));
            shoNotification(message, {variant: 'success'});
        }).catch(error => {
            shoNotification(error.response.data.message, {variant: 'error'});
            dispatch(createFundFailure(error.response.data.message));
        });
    }
}


const getFundRequest = () => {
    return {
        type: GET_FUND_REQUEST
    }
}

const getFundSuccess = fund => {
    return {
        type: GET_FUND_SUCCESS,
        payload: fund
    }
}

const getFundFailure = error => {
    return {
        type: GET_FUND_FAILURE,
        payload: error
    }
}

export const getFund = (id, token) => {
    return dispatch => {
        dispatch(getFundRequest());
        axios({
            method: 'get',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/banks/${id}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(getFundSuccess(data));
        }).catch(error => {
            dispatch(getFundFailure(error.response.data.message));
        });
    }
}


const updateFundRequest = () => {
    return {
        type: UPDATE_FUND_REQUEST
    }
}

const updateFundSuccess = fund => {
    return {
        type: UPDATE_FUND_SUCCESS,
        payload: fund
    }
}

const updateFundFailure = error => {
    return {
        type: UPDATE_FUND_FAILURE,
        payload: error
    }
}

export const updateFund = (id, fund, token) => {
    return dispatch => {
        dispatch(updateFundRequest());
        axios({
            method: 'put',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/funds/${id}`,
            headers: {Authorization: `Bearer ${token}`},
            data: fund
        }).then(res => {
            const {data} = res.data;
            dispatch(updateFundSuccess(data));
        }).catch(error => {
            dispatch(updateFundFailure(error.response.data.message));
        });
    }
}


const deleteFundRequest = () => {
    return {
        type: DELETE_FUND_REQUEST
    }
}

const deleteFundSuccess = fund => {
    return {
        type: DELETE_FUND_SUCCESS,
        payload: fund
    }
}

const deleteFundFailure = error => {
    return {
        type: DELETE_FUND_FAILURE,
        payload: error
    }
}

export const deleteFund = (id, token) => {
    return dispatch => {
        dispatch(deleteFundRequest());
        axios({
            method: 'delete',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/funds/${id}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data} = res.data;
            dispatch(deleteFundSuccess(data));
        }).catch(error => {
            dispatch(deleteFundFailure(error.response.data.message));
        });
    }
}


const getFundsRequest = () => {
    return {
        type: GET_FUNDS_REQUEST
    }
}

const getFundsSuccess = (funds, fundsCount) => {
    return {
        type: GET_FUNDS_SUCCESS,
        payload: {funds, fundsCount}
    }
}

const getFundsFailure = error => {
    return {
        type: GET_FUNDS_FAILURE,
        payload: error
    }
}

export const getFunds = (token, query, showNotification) => {
    return dispatch => {
        dispatch(getFundsRequest());
        axios({
            method: 'get',
            url: `${DARKDOCS_SHOP_BASE_URL_SERVER}/funds?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            const {data, message, fundsCount} = res.data;
            showNotification(message, {variant: 'success'});
            dispatch(getFundsSuccess(data, fundsCount));
        }).catch(error => {
            showNotification(error.response.data.message, {variant: 'error'});
            dispatch(getFundsFailure(error.response.data.message));
        });
    }
}
