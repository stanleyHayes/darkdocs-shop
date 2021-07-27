import {GET_BANKS_FAILURE, GET_BANKS_REQUEST, GET_BANKS_SUCCESS} from "./banks-action-types";

const INITIAL_STATE = {
    banks: [],
    loading: false,
    error: null,
    singleInstruction: {}
};

const banksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_BANKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_BANKS_SUCCESS:
            return {
                ...state,
                loading: false,
                banks: action.payload,
                error: ""
            }
        case GET_BANKS_FAILURE:
            return {
                ...state,
                loading: false,
                banks: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default banksReducer;
