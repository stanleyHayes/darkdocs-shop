import {
    CREATE_FUND_FAILURE,
    CREATE_FUND_REQUEST,
    CREATE_FUND_SUCCESS,
    GET_FUNDS_FAILURE,
    GET_FUNDS_REQUEST,
    GET_FUNDS_SUCCESS
} from "./funds-action-types";

const INITIAL_STATE = {
    funds: [],
    loading: false,
    error: null,
    singleFund: {}
};

const fundsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FUNDS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_FUNDS_SUCCESS:
            return {
                ...state,
                loading: false,
                funds: action.payload,
                error: ""
            }

        case GET_FUNDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                funds: []
            }


        case CREATE_FUND_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case CREATE_FUND_SUCCESS:
            return {
                ...state,
                loading: false,
                funds: [...state.funds, action.payload],
                error: ""
            }

        case CREATE_FUND_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default fundsReducer;
