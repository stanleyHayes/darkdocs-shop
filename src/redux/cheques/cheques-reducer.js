import {
    GET_CHEQUES_FAILURE,
    GET_CHEQUES_REQUEST,
    GET_CHEQUES_SUCCESS,
    REQUEST_CHEQUE_FAILURE,
    REQUEST_CHEQUE_REQUEST,
    REQUEST_CHEQUE_SUCCESS
} from "./cheques-action-types";

const INITIAL_STATE = {
    cheques: [],
    loading: false,
    error: null,
    singleCheque: {}
};

const chequesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_CHEQUES_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_CHEQUES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                cheques: action.payload
            }

        case GET_CHEQUES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                cheques: []
            }


        case REQUEST_CHEQUE_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case REQUEST_CHEQUE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                cheques: [...state.cheques, action.payload]
            }

        case REQUEST_CHEQUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default chequesReducer;
